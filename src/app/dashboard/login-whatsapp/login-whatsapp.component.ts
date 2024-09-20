import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-whatsapp',
  templateUrl: './login-whatsapp.component.html',
  styleUrls: ['./login-whatsapp.component.css']
})
export class LoginWhatsappComponent implements OnDestroy {
  qrCodeImage: SafeUrl | null = null; // SafeUrl ensures Angular security
  private pollingSubscription: Subscription | undefined;
  private qrCodeSubscription: Subscription | undefined;
  public data: any;
  public sessionData: any = {};

  private pollingIntervalId: any;
  private successNotified: boolean = false; // Flag to ensure toastr is only shown once

  constructor(
    private service: ApiService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef // Add ChangeDetectorRef to force UI updates
  ) {
    this.loadSessionData();
  }

  /**
   * Load session data when the component is initialized.
   */
  private loadSessionData(): void {
    this.service.getSession().subscribe({
      next: data => {
        console.log('Session data loaded:', data);
        this.sessionData = data;
      },
      error: err => {
        console.error('Error loading session data:', err);
      }
    });
  }

  /**
   * Call the API to generate the QR code and display it.
   */
  callApi(): void {
    console.log("Generating QR Code...");
    this.service.checkStatus({}).subscribe({
      next:data=>{
        this.toastr.success("You are all ready loggedin");
      },
      error:err=>{
        this.qrCodeSubscription = this.service.loginWhatsapp({ sessionId: '9335792497' }).subscribe({
          next: (blob) => {
            if (blob && blob instanceof Blob) {
              const url = window.URL.createObjectURL(blob);
              this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(url);
              this.sessionData.qrCodeImage = this.qrCodeImage;
              console.log('QR Code generated successfully',this.qrCodeImage);
              
      // Sanitize the URL
              console.log('QR Code generated successfully:', this.qrCodeImage);
    
              // Manually trigger change detection to update the UI
              // this.cdr.detectChanges();
    
              // Start polling for status
              this.startPolling();
            } else {
              console.error('Invalid blob response:', blob);
            }
          },
          error: (err) => {
            console.error('Error generating QR Code:', err);
          },
        });
      }
    })

   
  }

  /**
   * Start polling for status updates after QR code generation.
   */
  private startPolling(): void {
    if (this.pollingIntervalId) {
      this.stopPolling(); // Stop any previous polling before starting a new one
    }

    this.pollingIntervalId = setInterval(() => {
      this.service.checkStatus({}).subscribe({
        next: response => {
          this.data = response;
          
          // Show success notification only once
          if (!this.successNotified && this.data) {
            this.toastr.success("You are connected successfully", 'Success');
            this.successNotified = true; // Prevent repeated notifications
            console.log('Successful status received. Stopping polling.');
            this.qrCodeImage=null
            this.stopPolling(); // Stop polling after success
          }
        },
        error: err => {
          console.error('Error fetching status:', err);
        }
      });
    }, 1000); // Poll every second
  }

  /**
   * Stop polling for status updates.
   */
  private stopPolling(): void {
    if (this.pollingIntervalId) {
      clearInterval(this.pollingIntervalId); // Stop the polling interval
      this.pollingIntervalId = null;
    }
  }

  /**
   * Cleanup when the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.qrCodeSubscription) {
      this.qrCodeSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
    }
    this.stopPolling(); // Ensure polling is stopped when the component is destroyed
  }

  /**
   * Debug method to check the QR Code Image in the console.
   */
  checkStatus(): void {
    console.log('QR Code Image:', this.qrCodeImage);
  }
}

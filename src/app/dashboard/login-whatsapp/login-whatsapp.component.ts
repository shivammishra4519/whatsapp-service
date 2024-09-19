import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-whatsapp',
  templateUrl: './login-whatsapp.component.html',
  styleUrls: ['./login-whatsapp.component.css']
})
export class LoginWhatsappComponent  {
  qrCodeImage: SafeUrl | null = null; // Use SafeUrl type for security
  private pollingSubscription: Subscription | undefined;
  private qrCodeSubscription: Subscription | undefined;
  public data: any;
  sessionData:any;
  constructor(private service: ApiService, private sanitizer: DomSanitizer,private toastr:ToastrService) {
    service.getSession().subscribe({
      next:data=>{
        console.log(data);
        this.sessionData=data;
      }
    })
  }

  callApi(): void {
    console.log("Generating QR Code...");

    // Generate the QR code and start polling only on success
    this.qrCodeSubscription = this.service.loginWhatsapp({ sessionId: '9335792497' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(url);
        console.log('QR Code generated successfully');

        // Start polling for status
        this.startPolling();
        // setInterval(() => {
        //   this.service.checkStatus({})
        //     .subscribe(
        //       response => {
        //         this.data = response;
        //         this.toastr.success("You are connected successfully", 'Success');
        //         this.qrCodeImage = null;
        //         // Stop polling if a successful status is received
        //         if (this.data) { // Adjust based on your response structure
        //           console.log('Successful status received. Stopping polling.');
                  
        //         }
        //       },
        //       error => {
        //         console.error('Error fetching status:', error);
        //       }
        //     );
        // }, 1000);
      },
      error: (err) => {
        console.error('Error generating QR Code:', err);
      },
    });
  }

  private pollingIntervalId: any;
  private successNotified: boolean = false; // Flag to ensure toastr is only shown once
  
  private startPolling(): void {
    this.pollingIntervalId = setInterval(() => {
      this.service.checkStatus({})
        .subscribe(
          response => {
            this.data = response;
  
            if (!this.successNotified && this.data) { // Check if toastr has not been shown and if data is valid
              this.toastr.success("You are connected successfully", 'Success');
              this.qrCodeImage = null;
              this.successNotified = true; // Set the flag to true so toastr is not shown again
              console.log('Successful status received. Stopping polling.');
              this.stopPolling(); // Stop the polling
            }
          },
          error => {
            console.error('Error fetching status:', error);
          }
        );
    }, 1000); // Poll every second
  }
  
  private stopPolling(): void {
    if (this.pollingIntervalId) {
      clearInterval(this.pollingIntervalId);
      this.pollingIntervalId = null;
    }
  }
  
  

 
}

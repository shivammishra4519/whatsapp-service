import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-whatsapp',
  templateUrl: './login-whatsapp.component.html',
  styleUrls: ['./login-whatsapp.component.css']
})
export class LoginWhatsappComponent implements OnDestroy {
  qrCodeImage: SafeUrl | null = null; // Use SafeUrl type for security
  private pollingSubscription: Subscription | undefined;
  private qrCodeSubscription: Subscription | undefined;
  public data: any;

  constructor(private service: ApiService, private sanitizer: DomSanitizer) {}

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
      },
      error: (err) => {
        console.error('Error generating QR Code:', err);
      },
    });
  }

  private startPolling(): void {
    console.log("Starting polling...");

    this.pollingSubscription = interval(1000) // Interval of 1 second
      .pipe(
        switchMap(() => this.service.checkStatus({ sessionId: "9335792497" }))
      )
      .subscribe(
        response => {
          this.data = response;
          console.log('API data:', this.data);

          // Stop polling if a successful status is received
          if (this.data?.status === 'ready') { // Adjust based on your response structure
            console.log('Successful status received. Stopping polling.');
            this.stopPolling();
          }
        },
        error => {
          console.error('Error fetching status:', error);
        }
      );
  }

  private stopPolling(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
      console.log("Polling stopped.");
    }
  }

  ngOnDestroy(): void {
    // if (this.pollingSubscription) {
    //   this.pollingSubscription.unsubscribe();
    // }
    // if (this.qrCodeSubscription) {
    //   this.qrCodeSubscription.unsubscribe();
    // }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { env } from '../../environment';
@Component({
  selector: 'app-sendmedia',
  templateUrl: './sendmedia.component.html',
  styleUrl: './sendmedia.component.css'
})
export class SendmediaComponent {
  whatsappNumber: string = '';
  file: File | null = null;
  fileUrl: any = null; // For preview
  fileType: string = ''; // To differentiate between image and video
  caption: string = ''; // New caption field
  url = env.url;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  // Method to handle file change and generate preview
  onFileChange(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.fileType = selectedFile.type;

      // Create a preview for the selected file
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileUrl = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  // Form submission method
  onSubmit() {
    if (!this.file || !this.whatsappNumber) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('number', this.whatsappNumber);
    formData.append('caption', this.caption);  // Append the caption

    // Make an HTTP POST request to your backend API
    this.http.post(`${this.url}api/send-media`, formData, { withCredentials: true }).subscribe({
      next: (data) => {
        this.toastr.success('Media sent successfully!');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

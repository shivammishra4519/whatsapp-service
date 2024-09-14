import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  
  constructor(private http: HttpClient, private toastr:ToastrService ) {}

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

    // Make an HTTP POST request to your backend API
    this.http.post('http://localhost:3260/api/send-media', formData,{ withCredentials: true }).subscribe({
      next:data=>{
        this.toastr.success('Media sent successfully!')
      },error:err=>{
        console.log(err)
      }
    }  );
  }
}

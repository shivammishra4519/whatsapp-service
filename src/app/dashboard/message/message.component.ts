import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: string = '';
  mobileNumber: string = '';
constructor(private mService:MessageService,private toastr:ToastrService){}
  sendMessage() {
    if (this.message && this.mobileNumber) {
      this.mService.sendQuickMessage({message:this.message,to:this.mobileNumber}).subscribe({
        next:data=>{
          this.toastr.success("message send successfully")
        },error:err=>{
        if(err.error && err.error.message){
          this.toastr.error(err.error.message)
        }else{
          this.toastr.error(err.error.error)
        }
          
        }
      })
    } else {
      this.toastr.error('Both fields are required');
    }
  }



  messagelong: string = '';
  numbers: string = '';

  onSubmit(): void {
    if(!this.messagelong){
      this.toastr.error("Message can not blank");
      return ;
    }
  if(!this.numbers){
    this.toastr.error("numbers can not be blank");
    return 
  }
   this.mService.sendQuickMessageMulti({message:this.messagelong,to:this.numbers}).subscribe({
    next:data=>{
      this.toastr.success("message send successfully")
    },
    error:err=>{
      if(err.error && err.error.message){
        this.toastr.error(err.error.message)
      }else{
        this.toastr.error(err.error.error)
      }
  
    }
   })
  }
}

import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autoreply',
  templateUrl: './autoreply.component.html',
  styleUrl: './autoreply.component.css'
})
export class AutoreplyComponent {
  answer: string = '';
  message: string = '';
  dataArray:any[]=[]
  constructor(private service: MessageService, private tostr: ToastrService) {
service.getAllAnswer().subscribe({
  next:data=>{
    this.dataArray=data.answers;
  }
})
   }

  onSubmit() {
    this.service.addAnswer({ answer: this.answer, message: this.message }).subscribe({
      next: data => {
        this.tostr.success("Answer Updated Successfully", 'Success');
        this.answer=''
        this.message=''
        this.service.getAllAnswer().subscribe({
          next:data=>{
            this.dataArray=data.answers;
          }
        })
      },
      error:err=>{
        this.tostr.error(err.error.message,'Error')
      }
    })
  }

  delete(data:any){
this.service.deleteMessage(data).subscribe({
  next:data=>{
    this.tostr.success("Message Deleted Successfully",'Success');
    this.service.getAllAnswer().subscribe({
      next:data=>{
        this.dataArray=data.answers;
      }
    })
  },
  error:err=>{
    this.tostr.error(err.error.message,'Error')
  }
})
  }
}

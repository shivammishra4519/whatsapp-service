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
  constructor(private service: MessageService, private tostr: ToastrService) { }

  onSubmit() {
    this.service.addAnswer({ answer: this.answer, message: this.message }).subscribe({
      next: data => {
        this.tostr.success("Answer Updated Successfully", 'Success');
        this.answer=''
        this.message=''
      },
      error:err=>{
        this.tostr.error(err.error.message,'Error')
      }
    })
  }
}

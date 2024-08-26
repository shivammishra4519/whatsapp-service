import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-sendedmsg',
  templateUrl: './sendedmsg.component.html',
  styleUrl: './sendedmsg.component.css'
})
export class SendedmsgComponent {
  messagesArray:any[]=[]
  constructor(private service:MessageService){
service.viewQuickMessage().subscribe({
  next:data=>{
    this.messagesArray=data.messages;
    console.log(data)
  },
  error:err=>{
    console.log(err)
  }
})
  }
}

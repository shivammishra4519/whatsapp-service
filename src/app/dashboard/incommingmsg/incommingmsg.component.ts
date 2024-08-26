import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-incommingmsg',
  templateUrl: './incommingmsg.component.html',
  styleUrl: './incommingmsg.component.css'
})
export class IncommingmsgComponent {
messageArray:any[]=[];
constructor(private smService:MessageService){
  smService.incommingMessages().subscribe({
    next:data=>{
      console.log(data)
      this.messageArray=data.messages;
    },error:err=>{
      console.log(err)
    }
  })
}
}

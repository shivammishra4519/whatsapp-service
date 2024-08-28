import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  users:any[]=[]
  constructor(private service:ApiService) {
    service.getAllUser().subscribe({
      next:data=>{
        console.log(data)
        this.users=data;
      },
      error:err=>{
        console.log(err)
      }
    })
   }
}

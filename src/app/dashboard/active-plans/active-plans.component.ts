import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-active-plans',
  templateUrl: './active-plans.component.html',
  styleUrl: './active-plans.component.css'
})
export class ActivePlansComponent {
  users:any[]=[]
  constructor(private service:PlansService){
    service.getActivePlans().subscribe({
      next:data=>{
        this.users=data;
        console.log(data)
      }
    })
  }
  calculateExpiryDate(timestamp: string, duration: number): Date {
    const purchaseDate = new Date(timestamp);
    const expiryDate = new Date(purchaseDate);
    expiryDate.setDate(purchaseDate.getDate() + duration);
    return expiryDate;
  }
}

import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrl: './payment-request.component.css'
})
export class PaymentRequestComponent {
  payments:any[]=[]
constructor(private service:PlansService){
  service.paymentRequest().subscribe({
    next:data=>{
      console.log(data)
      this.payments=data
    },
    error:err=>{
      console.log(err)
    }
  })
}

getStatusClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'success':
      return 'status-success';
    case 'fail':
      return 'status-fail';
    case 'pending':
      return 'status-pending';
    default:
      return '';
  }
}
}

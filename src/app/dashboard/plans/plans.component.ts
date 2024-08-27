import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  plans: any[] = [];
  constructor(private service: PlansService) {
    service.getAllPlan().subscribe({
      next:data=>{
        this.plans=data;
        console.log(this.plans)
      },
      error:err=>{
        console.log(err)
      }
    })
   }
   getDesignClass(index: number): string {
    const designClasses = ['design-one', 'design-two', 'design-three'];
    return designClasses[index % designClasses.length];
  }
  buyPlan(id:any){
    console.log(id)
  this.service.buyPlan(id).subscribe({
    next: (res) => {
        
      if (res  && res.paymentUrl) {
        window.location.href = res.paymentUrl;
      } else {
        alert('failed to get url')
      }
    },
    error: (err) => {
      console.log(err)
      alert('Error Processing Payment')
    }
  })
  }
}

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-trail-plan',
  templateUrl: './trail-plan.component.html',
  styleUrl: './trail-plan.component.css'
})
export class TrailPlanComponent {
  constructor(private planseervice:PlansService,private toastr:ToastrService){}
  plan = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    ip:'',
    instance:'',
    autoReplay:'',
  };

  onSubmit() {
    this.planseervice.addFreeTrail(this.plan).subscribe({
      next:data=>{
        this.toastr.success("Plan Added successfully")
      },
      error:err=>{
        this.toastr.error(err.error.message)
      }
    })
  }
}

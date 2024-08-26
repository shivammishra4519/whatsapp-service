import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {
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
    this.planseervice.addPlan(this.plan).subscribe({
      next:data=>{
        this.toastr.success("Plan Added successfully")
      },
      error:err=>{
        this.toastr.error(err.error.message)
      }
    })
  }
}

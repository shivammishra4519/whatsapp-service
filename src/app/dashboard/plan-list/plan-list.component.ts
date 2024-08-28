import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})
export class PlanListComponent {
  plans:any[]=[]
  constructor(private service:PlansService,private toastr:ToastrService) { 
    service.getAllPlan().subscribe({
      next:data=>{
      
        this.plans=data
      },
      error:err=>{
      
      }
    })
  }

  delete(id:string){
    if (confirm("Are you sure you want to delete plan?")) {
      this.service.deletePlan({id}).subscribe({
        next:data=>{
          this.toastr.success('Plan Deleted!', 'Success');
          this.service.getAllPlan().subscribe({
            next:data=>{
            
              this.plans=data
            },
            error:err=>{
            
            }
          })
        },error:err=>{
          this.toastr.error('Somtheing Went Wrong!','Error')
        }
      })
      
    } else {
      this.toastr.info('Action canceled.', 'Info');
    }
  }
}

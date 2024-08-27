import { Component } from '@angular/core';
import { PlansService } from '../../service/plans.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent {
  decodedData: any
  data: any;
  constructor(private route: ActivatedRoute, private service: PlansService,private router:Router) { }
  num = 1;
  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {


      if (params['data']) {

        this.decodedData = params;
        const decodedString = atob(this.decodedData.data);
        this.data = JSON.parse(decodedString);
      }
    });
    this.callApi()
  }


  callApi(){
    this.service.verfiyPayment(this.data).subscribe({
    next:data=>{
      console.log('success',data);
      this.router.navigate(['/dashboard/home']);
    },error:err=>{
      console.log(err)
    }
    })
  }
}

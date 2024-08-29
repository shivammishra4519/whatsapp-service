import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private builder:FormBuilder,private service:ApiService,private toastr:ToastrService,private router:Router){}

  loginForm=this.builder.group({
    userId:this.builder.control("",Validators.required),
    password:this.builder.control("",Validators.required)
  })

  login(){
    this.service.userLogin(this.loginForm.value).subscribe({
      next:data=>{
       
        this.toastr.success("Logged in successfully",'Success');
        this.router.navigate(['/dashboard'])
      },
      error:err=>{
        this.toastr.error(err.error.message)
        console.log(err)
      }
    })
  }
}

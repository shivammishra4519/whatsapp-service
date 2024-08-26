import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
constructor(private builder:FormBuilder,private tostr:ToastrService,private service:ApiService){}
userRegistration=this.builder.group({
  firstName:this.builder.control('',Validators.required),
  lastName:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
  confirmPassword:this.builder.control('',Validators.required),
  number:this.builder.control("",Validators.required),
  
})

submit(){
  if(this.userRegistration.invalid){
    this.tostr.error("Please fill all details");
  }else{
    this.service.userRegister(this.userRegistration.value).subscribe({
      next:data=>{
        this.tostr.success("user registred successfully");
        this.userRegistration.reset();
      },
      error:err=>{
        this.tostr.error(err.error.messsage)
      }
    })
  }
}
}

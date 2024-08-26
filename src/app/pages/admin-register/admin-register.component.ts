import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:ApiService,private toastr:ToastrService,private route:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
     this.service.adminRegister(this.registerForm.value).subscribe({
      next:data=>{
      this.toastr.success("user resgister successfully");
this.route.navigate(['/login'])
     },
     error:err=>{
      this.toastr.error(err.error.message)
     }
    })
    }else{
      this.toastr.error("All filed required")
    }
  }
}

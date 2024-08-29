import { Component } from '@angular/core';
import { IpService } from '../../service/ip.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ip-whitelist',
  templateUrl: './ip-whitelist.component.html',
  styleUrl: './ip-whitelist.component.css'
})
export class IpWhitelistComponent {
  
  constructor(private ipService:IpService,private fb: FormBuilder){
    this.savedToken()
  }
  inputValue: string = '';
  data:any[]=[]
  ipForm=this.fb.group({
    ipAddress: ['', [Validators.required, this.ipValidator]]
  });
  ipValidator(control: any) {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(control.value) ? null : { invalidIp: true };
  }
  onSubmit(): void {
    if (this.ipForm.valid) {
    this.ipService.whiteListIp(this.ipForm.value).subscribe({
      next:data=>{
        console.log(data);
      },
      error:err=>{
        console.log(err);
      }
    })
      // Perform your desired action here
    } else {
      console.log('Invalid IP Address');
    }
  }

  savedToken(){
    this.ipService.getTokens().subscribe({
      next:data=>{
        console.log(data)
        // this.data=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}

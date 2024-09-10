import { Component } from '@angular/core';
import { IpService } from '../../service/ip.service';

@Component({
  selector: 'app-whitlistedip',
  templateUrl: './whitlistedip.component.html',
  styleUrl: './whitlistedip.component.css'
})
export class WhitlistedipComponent {
  dataArray:any[]=[];
  constructor(private service: IpService) { 
  service.getAllTokens().subscribe({
    next:data=>{
    
      this.dataArray=data
    }
  })
  }
}

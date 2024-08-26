import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { authGuard } from './gaurd/auth.guard';
import { LoginWhatsappComponent } from './dashboard/login-whatsapp/login-whatsapp.component';
import { IpWhitelistComponent } from './dashboard/ip-whitelist/ip-whitelist.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { AddPlanComponent } from './dashboard/add-plan/add-plan.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { adminAuthGuard } from './gaurd/admin-auth.guard';
import { MessageComponent } from './dashboard/message/message.component';
import { SendedmsgComponent } from './dashboard/sendedmsg/sendedmsg.component';
import { IncommingmsgComponent } from './dashboard/incommingmsg/incommingmsg.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin-register",component:AdminRegisterComponent},
  {path:"",pathMatch:"full",redirectTo:"home"},
  {path:"user-register",component:UserRegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:SidebarComponent, children:[
    {path:"whatsapp-login",component:LoginWhatsappComponent},
    {path:"ip-whitelist",component:IpWhitelistComponent},
    {path:"plans",component:PlansComponent},
    {path:"message",component:MessageComponent},
    {path:"outgoing-msg",component:SendedmsgComponent},
    {path:"incomming-msg",component:IncommingmsgComponent},
    {path:"add-plan",component:AddPlanComponent,canActivate:[adminAuthGuard]},
  ],canActivate: [authGuard] },
  {path:"side",component:SidebarComponent},
  {path:"side",component:SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

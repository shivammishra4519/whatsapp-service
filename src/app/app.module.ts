import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { LoginWhatsappComponent } from './dashboard/login-whatsapp/login-whatsapp.component';
import { IpWhitelistComponent } from './dashboard/ip-whitelist/ip-whitelist.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { AddPlanComponent } from './dashboard/add-plan/add-plan.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { MessageComponent } from './dashboard/message/message.component';
import { SendedmsgComponent } from './dashboard/sendedmsg/sendedmsg.component';
import { IncommingmsgComponent } from './dashboard/incommingmsg/incommingmsg.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { UserlistComponent } from './dashboard/userlist/userlist.component';
import { PlanListComponent } from './dashboard/plan-list/plan-list.component';
import { ActivePlansComponent } from './dashboard/active-plans/active-plans.component';
import { PaymentRequestComponent } from './dashboard/payment-request/payment-request.component';
import { ActivePlanComponent } from './dashboard/active-plan/active-plan.component';
import { TrailPlanComponent } from './pages/trail-plan/trail-plan.component';
import { AutoreplyComponent } from './pages/autoreply/autoreply.component';
import { WhitlistedipComponent } from './pages/whitlistedip/whitlistedip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserRegistrationComponent,
    LoginComponent,
    DashboardHomeComponent,
    SidebarComponent,
    LoginWhatsappComponent,
    IpWhitelistComponent,
    PlansComponent,
    AddPlanComponent,
    AdminRegisterComponent,
    MessageComponent,
    SendedmsgComponent,
    IncommingmsgComponent,
    PaymentSuccessComponent,
    UserlistComponent,
    PlanListComponent,
    ActivePlansComponent,
    PaymentRequestComponent,
    ActivePlanComponent,
    TrailPlanComponent,
    AutoreplyComponent,
    WhitlistedipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

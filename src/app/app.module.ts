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
    IncommingmsgComponent
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

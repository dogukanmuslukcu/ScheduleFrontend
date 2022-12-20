import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';


import{ToastrModule} from "ngx-toastr";

import { LoginComponent } from './components/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { MeetingComponent } from './components/meeting/meeting.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserUpdateComponent,
    MeetingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

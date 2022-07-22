import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
// mat components -----------------------------------------------------------------------------//
import { MatFormFieldModule } from '@angular/material/form-field';
import { matDatepickerAnimations, MatDatepickerModule } from '@angular/material/datepicker';
// mat components -----------------------------------------------------------------------------//
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './Shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    PaymentComponent,
    ProductComponent,
    FilterPipe,
    DashboardComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  { path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

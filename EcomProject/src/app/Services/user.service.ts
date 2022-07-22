import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../Interface/ILogin';
import { IUser } from '../Interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router) { }

  isUserVaild:boolean=false;

  registerUser(details:IUser){
    let url="https://localhost:44396/api/User/CreatUser"
     this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Database"));
  }

  loginUser(details:ILogin){
    let url="https://localhost:44396/api/User/LoginUser"
    this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Backend"));
    // .subscribe(res=>{
    //   if(res=='Failure'){
    //     this.isUserVaild=false;
    //     console.log('login Unsuccesful');
    //   }
    //   else{
    //     this.isUserVaild=true;
    //     console.log('login Succesful');
    //     this.route.navigateByUrl('');
    //   }

    // });
  }
}

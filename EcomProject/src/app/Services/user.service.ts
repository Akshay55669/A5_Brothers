import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../Interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(details:IUser){
    let url="https://localhost:44396/api/User/CreatUser"
     this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Database"));
  }
}

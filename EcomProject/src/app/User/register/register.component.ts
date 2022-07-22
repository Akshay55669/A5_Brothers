import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../Interface/iuser';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // By using [formControl]

 Name:FormControl=new FormControl("")
 Email:FormControl=new FormControl("")
 Password:FormControl=new FormControl("")
 MobileNo:FormControl=new FormControl("")


 constructor(private UserService: UserService) { }

 ngOnInit(): void { }

 // By using [formControl]

 registerSubmit(){
   let details:IUser={
     Name:this.Name.value,
     Email:this.Email.value,
     Password:this.Password.value,
     MobileNo:this.MobileNo.value
   };
   this.UserService.registerUser(details);
   console.log(details);
 }




 // registerForm = new FormGroup({
 //   Name: new FormControl('', [Validators.required, Validators.minLength(2)]),
 //   Email: new FormControl('', [Validators.required, Validators.email]),
 //   Password: new FormControl('', [Validators.required]),
 //   MobileNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)])
 // });

 // registerSubmit() {
 //   console.log(this.registerForm.value);
 //   console.log("Submited");

 //   this.UserService.registerUser([
 //     this.registerForm.value.Name,
 //     this.registerForm.value.Email,
 //     this.registerForm.value.Password,
 //     this.registerForm.value.MobileNo
 //   ]).subscribe(res => {
 //     console.log(res);
 //   })
 // }


 // get Name(): FormControl {
 //   return this.registerForm.get("Name") as FormControl;
 // }
 // get Email(): FormControl {
 //   return this.registerForm.get("Email") as FormControl;
 // }
 // get Password(): FormControl {
 //   return this.registerForm.get("Password") as FormControl;
 // }
 // get MobileNo(): FormControl {
 //   return this.registerForm.get("MobileNo") as FormControl;
 // }

}

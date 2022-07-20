import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  registerForm=new FormGroup({
    Name: new FormControl("",[Validators.required,Validators.minLength(2)]),
    Email: new FormControl("",[Validators.required,Validators.email]),
    Password: new FormControl("",[Validators.required]),
    MobileNo: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)])
  });

  registerSubmit(){
    console.log(this.registerForm.value);
    console.log("Submited");
  }

  get Name(): FormControl{
    return this.registerForm.get("Name")as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("Email")as FormControl;
  }
  get Password(): FormControl{
    return this.registerForm.get("Password")as FormControl;
  }
  get MobileNo(): FormControl{
    return this.registerForm.get("MobileNo")as FormControl;
  }

}

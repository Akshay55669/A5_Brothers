import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Interface/ILogin';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // By using [formControl]

 Email:FormControl=new FormControl("")
 Password:FormControl=new FormControl("")

  constructor(private UserService:UserService,private router:Router) { }

  ngOnInit(): void { }

  isUserVaild:boolean=false;

  loginSubmit(){
    let details:ILogin={
      Email:this.Email.value,
      Password:this.Password.value,
    };
    this.UserService.loginUser(details);
    console.log(details);


    // this.UserService.loginUser(details).subscribe(res=>{
    //   if(res=='Failure'){
    //     this.isUserVaild=false;
    //     alert('login Unsuccesful');
    //   }
    //   else{
    //     this.isUserVaild=true;
    //     alert('login Succesful');
    //     this.router.navigateByUrl('');
    //   }
    // });


  }
  
  



//  loginForm=new FormGroup({
//    email:new FormControl("",[Validators.required,Validators.email]),
//    password:new FormControl("",[Validators.required])
//  })

//  get Email(): FormControl{
//   return this.loginForm.get("email")as FormControl
// }
// get Password(): FormControl{
//   return this.loginForm.get("password")as FormControl;
// }
}


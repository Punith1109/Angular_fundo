import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-services/user-service';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.css'],
  host: {
    class: "app-login-cnt"
  }
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  email: string='';
  password: string='';

  constructor(private formBuilder: FormBuilder, public userService:UserService, public router: Router){
    this.loginForm =this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    
  }

  get f() {
    return this.loginForm.controls;
  }

  loginUser(){
    this.submitted=true;
    const{email,password}=this.loginForm.value
    this.userService.loginUser({
     "email":email,
     "password":password
    }).subscribe((result: any)=>{
     console.log(result);
     localStorage.setItem("token",result.id)
     this.router.navigate(["/dashboard/notes"])
   },
   (error)=>{console.log(error);})
    console.log(this.loginForm.value);
  }
}

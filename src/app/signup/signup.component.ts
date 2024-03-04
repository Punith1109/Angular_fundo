import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { last } from 'rxjs';
import { UserService } from '../services/user-services/user-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  RegisterForm !: FormGroup
  submitted: boolean = false;
  passwordMatchValidator: any;
  ngOnInit():void{

  }  constructor(public formBuilder: FormBuilder, public userService:UserService){
    this.RegisterForm =this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      userName:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]],
      cnf_pswd: ["", Validators.required, this.passwordMatchValidator]
    });
  }

  
  get f(){
    return this.RegisterForm.controls
  }
  registerUser(){
    this.submitted=true;
    console.log(this.RegisterForm.value)
    const{firstName, lastName, email, password}=this.RegisterForm.value
    this.userService.signupUser({
      "firstName":firstName,
      "lastName":lastName,
      "email": email,
      "password" : password,
      "service" : "advance"
    }).subscribe((result)=>{console.log(result)},(error)=>{console.log(error)})
    console.log(this.RegisterForm.value)
  }
  
}

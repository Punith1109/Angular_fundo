import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../services/user-services/user-service';



@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.css'],
  host: {

    class:"app-login-cnt"
  }
})
export class SigninComponent {
   loginForm !: FormGroup
   submitted: boolean =false

   userName !: string
   pswd !: string
   ngOnInit():void{

   }
 
   constructor(private formBuilder: FormBuilder, public userService: UserService, public router: Router){
     this.loginForm =this.formBuilder.group({
       email:["",[Validators.required,Validators.email]],
       password:["",[Validators.required,Validators.minLength(6)]],
     });
   }
 
   get f(){
     return this.loginForm.controls
   }
   loginUser(){
     this.submitted=true;
     let error=false;
     const{email,password}=this.loginForm.value
     console.log(this.loginForm.value);
     this.userService.loginUser({
      "email":email,
      "password":password
     }).subscribe((result:any)=>{
      localStorage.setItem('token',result.id);
      this.router.navigate(['./dashboard/notes'])
      console.log(result)
    },(error:any)=>{console.log(error)})
    console.log(this.loginForm.value)
  } 
}
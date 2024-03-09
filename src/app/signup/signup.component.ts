import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user-services/user-service';
import { Router } from '@angular/router';
import { ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  RegisterForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {}

  constructor(private formBuilder: FormBuilder, private userService: UserService, public router: Router) {

    this.RegisterForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      userName: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      cnf_pswd: ["", Validators.required],
    }
    
    );
  }
  get f() {
    return this.RegisterForm.controls;
  }

 

  registerUser() {
    this.submitted = true;
    if (this.RegisterForm.invalid) {
      return;
    }
    const { firstName, lastName, userName, password, cnf_pswd } = this.RegisterForm.value;
    this.userService.signupUser({
      "firstName": firstName,
      "lastName": lastName,
      "email": userName,
      "password": password,
      "cnf_pswd": cnf_pswd,
      "service": "advance"
    }).subscribe(
      (result) => { console.log(result);
      this.router.navigate([""]) },
      (error) => { console.log(error); }
    );
    console.log(this.RegisterForm.value);
  }

}

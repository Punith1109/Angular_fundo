import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http-services';
HttpService
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpService) { }
  loginUser(data:object){
    return this.http.loginApi(data)
  }
  signupUser(data:object){
    return this.http.signupApi(data)
  }
}
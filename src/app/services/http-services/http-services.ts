import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://fundoonotes.incubation.bridgelabz.com/api"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    // Authorization: localStorage.getItem('accessToken') || ""
    Authorization: "ri4uwtVGoVspeXqrCV4EQc3LtVYgCTDKWIssJMvhilmTrOABx1kVyCmTZeGpmk1W"
  })
  constructor(public http: HttpClient) {}
  loginApi(data: object) {
    return this.http.post(`${this.baseUrl}/user/login`,data)
  }
  signupApi(data:object){
    return this.http.post(`${this.baseUrl}/user/userSignup`,data)
  }
  getNoteList(){
    return this.http.get(`${this.baseUrl}/notes/getNotesList`,{headers : this.authHeader})
  }

}
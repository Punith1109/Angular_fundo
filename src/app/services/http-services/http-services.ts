import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://fundoonotes.incubation.bridgelabz.com/api"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    
    Authorization: localStorage.getItem("token") || ""
  })
  constructor(public http: HttpClient) {}
  loginApi(data: object) {
    return this.http.post(`${this.baseUrl}/user/login`,data)
  }
  signupApi(data:object){
    return this.http.post(`${this.baseUrl}/user/userSignUp`,data)
  }
  getNoteList(){
    return this.http.get(`${this.baseUrl}/notes/getNotesList`,{headers : this.authHeader})
  }
  addNote(data: object){
    return this.http.post( `${this.baseUrl}/notes/addNotes`,data,{headers:this.authHeader})
  }

  archiveNote(requestBody: object) {
    return this.http.post(`${this.baseUrl}/notes/archiveNotes`, requestBody, { headers: this.authHeader });
  }

  getArchivedNotes() {
    return this.http.get(`${this.baseUrl}/notes/getArchiveNotesList`, { headers: this.authHeader });
  }

  deleteNote(requestBody: object) {
    return this.http.post(`${this.baseUrl}/notes/trashNotes`, requestBody, { headers: this.authHeader });
  }
  getDeletedNotes() {
    return this.http.get(`${this.baseUrl}/notes/getTrashNotesList`, { headers: this.authHeader });
  }
  deletep(requestBody:object){
    return this.http.post(`${this.baseUrl}/notes/deleteForeverNotes`, requestBody, { headers: this.authHeader })
  }
  changeColor(colorNote: object){
    return this.http.post(`${this.baseUrl}/notes/changesColorNotes`,colorNote, {headers: this.authHeader});
  }

}
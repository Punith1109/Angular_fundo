import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http-services';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(public httpService: HttpService) { 

  }
  getNoteListCall(){
    return this.httpService.getNoteList();
  }
}
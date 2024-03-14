import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http-services/http-services';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  http: any;
  baseUrl: any;
  authHeader: any;
  addNoteListCall: any;
  token: any;
  private allNotes: string[] = [];

  constructor(public httpService: HttpService) { 

  }
  
  getNoteListCall()
  {
    return this.httpService.getNoteList()
  }

  addNoteCall(data: object)
  {
    return this.httpService.addNote(data);
  }

  getNotes(): string[] {
    return this.allNotes;
  }
  archiveNoteCall(data: object)
  {
    return this.httpService.archiveNote(data);
  }
  getArchivedNotesCall() {
    return this.httpService.getArchivedNotes();
  }

  getDeletedNotesCall(){
    return this.httpService.getDeletedNotes();
  }
  deleteNoteCall(data: object)
  {
    return this.httpService.deleteNote(data);
  }
  deleteNoteCallpermanent(data:object){
    return this.httpService.deletep(data)
  }
  colorNoteCall(data: object){
    return this.httpService.changeColor(data);
  }
  colorNote(data: object){
    return this.httpService.changeColor(data);
  }
}
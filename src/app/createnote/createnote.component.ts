import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note-service/note-service.service';

interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
  "isArchived": boolean,
  "isDeleted": boolean
}
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})

export class CreateNoteComponent  {
  takeNote: boolean=true
  marginBottom = 300
  title:string =""
  description: string=""
  divWidth: number = 550;
  @Output() updateList= new EventEmitter <NoteObj>()

  constructor(public noteService:NoteService){
    
  }

  handleCreateNote(action : string ){
    this.takeNote=!this.takeNote
    if (action =='close'){
        const noteObj:NoteObj = {
          "title" : this.title,
          "description" : this.description,
          "isArchived": false,
          "isDeleted": false,
          "color": "#ffffff",
          "id":"12346"
        };
      this.noteService.addNoteCall(noteObj).subscribe(result=>{
        this.updateList.emit(noteObj);
      });
      
    }
    
  }
}
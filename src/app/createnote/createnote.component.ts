import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note-service/note-service.service';
import { ShiftService } from '../services/shift-service/shift.service';

interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
  "isArchived": boolean,
  "isDeleted": boolean
}

interface Obj{
"action":string,
"data":NoteObj
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
  noteDetails:any
  @Output() updateList= new EventEmitter <Obj>();
selectedColor:string="#ffffff";

  constructor(public noteService:NoteService, public shiftService: ShiftService){
    
  }

  handleCreateNote(action : string ){
    this.takeNote=!this.takeNote
    this.shiftService.check(this.takeNote);
    if (action =='close'){
        const noteObj:NoteObj = {
          "title" : this.title,
          "description" : this.description,
          "isArchived": false,
          "isDeleted": false,
          "color": "#ffffff",
          "id":"12346"
        };
        const emitObj={
          "action":'addNote',
          "data":noteObj
        }
      this.noteService.addNoteCall(noteObj).subscribe(result=>{
        this.updateList.emit(emitObj);
      });
  
      
    }
    
  }
  changeColor(color: string): void {
  this.selectedColor=color
  }
}
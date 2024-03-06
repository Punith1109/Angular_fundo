import { Component } from '@angular/core';
import { NoteService } from '../services/note-service/note-service.service';

interface NoteObj {
  title: string,
  description: string,
  color: string,
  id: string,
  isArchived: boolean,
  isDeleted: boolean
}

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {
  deletedNotes: NoteObj[]= [];
  filteredDeletedNotes: NoteObj[]=[];

  constructor(public noteService: NoteService) {
    this.getDeletedNotes(); }

  getDeletedNotes(): void {
    this.noteService.getDeletedNotesCall().subscribe(
      (result: any)=>{
        this.deletedNotes=result.data.data;
        console.log(this.deletedNotes);
        
        this.filteredDeletedNotes=this.deletedNotes.filter(notes => notes.isDeleted==true);
       console.log(this.filteredDeletedNotes);},
      error => {
        console.error('Error fetching deleted notes:', error);
      }
    );
  }
}

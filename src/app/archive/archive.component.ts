import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note-service/note-service.service';
import { NotecardComponent } from '../notecard/notecard.component';

interface NoteObj {
  title: string,
  description: string,
  color: string,
  id: string,
  isArchived: boolean,
  isDeleted: boolean
}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  archivedNotes: NoteObj[] = [];

  filteredArchivedNotes: NoteObj[]=[];
  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.getArchivedNotes();
    }

    getArchivedNotes(): void {
      this.noteService.getArchivedNotesCall().subscribe(
        (result: any)=>{
          this.archivedNotes=result.data.data;
          this.filteredArchivedNotes=this.archivedNotes.filter(notes => notes.isArchived && !notes.isDeleted);
         console.log(this.archivedNotes);},
        error => {
          console.error('Error fetching archived notes:', error);
        }
      );
    }
  }


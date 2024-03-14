import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note-service/note-service.service';
import { NotecardComponent } from '../notecard/notecard.component';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/app/assests/svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

interface NoteObj {
  title: string,
  description: string,
  color: string,
  id: string,
  isArchived: boolean,
  isDeleted: boolean,

}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  archivedNotes: NoteObj[] = [];

  filteredArchivedNotes: NoteObj[]=[];
  constructor(public noteService: NoteService,iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON));
  }

  ngOnInit(): void {
    this.getArchivedNotes();
    }

    getArchivedNotes(): void {
      this.noteService.getArchivedNotesCall().subscribe(
        (result: any)=>{
          this.archivedNotes=result.data.data;
          this.archivedNotes=this.archivedNotes.filter(notes => notes.isArchived && !notes.isDeleted);
         console.log(this.archivedNotes);},
        error => {
          console.error('Error fetching archived notes:', error);
        }
      );
    }

    moveToDashboard(note: NoteObj): void {
      console.log('Moving note back to dashboard:', note);
    }

updatearchivelist($event:NoteObj){
this.archivedNotes=this.archivedNotes.filter((noteobj)=>{
  return noteobj.id!=$event.id;
})
}
  }


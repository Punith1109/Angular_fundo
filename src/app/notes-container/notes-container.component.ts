import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from '../services/note-service/note-service.service'; 
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, UNDO_ICON } from 'src/app/assests/svg-icons';
import { NotecardComponent } from '../notecard/notecard.component';

 export interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
  "isArchived": boolean,
  "isDeleted" : boolean
}

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent {
  noteList: NoteObj[] = [];
  filteredNoteList:NoteObj[]=[]

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public noteService: NoteService,
    ) {
    // Register icons
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collaborator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palette-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
  }
 

  ngOnInit(): void {
    this.noteService.getNoteListCall().subscribe((result: any)=>{
      this.noteList=result.data.data      
    this.filteredNoteList=this.noteList.filter(notes => !notes.isArchived && !notes.isDeleted)
    console.log(this.noteList);
    console.log(this.filteredNoteList);
    },(error)=>{console.log(error)})
  }



  updateNoteList($event: NoteObj): void {
    console.log($event);
    this.noteList=[$event, ...this.noteList]
  }
}

import { Component, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, REMINDER_ICON, UNARCHIVE_ICON, RESTORE_ICON, DELETE_FOREVER_ICON } from 'src/app/assests/svg-icons';
import { NoteService } from '../services/note-service/note-service.service';
import { HttpService } from '../services/http-services/http-services';

interface NoteObj {
  "title":string,
  "description":string,
  "color": string,
  "id":string,
  "isArchived": boolean,
    "isDeleted" : boolean
}

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent {
  @Input() noteDetails!: NoteObj;

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public httpService: HttpService,
    public  noteService: NoteService) {
    console.log(this.noteDetails);
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('deletep-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON));
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON));

     }
     archiveNote(noteDetails:any):void {
      this.noteDetails.isArchived = true;
    console.log(noteDetails);
       const obj1={
      "noteIdList":[this.noteDetails.id],
      "isArchived":true,
     }
     this.noteService.archiveNoteCall(obj1).subscribe(
      ()=>{
      console.log("Note Archived successfully");
     },
     error => {console.error('Error:',error);}
    );
    }
  getunarcheivedNote(noteDetails:any):void{

    this.noteDetails.isArchived = false;
    console.log(noteDetails);
     const obj1={
      "noteIdList":[this.noteDetails.id],
      "isArchived":false
     }
     this.noteService.archiveNoteCall(obj1).subscribe(
      ()=>{
      console.log("Note unArchived successfully");
     },
     error => {console.error('Error:',error);}
    );

}    deleteNote(noteDetails : any): void{
      this.noteDetails.isDeleted = true;
      console.log(noteDetails);
    console.log("HII");
    
      const obj1={
        "noteIdList":[this.noteDetails.id],
        "isDeleted":true
      }
      console.log(obj1);
      
      this.noteService.deleteNoteCall(obj1).subscribe(
        ()=>{console.log("Note Deleted successfully")},
        error =>{console.log(error);}
      );
    }

    deleteperment(noteDetails:any) {
const obj1={
  "noteIdList":[this.noteDetails.id],
        "isDeleted":true
}
this.noteService.deleteNoteCallpermanent(obj1).subscribe(
  ()=>{console.log("Note Deleted successfully")},
  error =>{console.log(error);}
);
    }


    restore(noteDetails:any){
      const obj1={
        "noteIdList":[this.noteDetails.id],
        "isDeleted":false
      }
      this.noteService.deleteNoteCall(obj1).subscribe(
        ()=>{console.log("Note Restored successfully")},
        error =>{console.log(error);}
      );
    }
    changeColor(color: string): void {
      this.noteDetails.color = color;
      console.log(this.noteDetails);
       const obj1={
        "noteIdList":[this.noteDetails.id],
        "color":this.noteDetails.color
       }
       this.noteService.colorNoteCall(obj1).subscribe(
        ()=>{
        console.log("Color applied successfully");
       },
       error => {console.error('Error:',error);}
      );
    }
}

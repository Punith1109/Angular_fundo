import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/app/assests/svg-icons';
import { DataService } from '../services/data-service/data-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  host: {
    class: 'app-sidenav-cnt'
  }
})
export class SidenavComponent implements OnInit , OnDestroy {
  subscription!: Subscription;
  drawerState: boolean = false
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dataService: DataService,public router:Router){
    iconRegistry.addSvgIconLiteral('note-icon', sanitizer.bypassSecurityTrustHtml(NOTE_ICON));
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('edit-icon', sanitizer.bypassSecurityTrustHtml(EDIT_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON));
  }
  archiveClick()
  {
    this.router.navigate(['/dashboard/archive']);
  }
  deleteClick()
  {
    this.router.navigate(['/dashboard/trash']);
  }
ngOnInit(): void {
  this.subscription=this.dataService.currentDrawerState.subscribe((result)=>this.drawerState=result)
}
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
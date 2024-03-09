import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data-service/data-service.service';
import {COLLABRATOR_ICON, OTHER_MENU_ICON,} from 'src/app/assests/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewModeService } from '../services/viewmode-service/viewmodeservice.service';

@Component({
  selector: 'app-keep-view',
  templateUrl: './keep-view.component.html',
  styleUrls: ['./keep-view.component.css']
})


export class KeepViewComponent implements OnInit, OnDestroy{
 subscription!:Subscription
 drawerState : boolean = false
gridView:boolean=true;
 constructor( public dataService:DataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public viewmodeservice:ViewModeService){
  iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
  iconRegistry.addSvgIconLiteral('grid-view', sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON));
  
 } 
  ngOnInit(): void {
    this.subscription= this.dataService.currentDrawerState.subscribe(result=>this.drawerState=result)
  }
  handleDrawerState(){
    this.dataService.updateDrawerState(!this.drawerState);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  logoutuser(){
    window.localStorage.removeItem('token');
    window.location.href="http://localhost:4200/";
    console.log("USer DDeleted!");
    
  }
  changeview(){
    this.gridView=!this.gridView
    this.viewmodeservice.toggleViewMode(this.gridView);
  }
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { KeepViewComponent } from '../keep-view/keep-view.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {  MatToolbarModule } from '@angular/material/toolbar';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent,KeepViewComponent,SidenavComponent],
      imports:[MatToolbarModule]
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

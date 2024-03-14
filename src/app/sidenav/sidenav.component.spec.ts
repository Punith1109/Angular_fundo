import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { SidenavComponent } from './sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [MatSidenavModule, BrowserAnimationsModule] // Import MatSidenavModule
    });
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

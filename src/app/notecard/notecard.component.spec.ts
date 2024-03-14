import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardComponent } from './notecard.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
describe('NotecardComponent', () => {
  let component: NotecardComponent;
  let fixture: ComponentFixture<NotecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotecardComponent],
      imports: [HttpClientModule, MatIconModule,MatMenuModule],
      providers:[HttpClientModule,MatIconModule]
    });
    fixture = TestBed.createComponent(NotecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponent } from './trash.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashComponent],
      imports:[HttpClientModule,HttpClientTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

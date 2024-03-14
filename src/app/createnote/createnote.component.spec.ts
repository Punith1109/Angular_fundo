import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CreateNoteComponent } from 'src/app/createnote/createnote.component';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNoteComponent],
      providers:[HttpClientModule],
      imports:[HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

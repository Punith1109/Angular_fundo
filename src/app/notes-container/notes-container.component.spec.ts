import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NotesContainerComponent } from './notes-container.component';
import { CreateNoteComponent } from '../createnote/createnote.component';
import { MatIconModule } from '@angular/material/icon';
describe('NotesContainerComponent', () => {
  let component: NotesContainerComponent;
  let fixture: ComponentFixture<NotesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesContainerComponent, CreateNoteComponent],
      imports:[HttpClientModule,MatIconModule],
      providers:[HttpClientModule,MatIconModule]
    });
    fixture = TestBed.createComponent(NotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent} from 'src/app/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user-services/user-service';
import { HttpService } from '../services/http-services/http-services';
import { ReactiveFormsModule } from '@angular/forms';
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports:[HttpClientModule,ReactiveFormsModule],
      providers:[UserService,HttpService]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
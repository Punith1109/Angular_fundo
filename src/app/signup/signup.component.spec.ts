import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { SignupComponent } from './signup.component';
import { UserService } from '../services/user-services/user-service';
import { HttpService } from '../services/http-services/http-services';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [HttpClientModule],
      providers:[UserService,HttpService] // Import HttpClientModule
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

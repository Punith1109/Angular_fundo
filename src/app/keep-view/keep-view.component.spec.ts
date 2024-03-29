import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepViewComponent } from './keep-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('KeepViewComponent', () => {
  let component: KeepViewComponent;
  let fixture: ComponentFixture<KeepViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeepViewComponent],
      imports:[MatToolbarModule]
    });
    fixture = TestBed.createComponent(KeepViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

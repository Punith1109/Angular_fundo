import { TestBed } from '@angular/core/testing';

import { ShiftService } from './shift.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShiftService', () => {
  let service: ShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers:[ShiftService]
    });
    service = TestBed.inject(ShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

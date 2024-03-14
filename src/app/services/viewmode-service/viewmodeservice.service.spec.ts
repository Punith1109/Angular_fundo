import { TestBed } from '@angular/core/testing';

import { ViewModeService } from './viewmodeservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewModeService', () => {
  let service: ViewModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers:[ViewModeService]
    });
    service = TestBed.inject(ViewModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

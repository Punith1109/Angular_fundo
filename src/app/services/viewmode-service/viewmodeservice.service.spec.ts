import { TestBed } from '@angular/core/testing';

import { ViewmodeserviceService } from './viewmodeservice.service';

describe('ViewmodeserviceService', () => {
  let service: ViewmodeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmodeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

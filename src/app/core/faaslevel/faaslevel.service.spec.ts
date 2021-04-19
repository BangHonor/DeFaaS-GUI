import { TestBed } from '@angular/core/testing';

import { FaaslevelService } from './faaslevel.service';

describe('FaaslevelService', () => {
  let service: FaaslevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaaslevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FuncsvcService } from './funcsvc.service';

describe('FuncsvcService', () => {
  let service: FuncsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FunccodeService } from './funccode.service';

describe('FunccodeService', () => {
  let service: FunccodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunccodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

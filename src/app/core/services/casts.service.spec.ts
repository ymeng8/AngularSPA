import { TestBed } from '@angular/core/testing';

import { CastsService } from './casts.service';

describe('CastsService', () => {
  let service: CastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

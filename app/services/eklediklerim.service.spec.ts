import { TestBed } from '@angular/core/testing';

import { EklediklerimService } from './eklediklerim.service';

describe('EklediklerimService', () => {
  let service: EklediklerimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EklediklerimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

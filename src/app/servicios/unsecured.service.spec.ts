import { TestBed } from '@angular/core/testing';

import { UnsecuredService } from './unsecured.service';

describe('UnsecuredService', () => {
  let service: UnsecuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsecuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

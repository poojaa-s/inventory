import { TestBed } from '@angular/core/testing';

import { AuthGuaurdService } from './auth-guaurd.service';

describe('AuthGuaurdService', () => {
  let service: AuthGuaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

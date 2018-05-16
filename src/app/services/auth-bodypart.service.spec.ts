import { TestBed, inject } from '@angular/core/testing';

import { AuthBodypartService } from './auth-bodypart.service';

describe('AuthBodypartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthBodypartService]
    });
  });

  it('should be created', inject([AuthBodypartService], (service: AuthBodypartService) => {
    expect(service).toBeTruthy();
  }));
});

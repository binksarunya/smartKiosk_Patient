import { TestBed, inject } from '@angular/core/testing';

import { AuthWelcomeService } from './auth-welcome.service';

describe('AuthWelcomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthWelcomeService]
    });
  });

  it('should be created', inject([AuthWelcomeService], (service: AuthWelcomeService) => {
    expect(service).toBeTruthy();
  }));
});

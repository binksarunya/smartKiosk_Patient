import { TestBed, inject } from '@angular/core/testing';

import { BodypartService } from './bodypart.service';

describe('BodypartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodypartService]
    });
  });

  it('should be created', inject([BodypartService], (service: BodypartService) => {
    expect(service).toBeTruthy();
  }));
});

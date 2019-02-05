import { TestBed } from '@angular/core/testing';

import { AstronautsService } from './astronauts.service';

describe('AstronautsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstronautsService = TestBed.get(AstronautsService);
    expect(service).toBeTruthy();
  });
});

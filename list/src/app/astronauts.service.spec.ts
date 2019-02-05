import { TestBed } from '@angular/core/testing';

import { ApolloMissionsService } from './astronauts.service';

describe('AstronautsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApolloMissionsService = TestBed.get(ApolloMissionsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RandomPicsService } from './random-pics.service';

describe('RandomPicsService', () => {
  let service: RandomPicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

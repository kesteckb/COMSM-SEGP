import { TestBed } from '@angular/core/testing';

import { HobbitService } from './hobbit.service';

describe('HobbitService', () => {
  let service: HobbitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

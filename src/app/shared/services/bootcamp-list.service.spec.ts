import { TestBed } from '@angular/core/testing';

import { BootcampListService } from './bootcamp-list.service';

describe('BootcampListService', () => {
  let service: BootcampListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootcampListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

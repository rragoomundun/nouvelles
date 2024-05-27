import { TestBed } from '@angular/core/testing';

import { StorageSharedService } from './storage-shared.service';

describe('StorageSharedService', () => {
  let service: StorageSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

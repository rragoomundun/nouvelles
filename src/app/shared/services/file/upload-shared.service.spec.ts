import { TestBed } from '@angular/core/testing';

import { UploadSharedService } from './upload-shared.service';

describe('UploadSharedService', () => {
  let service: UploadSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

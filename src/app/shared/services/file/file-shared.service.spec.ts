import { TestBed } from '@angular/core/testing';

import { FileSharedService } from './file-shared.service';

describe('FileSharedService', () => {
  let service: FileSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

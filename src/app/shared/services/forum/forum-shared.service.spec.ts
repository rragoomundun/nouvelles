import { TestBed } from '@angular/core/testing';

import { ForumSharedService } from './forum-shared.service';

describe('ForumSharedService', () => {
  let service: ForumSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UrlSharedService } from './url-shared.service';

describe('UrlSharedService', () => {
  let service: UrlSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ArticleSharedService } from './article-shared.service';

describe('ArticleSharedService', () => {
  let service: ArticleSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArticlesItemComponent } from './search-articles-item.component';

describe('SearchArticlesItemComponent', () => {
  let component: SearchArticlesItemComponent;
  let fixture: ComponentFixture<SearchArticlesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchArticlesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchArticlesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

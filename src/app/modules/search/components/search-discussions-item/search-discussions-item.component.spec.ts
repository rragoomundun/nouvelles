import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiscussionsItemComponent } from './search-discussions-item.component';

describe('SearchDiscussionsItemComponent', () => {
  let component: SearchDiscussionsItemComponent;
  let fixture: ComponentFixture<SearchDiscussionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDiscussionsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDiscussionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

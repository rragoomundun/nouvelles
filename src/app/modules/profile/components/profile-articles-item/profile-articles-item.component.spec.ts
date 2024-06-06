import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArticlesItemComponent } from './profile-articles-item.component';

describe('ProfileArticlesItemComponent', () => {
  let component: ProfileArticlesItemComponent;
  let fixture: ComponentFixture<ProfileArticlesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileArticlesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileArticlesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

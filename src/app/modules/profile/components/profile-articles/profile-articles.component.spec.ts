import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArticlesComponent } from './profile-articles.component';

describe('ProfileArticlesComponent', () => {
  let component: ProfileArticlesComponent;
  let fixture: ComponentFixture<ProfileArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

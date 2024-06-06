import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDiscussionsItemComponent } from './profile-discussions-item.component';

describe('ProfileDiscussionsItemComponent', () => {
  let component: ProfileDiscussionsItemComponent;
  let fixture: ComponentFixture<ProfileDiscussionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDiscussionsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileDiscussionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

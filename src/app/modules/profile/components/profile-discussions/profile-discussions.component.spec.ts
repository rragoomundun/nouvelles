import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDiscussionsComponent } from './profile-discussions.component';

describe('ProfileDiscussionsComponent', () => {
  let component: ProfileDiscussionsComponent;
  let fixture: ComponentFixture<ProfileDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDiscussionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

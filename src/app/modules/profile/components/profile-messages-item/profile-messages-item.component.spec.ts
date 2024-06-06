import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMessagesItemComponent } from './profile-messages-item.component';

describe('ProfileMessagesItemComponent', () => {
  let component: ProfileMessagesItemComponent;
  let fixture: ComponentFixture<ProfileMessagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMessagesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMessagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

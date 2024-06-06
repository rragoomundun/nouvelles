import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMessagesComponent } from './profile-messages.component';

describe('ProfileMessagesComponent', () => {
  let component: ProfileMessagesComponent;
  let fixture: ComponentFixture<ProfileMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

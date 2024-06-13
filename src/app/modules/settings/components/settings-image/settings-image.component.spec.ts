import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsImageComponent } from './settings-image.component';

describe('SettingsImageComponent', () => {
  let component: SettingsImageComponent;
  let fixture: ComponentFixture<SettingsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

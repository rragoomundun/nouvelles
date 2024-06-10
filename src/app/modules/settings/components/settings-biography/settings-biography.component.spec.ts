import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBiographyComponent } from './settings-biography.component';

describe('SettingsBiographyComponent', () => {
  let component: SettingsBiographyComponent;
  let fixture: ComponentFixture<SettingsBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsBiographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

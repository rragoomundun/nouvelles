import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDiscussionComponent } from './answer-discussion.component';

describe('AnswerDiscussionComponent', () => {
  let component: AnswerDiscussionComponent;
  let fixture: ComponentFixture<AnswerDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerDiscussionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ForumService } from '../../services/forum/forum.service';

@Component({
  selector: 'app-answer-discussion',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './answer-discussion.component.html',
  styleUrl: './answer-discussion.component.scss',
})
export class AnswerDiscussionComponent implements OnInit {
  answerForm: FormGroup;
  onAnswer: string;

  @Output() answered: EventEmitter<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private forumService: ForumService,
  ) {
    this.answered = new EventEmitter<boolean>();
  }

  get isFormValid(): boolean {
    return this.answerForm.valid;
  }

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      message: new FormControl('', [Validators.required]),
    });

    this.onAnswer = 'false';
  }

  onSubmit(): void {
    const discussionId = this.activatedRoute.snapshot.params['discussionId'];
    const params = this.answerForm.value;

    this.onAnswer = 'true';

    this.forumService.postMessage(discussionId, params).subscribe({
      complete: () => {
        this.answerForm.controls['message'].setValue('');
        this.onAnswer = 'success';

        this.answered.emit();
      },
      error: () => {
        this.onAnswer = 'error';
      },
    });
  }
}

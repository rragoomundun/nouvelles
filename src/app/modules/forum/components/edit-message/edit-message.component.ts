import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ForumService } from '../../services/forum/forum.service';

@Component({
  selector: 'app-edit-message',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './edit-message.component.html',
  styleUrl: './edit-message.component.scss',
})
export class EditMessageComponent implements OnInit {
  @ViewChild('content', { read: TemplateRef })
  contentTemplate: TemplateRef<any>;
  @Output() modified: EventEmitter<{
    messageId: number;
    message: string;
    date: Date;
  }>;

  discussionId: number;
  messageId: number;
  messageForm: FormGroup;
  onEdit: string;

  private modalService = inject(NgbModal);

  constructor(private forumService: ForumService) {
    this.modified = new EventEmitter<{
      messageId: number;
      message: string;
      date: Date;
    }>();
  }

  get isFormValid(): boolean {
    return this.messageForm.valid;
  }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      message: new FormControl('', [Validators.required]),
    });

    this.onEdit = 'false';
  }

  open(discussionId: number, messageId: number, message: string): void {
    this.discussionId = discussionId;
    this.messageId = messageId;

    this.messageForm.controls['message'].setValue(message);

    this.modalService.open(this.contentTemplate, { size: 'lg' });
  }

  onSubmit() {
    this.onEdit = 'true';

    this.forumService
      .editMessage(this.discussionId, this.messageId, this.messageForm.value)
      .subscribe({
        complete: () => {
          this.onEdit = 'success';

          this.modalService.dismissAll();

          this.modified.emit({
            messageId: this.messageId,
            message: this.messageForm.value.message,
            date: new Date(),
          });
        },
        error: () => {
          this.onEdit = 'error';
        },
      });
  }
}

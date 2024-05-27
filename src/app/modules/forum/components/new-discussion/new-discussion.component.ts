import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { ForumService } from '../../services/forum/forum.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
  selector: 'app-new-discussion',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './new-discussion.component.html',
  styleUrl: './new-discussion.component.scss',
})
export class NewDiscussionComponent implements OnInit {
  discussionForm: FormGroup;
  onCreation: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appSharedService: AppSharedService,
    private forumService: ForumService,
    private urlSharedService: UrlSharedService,
  ) {}

  get isFormValid(): boolean {
    return this.discussionForm.valid;
  }

  ngOnInit(): void {
    this.appSharedService.setTitle('FORUM_COMMON.NEW_DISCUSSION');

    this.discussionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

    this.onCreation = 'false';
  }

  onSubmit(): void {
    const params = {
      name: this.discussionForm.controls['name'].value,
      message: this.discussionForm.controls['message'].value,
      forum: this.activatedRoute.snapshot.params['forum'],
    };

    this.onCreation = 'true';

    this.forumService.postDiscussion(params).subscribe({
      next: (value) => {
        const { id } = value;
        const url = `/forum/${params.forum}/discussion/${id}/${this.urlSharedService.toLowerURL(params.name)}`;

        this.router.navigate([url]);
      },
      error: () => {
        this.onCreation = 'error';
      },
    });
  }
}

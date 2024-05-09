import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppService } from '../../shared/services/app/app.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { UploadService } from '../../shared/services/file/upload.service';
import { ArticleService } from '../../shared/services/article/article.service';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss',
})
export class EditArticleComponent implements OnInit {
  id: number;
  isNotOwner: boolean;
  notFound: boolean;
  image: string | null;
  file: File;
  articleForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private articleService: ArticleService,
    private uploadService: UploadService,
    public categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.appService.setTitle('EDIT_ARTICLE_PAGE.TITLE');

    this.id = this.activatedRoute.snapshot.params['id'];

    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      published: new FormControl(false),
    });

    this.articleService.isUserOwner(this.id).subscribe({
      next: () => {
        this.articleService.getArticle(this.id).subscribe({
          next: (value: any) => {
            this.image = value.image;

            this.articleForm.controls['title'].setValue(value.title);
            this.articleForm.controls['content'].setValue(value.content);
            this.articleForm.controls['category'].setValue(value.category);
            this.articleForm.controls['published'].setValue(
              Boolean(value.published),
            );
          },
        });
      },
      error: (error: any) => {
        const { type } = error.error;

        if (type) {
          if (type === 'NOT_OWNER') {
            this.isNotOwner = true;
          } else if (type === 'NOT_FOUND') {
            this.notFound = true;
          }
        }
      },
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.image = null;
  }

  onSubmit() {
    console.log(this.articleForm.value);
  }
}

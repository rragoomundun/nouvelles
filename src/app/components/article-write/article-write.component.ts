import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AppService } from '../../shared/services/app/app.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { UploadService } from '../../shared/services/file/upload.service';
import { ArticleService } from '../../shared/services/article/article.service';

@Component({
  selector: 'app-article-write',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './article-write.component.html',
  styleUrl: './article-write.component.scss',
})
export class ArticleWriteComponent {
  id: number;
  articleForm: FormGroup;
  originalImage: string | null;
  file: File;
  canEdit: boolean;
  onValidate: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private articleService: ArticleService,
    private uploadService: UploadService,
    public categoryService: CategoryService,
  ) {
    this.appService.setTitle('ARTICLE_WRITE_PAGE.TITLE');

    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      published: new FormControl(false),
    });

    this.onValidate = 'false';

    if (this.activatedRoute.snapshot.queryParams['id']) {
      this.id = this.activatedRoute.snapshot.queryParams['id'];

      this.articleService.isUserOwner(this.id).subscribe({
        next: () => {
          this.canEdit = true;

          this.articleService.getArticle(this.id).subscribe({
            next: (value) => {
              this.originalImage = value.image;

              this.articleForm.controls['title'].setValue(value.title);
              this.articleForm.controls['content'].setValue(value.content);
              this.articleForm.controls['category'].setValue(value.category);
              this.articleForm.controls['published'].setValue(value.published);
            },
          });
        },
        error: () => {
          this.canEdit = false;
        },
      });
    }
  }

  get isArticleFormValid(): boolean {
    return (
      this.articleForm.controls['title'].status === 'VALID' &&
      this.file &&
      this.articleForm.controls['content'].status === 'VALID' &&
      this.articleForm.controls['category'].status === 'VALID'
    );
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    this.originalImage = null;
  }

  onSubmit(): void {
    this.onValidate = 'true';

    let publishedValue = null;

    if ([true, 'true'].includes(this.articleForm.controls['published'].value)) {
      publishedValue = 'true';
    }

    this.articleForm.controls['published'].setValue(publishedValue);

    const data: any = {
      title: this.articleForm.controls['title'].value,
      content: this.articleForm.controls['content'].value,
      category: this.articleForm.controls['category'].value,
      published: this.articleForm.controls['published'].value,
    };

    if (this.id) {
      data.id = this.id;
    }

    if (this.originalImage) {
      data.image = this.originalImage;

      this.articleService.postArticle(data).subscribe({
        complete: () => {
          this.onValidate = 'success';
        },
        error: () => {
          this.onValidate = 'error';
        },
      });
    } else {
      this.uploadService.upload(this.file).subscribe({
        next: (value) => {
          data.image = value.file;

          this.articleService.postArticle(data).subscribe({
            complete: () => {
              this.onValidate = 'success';
            },
            error: () => {
              this.onValidate = 'error';
            },
          });
        },
        error: () => {
          this.onValidate = 'error';
        },
      });
    }
  }
}

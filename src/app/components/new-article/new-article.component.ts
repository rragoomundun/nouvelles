import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppService } from '../../shared/services/app/app.service';
import { ArticleService } from '../../shared/services/article/article.service';
import { UploadService } from '../../shared/services/file/upload.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { UrlService } from '../../shared/services/url/url.service';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, RouterModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss',
})
export class NewArticleComponent implements OnInit {
  articleForm: FormGroup;
  file: File;
  createdArticleLink: string;
  onCreation: string;

  constructor(
    private appService: AppService,
    private articleService: ArticleService,
    private uploadService: UploadService,
    private urlService: UrlService,
    public categoryService: CategoryService,
  ) {}

  get isFormValid(): boolean {
    return (
      this.articleForm.controls['title'].status === 'VALID' &&
      this.articleForm.controls['content'].status === 'VALID' &&
      this.articleForm.controls['category'].status === 'VALID' &&
      this.file !== undefined
    );
  }

  ngOnInit(): void {
    this.appService.setTitle('NEW_ARTICLE_PAGE.TITLE');

    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      published: new FormControl(false),
    });

    this.onCreation = 'false';
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    const publishedControl = this.articleForm.controls['published'];
    let published;

    if ([true, 'true'].includes(publishedControl.value)) {
      published = 'true';
    }

    publishedControl.setValue(published);

    this.onCreation = 'true';

    this.uploadService.upload(this.file).subscribe({
      next: (value) => {
        this.articleForm.controls['image'].setValue(value.file);

        this.articleService.postArticle(this.articleForm.value).subscribe({
          next: (value) => {
            this.createdArticleLink = `/categorie/${this.articleForm.controls['category'].value}/article/${value.id}/${this.urlService.toLowerURL(this.articleForm.controls['title'].value)}`;
          },
          complete: () => {
            this.onCreation = 'success';
          },
          error: () => {
            this.onCreation = 'error';
          },
        });
      },
      error: () => {
        this.onCreation = 'error';
      },
    });
  }
}

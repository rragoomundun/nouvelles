import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { CategorySharedService } from '../../../../shared/services/category/category-shared.service';
import { FileSharedService } from '../../../../shared/services/file/file-shared.service';
import { ArticleSharedService } from '../../../../shared/services/article/article-shared.service';
import { ArticleService } from '../../services/article/article.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
    selector: 'app-edit-article',
    imports: [TranslateModule, RouterModule, ReactiveFormsModule],
    templateUrl: './edit-article.component.html',
    styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent implements OnInit {
  id: number;
  title: string;
  isNotOwner: boolean;
  notFound: boolean;
  image: string | null;
  file: File | null;
  articleForm: FormGroup;
  editedArticleLink: string;
  onEdit: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appSharedService: AppSharedService,
    private articleSharedService: ArticleSharedService,
    private articleService: ArticleService,
    private fileSharedService: FileSharedService,
    private urlSharedService: UrlSharedService,
    public categorySharedService: CategorySharedService,
  ) {}

  get isFormValid(): boolean {
    return (
      this.articleForm.controls['title'].status === 'VALID' &&
      this.articleForm.controls['content'].status === 'VALID' &&
      this.articleForm.controls['category'].status === 'VALID' &&
      (this.file !== undefined || this.image !== null)
    );
  }

  ngOnInit(): void {
    this.appSharedService.setTitle('EDIT_ARTICLE_PAGE.TITLE');

    this.id = this.activatedRoute.snapshot.params['id'];

    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      published: new FormControl(false),
    });

    this.onEdit = 'false';

    this.articleService.isUserOwner(this.id).subscribe({
      next: () => {
        this.articleSharedService.getArticle(this.id).subscribe({
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
    const { title, content, category, published } = this.articleForm.controls;

    const data: any = {
      id: this.id,
      title: title.value,
      content: content.value,
      category: category.value,
    };

    this.title = title.value;

    if ([true, 'true'].includes(published.value)) {
      data.published = 'true';
    } else {
      data.published = null;
    }

    this.onEdit = 'true';

    if (this.image) {
      data.image = this.image;

      this.articleSharedService.postArticle(data).subscribe({
        complete: () => {
          this.editedArticleLink = `/categorie/${data.category}/article/${data.id}/${this.urlSharedService.toLowerURL(data.title)}`;
          this.onEdit = 'success';
        },
        error: () => {
          this.onEdit = 'error';
        },
      });
    } else {
      this.fileSharedService.upload(<File>this.file).subscribe({
        next: (value: any) => {
          data.image = value.file;

          this.articleSharedService.postArticle(data).subscribe({
            complete: () => {
              this.editedArticleLink = `/categorie/${data.category}/article/${data.id}/${this.urlSharedService.toLowerURL(data.title)}`;
              this.image = data.image;
              this.file = null;
              this.onEdit = 'success';
            },
            error: () => {
              this.onEdit = 'error';
            },
          });
        },
        error: () => {
          this.onEdit = 'error';
        },
      });
    }
  }
}

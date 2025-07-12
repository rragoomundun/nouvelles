import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SearchArticlesComponent } from '../search-articles/search-articles.component';

import { SearchDiscussionsComponent } from '../search-discussions/search-discussions.component';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
    selector: 'app-search',
    imports: [
        TranslateModule,
        ReactiveFormsModule,
        SearchArticlesComponent,
        SearchDiscussionsComponent,
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appService: AppSharedService,
  ) {}

  get query(): string {
    return this.activatedRoute.snapshot.queryParams['query'];
  }

  get queryControl(): string {
    return this.searchForm.controls['query'].value;
  }

  get searchArea(): string {
    const searchArea = this.activatedRoute.snapshot.queryParams['searchArea'];

    if (!searchArea || ['articles', 'forum'].includes(searchArea) === false) {
      return 'articles';
    }

    return searchArea;
  }

  get searchAreaControl(): string {
    return this.searchForm.controls['searchArea'].value;
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      query: new FormControl(this.query),
      searchArea: new FormControl(this.searchArea),
    });

    this.appService.setTitle('SEARCH_PAGE.TITLE');
  }

  load(): void {
    this.router.navigate(['/rechercher'], {
      queryParams: {
        query: this.queryControl,
        searchArea: this.searchAreaControl,
      },
    });
  }

  onSubmit(event: any): void {
    event.preventDefault();
    this.load();
  }

  onSearchAreaChange(): void {
    this.load();
  }

  @HostListener('document:headerSearch', ['$event'])
  onHeaderSearch(event: any) {
    this.searchForm.controls['query'].setValue(event.detail.query);
    setTimeout(() => this.load());
  }
}

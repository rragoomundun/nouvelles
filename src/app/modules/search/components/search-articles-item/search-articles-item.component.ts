import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
  selector: 'app-search-articles-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-articles-item.component.html',
  styleUrl: './search-articles-item.component.scss',
})
export class SearchArticlesItemComponent {
  @Input() article: any;

  constructor(public urlSharedService: UrlSharedService) {}
}

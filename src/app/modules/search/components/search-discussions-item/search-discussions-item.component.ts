import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-discussions-item',
  standalone: true,
  imports: [],
  templateUrl: './search-discussions-item.component.html',
  styleUrl: './search-discussions-item.component.scss',
})
export class SearchDiscussionsItemComponent {
  @Input() message: any;
}

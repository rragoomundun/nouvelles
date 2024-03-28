import { Component, Output, EventEmitter } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() registerClick: EventEmitter<void>;

  constructor() {
    this.registerClick = new EventEmitter<void>();
  }

  onRegisterClick() {
    this.registerClick.emit();
  }
}

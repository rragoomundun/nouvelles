import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(private appSharedService: AppSharedService) {
    this.appSharedService.setTitle('404_PAGE.TITLE');
  }
}

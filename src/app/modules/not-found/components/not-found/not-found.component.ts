import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppService } from '../../../../shared/services/app/app.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(private appService: AppService) {
    this.appService.setTitle('404_PAGE.TITLE');
  }
}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppService } from '../../shared/services/app/app.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register-confirm',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './register-confirm.component.html',
  styleUrl: './register-confirm.component.scss',
})
export class RegisterConfirmComponent {
  onRegisterConfirm: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.appService.setTitle('REGISTER_CONFIRM_PAGE.TITLE');

    this.onRegisterConfirm = 'false';
  }

  onRegisterConfirmClick() {
    const confirmationToken =
      this.activatedRoute.snapshot.paramMap.get('confirmationToken');

    this.onRegisterConfirm = 'true';

    this.authService.registerConfirm(confirmationToken).subscribe({
      complete: () => {
        this.onRegisterConfirm = 'success';

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      error: () => {
        this.onRegisterConfirm = 'error';
      },
    });
  }
}
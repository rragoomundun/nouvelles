import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';

@Component({
  selector: 'app-register-confirm',
  imports: [TranslateModule, RouterLink],
  templateUrl: './register-confirm.component.html',
  styleUrl: './register-confirm.component.scss',
})
export class RegisterConfirmComponent implements OnInit {
  onRegisterConfirm: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appSharedService: AppSharedService,
    private authService: AuthService,
    private userSharedService: UserSharedService,
  ) {
    this.appSharedService.setTitle('REGISTER_CONFIRM_PAGE.TITLE');

    this.onRegisterConfirm = 'false';
  }

  ngOnInit(): void {
    const confirmationToken =
      this.activatedRoute.snapshot.paramMap.get('confirmationToken');

    this.onRegisterConfirm = 'true';

    this.authService.registerConfirm(confirmationToken).subscribe({
      complete: () => {
        this.onRegisterConfirm = 'success';

        setTimeout(() => {
          this.userSharedService.setUser();
          this.router.navigate(['/']);
        }, 3000);
      },
      error: () => {
        this.onRegisterConfirm = 'error';
      },
    });
  }
}

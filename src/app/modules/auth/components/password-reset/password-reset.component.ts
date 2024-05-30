import { Component } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { AuthService } from '../../services/auth/auth.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, TranslateModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss',
})
export class PasswordResetComponent {
  passwordResetForm: FormGroup;

  onPasswordReset: string;
  passwordResetError: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appSharedService: AppSharedService,
    private authService: AuthService,
    private userSharedService: UserSharedService,
  ) {
    this.appSharedService.setTitle('PASSWORD_RESET_PAGE.TITLE');

    this.passwordResetForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    });

    this.onPasswordReset = 'false';
  }

  get isPasswordResetFormValid(): boolean {
    return this.passwordResetForm.valid;
  }

  onSubmit(): void {
    const resetPasswordToken =
      this.activatedRoute.snapshot.paramMap.get('resetPasswordToken');
    const params = {
      password: this.passwordResetForm.value.password,
      repeatedPassword: this.passwordResetForm.value.repeatPassword,
    };

    this.onPasswordReset = 'true';

    this.authService
      .resetPassword(params, <string>resetPasswordToken)
      .subscribe({
        complete: () => {
          this.onPasswordReset = 'success';
          this.userSharedService.setUser();

          setTimeout(() => this.router.navigate(['/']), 3000);
        },
        error: (error) => {
          const { type } = error.error;

          this.onPasswordReset = 'error';

          if (type) {
            this.passwordResetError = `PASSWORD_RESET_PAGE.ERRORS.${type}`;
          }
        },
      });
  }
}

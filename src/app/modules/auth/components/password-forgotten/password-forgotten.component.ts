import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-password-forgotten',
    imports: [ReactiveFormsModule, RouterLink, TranslateModule],
    templateUrl: './password-forgotten.component.html',
    styleUrl: './password-forgotten.component.scss'
})
export class PasswordForgottenComponent {
  passwordForgottenForm: FormGroup;

  onPasswordForgotten: string;
  passwordForgottenError: string;

  constructor(
    private appSharedService: AppSharedService,
    private authService: AuthService,
  ) {
    this.appSharedService.setTitle('PASSWORD_FORGOTTEN_PAGE.TITLE');

    this.passwordForgottenForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });

    this.onPasswordForgotten = 'false';
  }

  get isPasswordForgottenFormValid(): boolean {
    return this.passwordForgottenForm.valid;
  }

  onSubmit(): void {
    this.onPasswordForgotten = 'true';

    this.authService
      .passwordForgotten(this.passwordForgottenForm.value)
      .subscribe({
        complete: () => (this.onPasswordForgotten = 'success'),
        error: (error: HttpErrorResponse) => {
          const { type } = error.error;

          this.onPasswordForgotten = 'error';

          if (type) {
            this.passwordForgottenError = `PASSWORD_FORGOTTEN_PAGE.ERRORS.${type}`;
          }
        },
      });
  }
}

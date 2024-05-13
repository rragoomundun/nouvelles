import { Component } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppService } from '../../shared/services/app/app.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { UserService } from '../../shared/services/user/user.service';

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
    private appService: AppService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.appService.setTitle('PASSWORD_RESET_PAGE.TITLE');

    this.passwordResetForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    });

    this.onPasswordReset = 'false';
  }

  get isPasswordResetFormValid(): boolean {
    return (
      this.passwordResetForm.valid &&
      this.passwordResetForm.controls['password'].value ===
        this.passwordResetForm.controls['repeatPassword'].value
    );
  }

  onSubmit(): void {
    const resetPasswordToken =
      this.activatedRoute.snapshot.paramMap.get('resetPasswordToken');
    const params = {
      password: this.passwordResetForm.value.password,
    };

    this.onPasswordReset = 'true';

    this.authService
      .resetPassword(params, <string>resetPasswordToken)
      .subscribe({
        complete: () => {
          this.onPasswordReset = 'success';
          this.userService.setUser();

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

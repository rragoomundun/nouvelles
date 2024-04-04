import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-password-forgotten',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './password-forgotten.component.html',
  styleUrl: './password-forgotten.component.scss',
})
export class PasswordForgottenComponent {
  passwordForgottenForm: FormGroup;

  constructor() {
    this.passwordForgottenForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  get isPasswordForgottenFormValid(): boolean {
    return this.passwordForgottenForm.valid;
  }
}

import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginModalTemplate') loginModalTemplate!: TemplateRef<any>;

  loginForm: FormGroup;
  loginError: string;
  onLogin: string;

  private modalService: any;

  constructor(private authService: AuthService) {
    this.modalService = inject(NgbModal);

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.loginError = '';
    this.onLogin = 'false';
  }

  onSubmit() {}

  open() {
    this.modalService.open(this.loginModalTemplate);
  }
}

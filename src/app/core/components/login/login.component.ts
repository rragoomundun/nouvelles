import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AuthSharedService } from '../../../shared/services/auth/auth-shared.service';
import { UserSharedService } from '../../../shared/services/user/user-shared.service';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, TranslateModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('loginModalTemplate') loginModalTemplate!: TemplateRef<any>;

  loginModalRef!: NgbModalRef;
  loginForm: FormGroup;
  loginError: string;
  onLogin: string;

  private modalService: any;

  constructor(
    private authSharedService: AuthSharedService,
    private userSharedService: UserSharedService,
  ) {
    this.modalService = inject(NgbModal);

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.loginError = '';
    this.onLogin = 'false';
  }

  get isLoginFormValid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit() {
    this.onLogin = 'true';

    this.authSharedService.login(this.loginForm.value).subscribe({
      complete: () => {
        this.loginModalRef.close();
        this.userSharedService.setUser();
      },
      error: (error: HttpErrorResponse) => {
        const { type } = error.error;

        this.onLogin = 'error';

        if (type) {
          this.loginError = `LOGIN_MODAL.ERRORS.${type}`;
        }
      },
    });
  }

  open() {
    this.loginModalRef = this.modalService.open(this.loginModalTemplate);

    // Reset the component configuration on close
    this.loginModalRef.closed.subscribe({
      complete: () => {
        this.loginError = '';
        this.onLogin = 'false';

        this.loginForm.controls['email'].setValue('');
        this.loginForm.controls['password'].setValue('');
      },
    });
  }
}

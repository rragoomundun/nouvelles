import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @ViewChild('registerModalTemplate') registerModalTemplate!: TemplateRef<any>;

  registerForm: FormGroup;
  registerError: string;
  onRegister: string;

  private modalService: any;

  constructor(private authService: AuthService) {
    this.modalService = inject(NgbModal);

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    });

    this.registerError = '';
    this.onRegister = 'false';
  }

  get isRegisterFormValid(): boolean {
    return (
      this.registerForm.valid === true &&
      this.registerForm.controls['password'].value ===
        this.registerForm.controls['repeatPassword'].value
    );
  }

  open() {
    this.modalService.open(this.registerModalTemplate);
  }

  onSubmit() {
    const params = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };

    this.onRegister = 'true';

    this.authService.register(params).subscribe(
      () => {
        this.onRegister = 'success';
      },
      (error: HttpErrorResponse) => {
        const { type } = error.error;

        this.onRegister = 'error';

        if (type) {
          this.registerError = `REGISTER_MODAL.ERRORS.${error.error.type}`;
        }
      }
    );
  }
}

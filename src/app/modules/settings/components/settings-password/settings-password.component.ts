import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../services/user/user.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';

@Component({
    selector: 'app-settings-password',
    imports: [TranslateModule, ReactiveFormsModule],
    templateUrl: './settings-password.component.html',
    styleUrl: './settings-password.component.scss'
})
export class SettingsPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  error: string;
  onModify: string;

  constructor(
    private userSharedService: UserSharedService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });

    this.onModify = 'false';
  }

  onSubmit() {
    const params = this.passwordForm.value;

    this.onModify = 'true';

    this.userService
      .updatePassword(<number>this.userSharedService.id, params)
      .subscribe({
        next: () => {
          this.onModify = 'success';
        },
        error: (error: HttpErrorResponse) => {
          const { type } = error.error;

          this.onModify = 'error';

          if (type) {
            this.error = `SETTINGS_PAGE.ERRORS.${type}`;
          }
        },
      });
  }
}

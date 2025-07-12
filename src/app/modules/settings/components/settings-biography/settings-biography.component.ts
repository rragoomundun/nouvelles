import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { UserSharedService } from '../../../../shared/services/user/user-shared.service';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-settings-biography',
    imports: [TranslateModule, ReactiveFormsModule],
    templateUrl: './settings-biography.component.html',
    styleUrl: './settings-biography.component.scss'
})
export class SettingsBiographyComponent implements OnInit {
  biographyForm: FormGroup;
  onModify: string;

  constructor(
    private userSharedService: UserSharedService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.biographyForm = new FormGroup({
      biography: new FormControl(this.userSharedService.biography),
    });

    this.onModify = 'false';
  }

  onSubmit(): void {
    const params = this.biographyForm.value;

    this.onModify = 'true';

    this.userService
      .updateBiography(<number>this.userSharedService.id, params)
      .subscribe({
        complete: () => {
          this.onModify = 'success';
        },
      });
  }
}

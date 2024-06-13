import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AuthSharedService } from '../../../../shared/services/auth/auth-shared.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-settings-delete',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './settings-delete.component.html',
  styleUrl: './settings-delete.component.scss',
})
export class SettingsDeleteComponent implements OnInit {
  onDelete: string;

  constructor(
    private authSharedService: AuthSharedService,
    private userSharedService: UserSharedService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.onDelete = 'false';
  }

  onDeleteClick(): void {
    this.onDelete = 'true';

    this.userService.deleteUser(<number>this.userSharedService.id).subscribe({
      complete: () => {
        this.onDelete = 'success';

        setTimeout(() => this.authSharedService.doLogout(), 3000);
      },
    });
  }
}

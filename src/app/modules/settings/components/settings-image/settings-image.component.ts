import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UserSharedService } from '../../../../shared/services/user/user-shared.service';
import { FileSharedService } from '../../../../shared/services/file/file-shared.service';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-settings-image',
    imports: [TranslateModule],
    templateUrl: './settings-image.component.html',
    styleUrl: './settings-image.component.scss'
})
export class SettingsImageComponent implements OnInit {
  onImageChange: string;

  constructor(
    public userSharedService: UserSharedService,
    private fileSharedService: FileSharedService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.onImageChange = 'false';
  }

  onDeleteImageClick(): void {
    this.userService
      .updateUserImage(<number>this.userSharedService.id, { image: null })
      .subscribe({
        complete: () => {
          this.userSharedService.image = null;
        },
      });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    this.onImageChange = 'true';

    // Delete existing image
    if (this.userSharedService.image) {
      const params = {
        fileName: this.userSharedService.image?.split('/').slice(3).join('/'),
      };

      this.fileSharedService.delete(params).subscribe();
    }

    // Upload new file
    this.fileSharedService.upload(file).subscribe({
      next: (value) => {
        this.userService
          .updateUserImage(<number>this.userSharedService.id, {
            image: value.file,
          })
          .subscribe({
            complete: () => {
              this.userSharedService.image = value.file;
              this.onImageChange = 'success';
            },
          });
      },
    });
  }
}

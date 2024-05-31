import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

import { UserService } from '../../services/user/user.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, NotFoundComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  id: number;
  name: string;
  image: string;
  biography: string;
  nbArticles: number;
  nbDiscussions: number;
  nbMessages: number;
  registrationDate: string;

  onGetUserProfile: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private dateSharedService: DateSharedService,
    private appSharedService: AppSharedService,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['userId'];
    this.onGetUserProfile = 'true';

    this.userService.getUserProfile(this.id).subscribe({
      next: (value) => {
        this.name = value.name;
        this.image = value.image;
        this.biography = value.biography;
        this.nbArticles = value.nbArticles;
        this.nbDiscussions = value.nbDiscussions;
        this.nbMessages = value.nbMessages;

        const dateObj = new Date(value.registrationDate);
        this.registrationDate = this.dateSharedService.dt
          .set({
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
          })
          .toFormat('d MMMM yyyy');

        this.appSharedService.setTitle(this.name);

        this.onGetUserProfile = 'success';
      },
      error: () => {
        this.onGetUserProfile = 'error';
      },
    });
  }
}

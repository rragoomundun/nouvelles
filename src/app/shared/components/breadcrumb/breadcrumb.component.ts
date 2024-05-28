import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { ForumService } from '../../../modules/forum/services/forum/forum.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  // @Input() items: { label: string; link?: string }[];

  constructor(public forumService: ForumService) {}

  ngOnInit(): void {}
}

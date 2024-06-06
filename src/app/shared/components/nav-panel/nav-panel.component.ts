import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss',
})
export class NavPanelComponent {
  @Input() items: { link: string; title: string }[];

  constructor(public router: Router) {}
}

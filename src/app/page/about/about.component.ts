import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ABOUT_PAGE_INFO} from "../../model/page.info.model";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {MatButton, MatFabAnchor, MatMiniFabAnchor, MatMiniFabButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButton, MatCardModule, MatIcon, MatMiniFabButton, MatFabAnchor, MatMiniFabAnchor
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected readonly ABOUT_PAGE_INFO = ABOUT_PAGE_INFO;

  constructor(private router: Router) {
  }

  signup() {
    this.router.navigate(['/signup']).then(console.log);
  }
}

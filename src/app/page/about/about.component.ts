import {Component} from '@angular/core';
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {ABOUT_PAGE_INFO} from "../../model/page.info.model";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly ABOUT_PAGE_INFO = ABOUT_PAGE_INFO;

  constructor(private router: Router) {
  }

  signup() {
    this.router.navigate(['/login']).then(console.log);
  }
}

import {Component} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page-info";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageHeaderComponent
  ],
  standalone: true
})
export class HomeComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;

  constructor(private authService: AuthService) {
  }

}

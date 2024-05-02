import {Component} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page-info";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    JsonPipe
  ],
  standalone: true
})
export class HomeComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  appVersion = environment.version;

  constructor(protected authService: AuthService) {
  }

}

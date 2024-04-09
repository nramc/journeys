import { Component } from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page-info";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";

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
}

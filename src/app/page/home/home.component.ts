import { Component } from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
}

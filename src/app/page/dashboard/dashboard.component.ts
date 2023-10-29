import { Component } from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
}

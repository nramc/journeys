import {Component, OnInit} from '@angular/core';
import {WORKSPACE_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;

  ngOnInit(): void {

  }

}

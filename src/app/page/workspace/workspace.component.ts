import { Component } from '@angular/core';
import {GALLERY_PAGE_INFO, WORKSPACE_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

    protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;
}

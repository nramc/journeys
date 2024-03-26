import {Component} from '@angular/core';
import {WORKSPACE_PAGE_INFO} from "../../model/page-info";
import {Journey} from "../../model/core/journey.model";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;


  journey: Journey = new Journey();


}

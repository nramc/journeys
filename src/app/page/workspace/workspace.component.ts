import {Component, OnInit} from '@angular/core';
import {WORKSPACE_PAGE_INFO} from "../../model/page-info";
import {Journey} from "../../model/core/journey.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;

  journey: Journey = new Journey();

  ngOnInit(): void {

  }

  onSubmit(journeyForm: NgForm) {
    if (journeyForm.submitted && journeyForm.valid) {
      console.log(this.journey);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {WORKSPACE_PAGE_INFO} from "../../model/page-info";
import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;
  imageSample!: CloudinaryImage;

  ngOnInit(): void {
    const cloundinary = new Cloudinary({
      cloud: {
        cloudName: environment.cloudName
      }
    });

    console.log("Cloud Name:", environment.cloudName)
    // sample
    this.imageSample = cloundinary.image("sample");

  }

}

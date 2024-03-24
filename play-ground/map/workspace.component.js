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
  myWidget: any;

  ngOnInit(): void {
    const cloudinaryReader = new Cloudinary({
      cloud: {
        cloudName: environment.cloudName
      }
    });

    // sample
    this.imageSample = cloudinaryReader.image("image1_e5dpk8");


    // @ts-ignore
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: environment.cloudName,
        uploadPreset: environment.preset
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error:any, result:any) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          document.getElementById("uploadedimage")!.setAttribute("src", result.info.secure_url);
        }
      }
    );
  }

  openWidget() {

    this.myWidget.open();
  }

}

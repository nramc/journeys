import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Journey, JourneyImageDetail, JourneyImagesDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {environment} from "../../../../../environments/environment";
import {CloudinaryUploadSuccessEvent, CloudinaryUploadSuccessInfo} from "../../../../model/upload-success-event.type";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatBadge} from "@angular/material/badge";
import {MatStepperNext} from "@angular/material/stepper";

@Component({
  selector: 'app-edit-journey-images-details',
  templateUrl: './edit-journey-images-details.component.html',
  styleUrl: './edit-journey-images-details.component.scss',
  imports: [
    FeedbackMessageComponent,
    FormsModule,
    NgIf,
    MatBadge,
    MatStepperNext
  ],
  standalone: true
})
export class EditJourneyImagesDetailsComponent implements OnInit {
  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();
  @Input({required: true}) journey!: Journey;
  myWidget: any;

  successMessage: string = '';
  errorMessage: string = '';

  formImageDetails: JourneyImagesDetails = new JourneyImagesDetails();

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    if (this.journey?.extendedDetails?.imagesDetails) {
      this.formImageDetails = this.journey.extendedDetails.imagesDetails;
    }
    // @ts-ignore
    this.myWidget = cloudinary.createUploadWidget(
      this.getWidgetParams(this.journey),
      (error: any, result: CloudinaryUploadSuccessEvent) => {
        if (!error && result && result.event === "success") {
          this.addImage(result.info);
        }
        if (!error && result && result.event === "close") {
          this.save();
        }
      }
    );
  }

  private addImage(info: CloudinaryUploadSuccessInfo) {
    this.formImageDetails.images.push(
      new JourneyImageDetail(info.secure_url, info.asset_id)
    );
  }

  removeImageAndSaveJourney(imageDetails: JourneyImageDetail) {
    const index = this.formImageDetails.images.indexOf(imageDetails);
    if (index >= 0) {
      this.formImageDetails.images.splice(index, 1);
      this.save()
    }
  }

  private getWidgetParams(journey: Journey) {
    // Refer: https://cloudinary.com/documentation/image_upload_api_reference#upload
    return {
      cloudName: environment.cloudName,
      uploadPreset: environment.cloudinaryPreset,
      folder: `${environment.cloudBaseDir}/${journey.id}`,
      tags: journey.tags,
      use_asset_folder_as_public_id_prefix: true,
      context: {'env': 'dev', 'id': `${journey.id}`},
      cropping: false,
      showAdvancedOptions: true,
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      multiple: true,
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      //theme: "purple", //change to a purple theme
    };
  }

  onError(errorMessage: string, err: any) {
    this.errorMessage = errorMessage;
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    this.successMessage = 'Image Details saved successfully.';
    this.journey = result;
    this.savedEvent.emit(this.journey);
  }

  save() {
    this.journeyService.saveJourneyImagesDetails(this.journey, this.formImageDetails)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving images data', err)
      });
  }

  openUploadWidget() {
    this.myWidget.open();
  }


}

import {ChangeDetectionStrategy, Component, ElementRef, inject, model, OnInit, signal, viewChild} from '@angular/core';
import {Journey, JourneyImageDetail, JourneyImagesDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {environment} from "../../../../../environments/environment";
import {CloudinaryUploadSuccessEvent, CloudinaryUploadSuccessInfo} from "../../../../model/upload-success-event.type";
import {FormsModule} from "@angular/forms";

import {MatStepperNext} from "@angular/material/stepper";
import {EditJourneyImageItemComponent} from "./edit-journey-image-item/edit-journey-image-item.component";
import {RouterLink} from "@angular/router";
import {NotificationService} from "../../../../service/common/notification.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-edit-journey-images-details',
    templateUrl: './edit-journey-images-details.component.html',
    styleUrl: './edit-journey-images-details.component.scss',
    imports: [
    FormsModule,
    MatButtonModule,
    MatStepperNext,
    MatIconModule,
    RouterLink,
    EditJourneyImageItemComponent
],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyImagesDetailsComponent implements OnInit {
  private readonly notificationService = inject(NotificationService);
  private readonly journeyService = inject(JourneyService);

  journey = model.required<Journey>();
  formImageDetails = signal(new JourneyImagesDetails());
  imageItemDetail = model<JourneyImageDetail>(new JourneyImageDetail('', ''));
  imageItemDialog = viewChild.required<ElementRef<HTMLDialogElement>>('imageItemDetailDialog');

  ngOnInit(): void {
    this.formImageDetails.set(this.journey().imagesDetails ?? new JourneyImagesDetails());
  }

  private addImage(info: CloudinaryUploadSuccessInfo) {
    this.formImageDetails.update(data => ({
        ...data, images: [...data.images, new JourneyImageDetail(info.secure_url, info.asset_id, info.public_id)]
      })
    );
  }

  private getWidgetParams(journey: Journey, isMultipleUpload: boolean) {
    // Refer: https://cloudinary.com/documentation/image_upload_api_reference#upload
    return {
      cloudName: environment.cloudName,
      uploadPreset: isMultipleUpload ? environment.cloudinaryPreset : environment.cloudinarySingleImgPreset,
      folder: `${environment.cloudBaseDir}/${journey.id}`,
      tags: journey.tags,
      use_asset_folder_as_public_id_prefix: true,
      context: {'env': environment.stage, 'id': `${journey.id}`},
      cropping: !isMultipleUpload,
      showAdvancedOptions: true,
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      multiple: isMultipleUpload
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      //theme: "purple", //change to a purple theme
    };
  }

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    this.notificationService.showSuccess('Image Details saved successfully.');
    this.journey.set(result);
  }

  save() {
    console.log('saving')
    this.journeyService.saveJourneyImagesDetails(this.journey(), this.formImageDetails())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving images data', err)
      });
  }

  openUploadWidget(isMultipleUpload = true) {
    // @ts-expect-error False-Positive: 3rd party JS library not compatible with typescript type
    cloudinary.createUploadWidget(
      this.getWidgetParams(this.journey(), isMultipleUpload),
      (error: Error, result: CloudinaryUploadSuccessEvent) => {
        if (!error && result && result.event === "success") {
          this.addImage(result.info);
        }
        if (!error && result && result.event === "close") {
          this.save();
        }
      }
    ).open();
  }

  openImageItem(imageItem: JourneyImageDetail) {
    this.imageItemDetail.set(imageItem);
    this.imageItemDialog().nativeElement.showModal();
  }

  saveImageItemDetail(imageItemDetail: JourneyImageDetail) {
    this.formImageDetails.update(data => ({
        ...data,
        images: [...data.images.map(item => item.assetId == imageItemDetail.assetId ? imageItemDetail : item)]
      })
    );
    this.save();
    this.imageItemDialog().nativeElement.close();
  }

  deleteImageItemDetail(imageItemDetail: JourneyImageDetail) {
    this.formImageDetails.update(data => ({
        ...data,
        images: [...data.images.filter(item => item.assetId != imageItemDetail.assetId)]
      })
    );
    this.save();
    this.imageItemDialog().nativeElement.close();
  }


}

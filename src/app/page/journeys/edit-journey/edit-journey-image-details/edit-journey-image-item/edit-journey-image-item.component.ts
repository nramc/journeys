import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {JourneyImageDetail} from "../../../../../model/core/journey.model";
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-journey-image-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgbInputDatepicker,
    NgOptimizedImage
  ],
  template: `
    <div class="container">
      <div class="model-header">
        <h6 class="gradient-text m-1 border-bottom border-primary-subtle border-3 pb-2">Edit Image Details</h6>
      </div>

      <div [style]="'background-image: url('+imageItem().url+ ');background-size: cover;background-repeat: no-repeat;'">
        <div class="d-flex flex-column flex-md-row justify-content-evenly align-items-center align-content-center"
             [style]="'backdrop-filter: blur(15px);'">
          <div class="image-thumbnail m-1 col-md-4 text-center">
            <img
              [src]="imageItem().url"
              [alt]="imageItem().assetId"
              [title]="imageItem().assetId"
              class="img-thumbnail rounded border border-2 border-opacity-50 border-primary h-200-px w-200-px"
              fill/>
          </div>
          <div class="image-details flex-fill m-1">

            <form>
              <div class="form-floating mb-1">
                <input type="text" class="form-control ignore-highlight" id="imageUrl" name="imageUrl" placeholder="URL"
                       [(ngModel)]="imageItem().url" readonly="readonly" disabled="disabled">
                <label for="imageUrl">Image URL</label>
              </div>
              <div class="form-floating mb-1">
                <input type="text" class="form-control ignore-highlight" id="imageId" name="imageId" placeholder="ID"
                       [(ngModel)]="imageItem().assetId" readonly="readonly" disabled="disabled">
                <label for="imageId">Asset ID</label>
              </div>
              <div class="form-floating mb-1">
                <input type="text" class="form-control ignore-highlight" id="publicId" name="publicId" placeholder="ID"
                       [(ngModel)]="imageItem().publicId" readonly="readonly" disabled="disabled">
                <label for="publicId">Public ID</label>
              </div>

              <div class="form-floating mb-1">
                <input type="text" class="form-control" id="title" name="title" placeholder="Title"
                       [(ngModel)]="imageItem().title" [autofocus]="true">
                <label for="title">Title</label>
              </div>

              <div class="input-group mb-1">
                <div class="input-group-text">
                  <input class="form-check-input ignore-highlight" type="checkbox" id="favoriteFlag" name="favoriteFlag"
                         [(ngModel)]="imageItem().isFavorite">
                </div>
                <input type="text" class="form-control" value="Make it as my favorite" disabled>
              </div>

              <!-- Journey Date -->
              <div class="input-group input-group-sm mb-1">
                <div class="form-floating">
                  <input type="text" class="form-control form-control-sm ignore-highlight" id="eventDate"
                         name="eventDate"
                         [(ngModel)]="imageItem().eventDate"
                         placeholder="yyyy-mm-dd" ngbDatepicker #d="ngbDatepicker">
                  <label for="eventDate">Event Date</label>
                </div>
                <div class="input-group-text">
                  <button class="btn btn-sm btn-outline-secondary bi bi-calendar3 " (click)="d.toggle()"
                          type="button"></button>
                </div>
              </div>

              <div class="input-group mb-1">
                <div class="input-group-text">
                  <input class="form-check-input ignore-highlight" type="checkbox" id="thumbnailFlag"
                         name="thumbnailFlag" [(ngModel)]="imageItem().isThumbnail">
                </div>
                <input type="text" class="form-control" value="Make it as thumbnail" disabled>
              </div>

              <div class="d-inline-flex justify-content-center align-content-center align-items-center mt-2 w-100">
                <button type="button" class="btn btn-primary me-1" (click)="save.emit(imageItem())">Save</button>
                <button type="button" class="btn btn-danger me-1" (click)="remove.emit(imageItem())">Remove</button>
                <button type="button" class="btn btn-dark" (click)="cancel.emit(imageItem())">Cancel</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyImageItemComponent {
  imageItem = input.required<JourneyImageDetail>();
  save = output<JourneyImageDetail>();
  cancel = output<JourneyImageDetail>();
  remove = output<JourneyImageDetail>();

}

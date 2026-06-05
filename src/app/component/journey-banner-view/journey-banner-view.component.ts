import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {getCategoryIconName, getCategoryLabel} from "../../config/icon-config";
import {Journey} from "../../model/core/journey.model";

@Component({
  selector: 'app-journey-banner-view',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './journey-banner-view.component.html',
  styleUrl: './journey-banner-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyBannerViewComponent {
  readonly journey = inject<Journey>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<JourneyBannerViewComponent>);

  protected linkCopied = signal(false);

  getCategoryIconName(): string {
    return getCategoryIconName(this.journey.geoDetails?.category);
  }

  getCategoryLabel(): string {
    return getCategoryLabel(this.journey.geoDetails?.category);
  }

  close(): void {
    this.dialogRef.close();
  }

  copyLink(): void {
    const url = `${globalThis.location.origin}/journey/${this.journey.id}/view`;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2500);
    });
  }

  protected onDownload() {
    const url = `${globalThis.location.origin}/api/journey/${this.journey.id}/export`;
    window.open(url, '_blank');
  }

  protected onShare() {
    const url = `${globalThis.location.origin}/journey/${this.journey.id}/view`;
    if (navigator.share) {
      navigator.share({
        title: this.journey.name,
        text: 'Check out this journey I created!',
        url: url,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      this.copyLink();
    }
  }
}

import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {JourneyData} from "../journey-card-view/journey.data";
import {getCategoryIconName, getCategoryLabel} from "../../config/icon-config";

@Component({
  selector: 'app-journey-banner-view',
  imports: [
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './journey-banner-view.component.html',
  styleUrl: './journey-banner-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyBannerViewComponent {
  readonly journey = inject<JourneyData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<JourneyBannerViewComponent>);

  protected linkCopied = signal(false);

  getCategoryIconName(): string {
    return getCategoryIconName(this.journey.category);
  }

  getCategoryLabel(): string {
    return getCategoryLabel(this.journey.category);
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
}

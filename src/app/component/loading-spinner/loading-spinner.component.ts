import {Component, inject} from '@angular/core';
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoadingService} from "../../service/common/loading.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinner
  ],
  template: `
    <div *ngIf="isLoading()" class="spinner-overlay">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  `]
})
export class LoadingSpinnerComponent {
  private readonly loadingService = inject(LoadingService);
  isLoading = toSignal(this.loadingService.loading$, {initialValue: false});

}

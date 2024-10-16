import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly snackBar = inject(MatSnackBar);

  showSuccess(message: string, duration: number = 3000) {
    // wrapped notification into setTimeout to trigger change detection manually since material does not support zoneless change detection yet.
    setTimeout(() => this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['success-snackbar'] // Add a custom CSS class for success
    }));
  }

  showError(message: string, duration: number = 3000) {
    // wrapped notification into setTimeout to trigger change detection manually since material does not support zoneless change detection yet.
    setTimeout(() => this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['error-snackbar'] // Add a custom CSS class for error
    }));
  }
}


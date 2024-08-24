import {Component, DestroyRef, inject, OnInit, TemplateRef, viewChild} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatDialogModule, MatIcon, MatButton],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  logoutDialogContent = viewChild.required<TemplateRef<any>>('logoutDialogContent');

  ngOnInit(): void {
    const dialogRef = this.dialog.open(this.logoutDialogContent(), {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        if (result === true) {
          this.logout();
        } else {
          this.home()
        }
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], {queryParams: {'q': 'logoutSuccessful'}})
      .then(console.log);
  }

  home() {
    this.router.navigate(['/'], {queryParams: {'q': 'logoutSuccessful'}})
      .then(console.log);
  }

}

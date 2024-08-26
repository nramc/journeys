import {Component, ElementRef, inject, OnInit, viewChild} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  logoutDialog = viewChild.required<ElementRef<HTMLDialogElement>>('logoutDialog');

  ngOnInit(): void {
    this.logoutDialog().nativeElement.showModal();
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

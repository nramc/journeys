import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-anonymous-welcome-message',
  imports: [
    MatIconModule,
    RouterLink
  ],
  template: `
    <section class="flex flex-col sm:flex-row sm:items-center sm:gap-6">
      <h1 class="text-3xl font-semibold">Welcome to Journey</h1>
      <p class="text-sm text-gray-500">Your personal travel memory companion</p>
    </section>

    <section class="flex flex-col">
      <p class="text-sm text-gray-500">Journey is a geospatial travel-memory platform that helps you document,
        revisit, and celebrate every adventure.</p>
      <p class="text-sm text-gray-500">Create and manage your travel journeys, explore them on an interactive map,
        and never miss an upcoming Journiversary.
      </p>
      <p class="text-sm text-gray-500">
        Don't have an account yet? Join in just a few clicks.
        <a routerLink="/signup" class="inline-flex items-center bold">
          <span>Sign Up Now</span>
          <mat-icon class="ms-1">arrow_forward</mat-icon>
        </a>
      </p>
    </section>`,
  styles: []
})
export class AnonymousWelcomeMessageComponent {

}

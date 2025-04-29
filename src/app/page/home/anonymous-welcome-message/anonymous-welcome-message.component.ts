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
      <p class="text-sm text-gray-500">Your time travel companion</p>
    </section>

    <section class="flex flex-col">
      <p class="text-sm text-gray-500">Journey is a time travel application that allows you to explore your past,
        present, and future.</p>
      <p class="text-sm text-gray-500">With Journey, you can create and manage your own time travel journeys, view
        upcoming anniversaries, and much more.
      </p>
      <p class="text-sm text-gray-500">
        Don't have a account yet? No problem! You can create one in just a few clicks.
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

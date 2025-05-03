import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-manual-user-onboarding',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './manual-user-onboarding.component.html',
  styles: []
})
export class ManualUserOnboardingComponent {

}

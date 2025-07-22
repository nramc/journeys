import {Component, computed, inject} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {toSignal} from "@angular/core/rxjs-interop";
import {BffService} from "../../../service/bff/bff.service";

@Component({
  selector: 'app-bff-api-loading-indicator',
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './bff-api-loading-indicator.component.html',
  styles: []
})
export class BffApiLoadingIndicatorComponent {
  private readonly bffService = inject(BffService);
  bffApiVersion = toSignal(this.bffService.getVersion(), {initialValue: null});
  isBffApiAvailable = computed(() => this.bffApiVersion() !== null);

}

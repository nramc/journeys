import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {JourneyCardViewComponent} from '../journey-card-view/journey-card-view.component';
import {JourneyData} from '../journey-card-view/journey.data';

@Component({
    selector: 'app-journey-calendar-event-popup',
    imports: [JourneyCardViewComponent],
    template: `
        <section class="journey-calendar-event-popup" role="dialog" aria-modal="false"
                 [attr.aria-label]="'Journey preview: ' + journey().name">
            <button type="button" class="journey-calendar-event-popup__close"
                    aria-label="Close journey preview" (click)="closed.emit()">×</button>
            <app-journey-card-view [journey]="journey()"></app-journey-card-view>
        </section>`,
    styles: `
        :host {
            display: block;
            width: min(22rem, calc(100vw - 2rem));
            max-height: calc(100dvh - 2rem);
        }

        .journey-calendar-event-popup {
            position: relative;
            max-height: inherit;
            overflow-y: auto;
            padding-top: 2.25rem;
            border-radius: 1rem;
            filter: drop-shadow(0 12px 28px rgb(15 23 42 / 35%));
        }

        .journey-calendar-event-popup__close {
            position: absolute;
            z-index: 2;
            top: 0.25rem;
            right: 0.25rem;
            width: 2rem;
            height: 2rem;
            border: 1px solid var(--app-border, #cbd5e1);
            border-radius: 999px;
            background: var(--app-surface, #fff);
            color: var(--app-text-primary, #0f172a);
            cursor: pointer;
            font-size: 1.25rem;
            line-height: 1;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyCalendarEventPopupComponent {
    readonly journey = input.required<JourneyData>();
    readonly closed = output<void>();
}



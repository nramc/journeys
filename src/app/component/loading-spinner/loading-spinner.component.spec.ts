import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadingSpinnerComponent} from './loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {By} from "@angular/platform-browser";
import {BehaviorSubject} from "rxjs";
import {LoadingService} from "../../service/common/loading.service";

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  let loading$ = new BehaviorSubject<boolean>(false);
  const loadingServiceMock = {
    loading$: loading$.asObservable() // Simulate loading observable behavior
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent, MatProgressSpinnerModule],
      providers: [
        {provide: LoadingService, useValue: loadingServiceMock}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display spinner when loading = true', () => {
    loading$.next(true);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-spinner'))).toBeTruthy();
  });
  it('should hide spinner when loading = false', () => {
    loading$.next(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-spinner'))).toBeFalsy();
  });
});

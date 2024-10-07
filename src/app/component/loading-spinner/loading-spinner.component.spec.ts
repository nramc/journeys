import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadingSpinnerComponent} from './loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {By} from "@angular/platform-browser";

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent, MatProgressSpinnerModule]
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
    component.isLoading.set(true);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-spinner'))).toBeTruthy();
  });
  it('should hide spinner when loading = false', () => {
    component.isLoading.set(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-spinner'))).toBeFalsy();
  });
});

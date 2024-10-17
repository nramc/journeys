import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJourneyMemoriesDetailsComponent } from './edit-journey-memories-details.component';

describe('EditJourneyMemoriesDetailsComponent', () => {
  let component: EditJourneyMemoriesDetailsComponent;
  let fixture: ComponentFixture<EditJourneyMemoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJourneyMemoriesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJourneyMemoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

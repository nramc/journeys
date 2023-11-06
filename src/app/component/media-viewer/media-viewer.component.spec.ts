import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaViewerComponent } from './media-viewer.component';

describe('MediaViewerComponent', () => {
  let component: MediaViewerComponent;
  let fixture: ComponentFixture<MediaViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaViewerComponent]
    });
    fixture = TestBed.createComponent(MediaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

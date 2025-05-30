import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesVideoGalleryComponent } from './pages-video-gallery.component';

describe('PagesVideoGalleryComponent', () => {
  let component: PagesVideoGalleryComponent;
  let fixture: ComponentFixture<PagesVideoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesVideoGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesVideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSwiperComponent } from './image-swiper.component';

describe('ImageSwiperComponent', () => {
  let component: ImageSwiperComponent;
  let fixture: ComponentFixture<ImageSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

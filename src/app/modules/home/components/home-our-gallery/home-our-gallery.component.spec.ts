import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurGallaryComponent } from './home-our-gallery.component';

describe('HomeOurGallaryComponent', () => {
  let component: HomeOurGallaryComponent;
  let fixture: ComponentFixture<HomeOurGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOurGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

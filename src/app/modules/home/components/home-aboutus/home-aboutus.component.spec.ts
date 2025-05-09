import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutusComponent } from './home-aboutus.component';

describe('HomeAboutusComponent', () => {
  let component: HomeAboutusComponent;
  let fixture: ComponentFixture<HomeAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurAdvantagesComponent } from './home-our-advantages.component';

describe('HomeOurAdvantagesComponent', () => {
  let component: HomeOurAdvantagesComponent;
  let fixture: ComponentFixture<HomeOurAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOurAdvantagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

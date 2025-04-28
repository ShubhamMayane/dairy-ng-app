import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusOurSponsorshipComponent } from './aboutus-our-sponsorship.component';

describe('AboutusOurSponsorshipComponent', () => {
  let component: AboutusOurSponsorshipComponent;
  let fixture: ComponentFixture<AboutusOurSponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusOurSponsorshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusOurSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

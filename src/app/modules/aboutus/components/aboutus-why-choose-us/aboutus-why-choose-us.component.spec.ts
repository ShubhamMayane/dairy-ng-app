import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusWhyChooseUsComponent } from './aboutus-why-choose-us.component';

describe('AboutusWhyChooseUsComponent', () => {
  let component: AboutusWhyChooseUsComponent;
  let fixture: ComponentFixture<AboutusWhyChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusWhyChooseUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContactDetailsComponent } from './header-contact-details.component';

describe('HeaderContactDetailsComponent', () => {
  let component: HeaderContactDetailsComponent;
  let fixture: ComponentFixture<HeaderContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderContactDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

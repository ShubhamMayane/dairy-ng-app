import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusMapComponent } from './contactus-map.component';

describe('ContactusMapComponent', () => {
  let component: ContactusMapComponent;
  let fixture: ComponentFixture<ContactusMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactusMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

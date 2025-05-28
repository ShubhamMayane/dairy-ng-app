import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappButtonAppComponent } from './whatsapp-button-app.component';

describe('WhatsappButtonAppComponent', () => {
  let component: WhatsappButtonAppComponent;
  let fixture: ComponentFixture<WhatsappButtonAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappButtonAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappButtonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

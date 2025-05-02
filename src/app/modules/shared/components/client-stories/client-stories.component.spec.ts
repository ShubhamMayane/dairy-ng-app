import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStoriesComponent } from './client-stories.component';

describe('ClientStoriesComponent', () => {
  let component: ClientStoriesComponent;
  let fixture: ComponentFixture<ClientStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

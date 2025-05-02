import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqClientStoriesComponent } from './faq-client-stories.component';

describe('FaqClientStoriesComponent', () => {
  let component: FaqClientStoriesComponent;
  let fixture: ComponentFixture<FaqClientStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqClientStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqClientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

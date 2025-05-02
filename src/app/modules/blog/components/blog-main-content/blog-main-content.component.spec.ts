import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMainContentComponent } from './blog-main-content.component';

describe('BlogMainContentComponent', () => {
  let component: BlogMainContentComponent;
  let fixture: ComponentFixture<BlogMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMainContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

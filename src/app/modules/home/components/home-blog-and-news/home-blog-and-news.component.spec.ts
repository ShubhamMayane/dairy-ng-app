import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogAndNewsComponent } from './home-blog-and-news.component';

describe('HomeBlogAndNewsComponent', () => {
  let component: HomeBlogAndNewsComponent;
  let fixture: ComponentFixture<HomeBlogAndNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlogAndNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBlogAndNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurProgramsComponent } from './home-our-programs.component';

describe('HomeOurProgramsComponent', () => {
  let component: HomeOurProgramsComponent;
  let fixture: ComponentFixture<HomeOurProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOurProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

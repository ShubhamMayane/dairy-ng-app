import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOurExpertsComponent } from './team-our-experts.component';

describe('TeamOurExpertsComponent', () => {
  let component: TeamOurExpertsComponent;
  let fixture: ComponentFixture<TeamOurExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamOurExpertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOurExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

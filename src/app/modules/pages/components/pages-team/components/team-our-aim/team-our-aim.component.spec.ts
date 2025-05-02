import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOurAimComponent } from './team-our-aim.component';

describe('TeamOurAimComponent', () => {
  let component: TeamOurAimComponent;
  let fixture: ComponentFixture<TeamOurAimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamOurAimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOurAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

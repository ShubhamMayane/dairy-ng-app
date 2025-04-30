import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTeamComponent } from './pages-team.component';

describe('PagesTeamComponent', () => {
  let component: PagesTeamComponent;
  let fixture: ComponentFixture<PagesTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

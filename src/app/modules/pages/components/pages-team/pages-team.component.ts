import { Component } from '@angular/core';
import { CommonHeaderComponent } from "../../../shared/components/common-header/common-header.component";
import { TeamOurExpertsComponent } from "./components/team-our-experts/team-our-experts.component";
import { TeamOurAimComponent } from "./components/team-our-aim/team-our-aim.component";

@Component({
  selector: 'app-pages-team',
  imports: [CommonHeaderComponent, TeamOurExpertsComponent, TeamOurAimComponent],
  templateUrl: './pages-team.component.html',
  styleUrl: './pages-team.component.css'
})
export class PagesTeamComponent {
  headerData:any = {
    title: 'Our Team',
    subTitle: 'Our Expert'
  };
}

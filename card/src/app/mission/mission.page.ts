import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloMissionsService } from '../astronauts.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  private missionData: Array<any>;

  constructor(
    private _apolloMissionService: ApolloMissionsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const missionID = +this.route.snapshot.paramMap.get('missionID');
    this._apolloMissionService.getMissionData(missionID).subscribe((data) => {
      this.missionData = data;
    });
  }

}

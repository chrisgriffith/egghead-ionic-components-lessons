import { Component, OnInit } from '@angular/core';
import { ApolloMissionsService } from '../astronauts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private missionData: Array<any> = [];

  constructor(
    private apolloMissionService: ApolloMissionsService
  ) { }

  ngOnInit() {
    this.apolloMissionService.loadData().subscribe((data) => {
      this.missionData = data;
    });
  }
}

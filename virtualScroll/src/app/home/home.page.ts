import { Component, OnInit } from '@angular/core';
import { AstronautsService } from '../astronauts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private astronautData: Array<any> = [];

  constructor(
    private _astronautService: AstronautsService
  ) { }

  ngOnInit() {
    this._astronautService.loadData().subscribe((data) => {
      this.astronautData = data;
    });
  }

  customHeaderFn(record, recordIndex, records) {
   if (recordIndex > 0) {
      if (record.lastName.charAt(0).toLowerCase() !== records[recordIndex - 1].lastName.charAt(0).toLowerCase()) {
        return record.lastName.charAt(0).toUpperCase();
      } else {
        return null;
      }
    } else {
      return record.lastName.charAt(0).toUpperCase();
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public isMapLoaded: Boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isMapLoaded = true;
    }, 5000);
  }
}

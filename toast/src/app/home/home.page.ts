import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public myToast: HTMLIonToastElement;

  constructor(
    public toastController: ToastController
  ) {}

  showToast() {
    // this.presentToast();
    this.presentToastWithOptions();
  }

  async presentToast() {
    this.myToast = await this.toastController.create({
      message: 'A demo toast.',
      duration: 2000
    });
    this.myToast.present();
  }

  async presentToastWithOptions() {
    this.myToast = await this.toastController.create({
      message: 'Click to Close Demo',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    this.myToast.onDidDismiss().then ( () => {
      console.log('toast gone');
    });

    this.myToast.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private alertController: AlertController
  ) {}

  ngOnInit() { }

  displayAlert() {
    // this.presentAlert();
    // this.presentAlertConfirm();
    this.presentAlertPrompt();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert Header',
      subHeader: 'Subheader',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alert Header',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
         handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter Username',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'name@company.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data.username);
          }
        }
      ]
    });

    await alert.present();
  }
}

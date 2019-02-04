import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private actionSheetController: ActionSheetController,
    private platform: Platform
  ) {
    this.presentActionSheet();
  }

  displayActionSheet() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage Email',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Forward To',
        icon: !this.platform.is('ios') ? 'share-alt' : null,
        handler: () => {
          console.log('Forward clicked');
        }
      }, {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'star' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Send',
        icon: !this.platform.is('ios') ? 'send' : null,
        handler: () => {
          console.log('Send clicked');
        }
      }, {
        text: 'Cancel',
        icon: !this.platform.is('ios') ? 'close' : null,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}

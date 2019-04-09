import { Component } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController) { }

  showActionSheet() {
     this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
     header:'Death Star Plans',
     buttons: [
      {
        text: 'Approve',
        handler: () => {
          console.log('approved');
        }
      },
      {
        text: 'Edit',
        handler: () => {
          console.log('edit');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('delete');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('cancel');
        }
      }
     ]
    });
    await actionSheet.present();
  }


}

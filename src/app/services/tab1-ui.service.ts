import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfileModalComponent } from '../edit-profile/edit-profile-modal/edit-profile-modal.component';

@Injectable({
  providedIn: 'root'
})
export class Tab1UiService {

  constructor(private modals: ModalController) { }

  async showEditProfileModal() {
    const modal = await this.modals.create({
      component: EditProfileModalComponent,
      backdropDismiss: false,
    });

    await modal.present();
    return await modal.onDidDismiss();
  }

  close() {
    this.modals.dismiss()
  }
}

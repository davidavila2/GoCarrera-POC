import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBasicsStepComponent } from './profile-basics-step/profile-basics-step.component';
import { ProfileBioStepComponent } from './profile-bio-step/profile-bio-step.component';
import { ProfileInsuranceStepComponent } from './profile-insurance-step/profile-insurance-step.component';
import { ProfileTaxStepComponent } from './profile-tax-step/profile-tax-step.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';

@NgModule({
  declarations: [
    ProfileBasicsStepComponent,
    ProfileBioStepComponent,
    ProfileInsuranceStepComponent,
    ProfileTaxStepComponent,
    EditProfileModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [EditProfileModalComponent]
})
export class EditProfileModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileFacade } from 'src/app/state/profile.facade';
import { Tab1UiService } from 'src/app/services/tab1-ui.service';

@Component({
  selector: 'app-profile-basics-step',
  templateUrl: './profile-basics-step.component.html',
  styleUrls: ['./profile-basics-step.component.scss'],
})
export class ProfileBasicsStepComponent implements OnInit {
  basicForm: FormGroup;

  constructor(public profile: ProfileFacade, private formBuilder: FormBuilder, public profileUIService: Tab1UiService) { }

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      name: [''],
      email: [''],
      companyName: [''],
      mobileNumber: [''],
      address: [''],
      city: [''],
      usState: [''],
      zip: [''],
      dateOfBirth: [''],
    });
  }

  saveForm() {
    console.log(this.basicForm.value);
    this.profile.nextEditStep('insurance');
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileFacade } from 'src/app/state/profile.facade';

@Component({
  selector: 'app-profile-tax-step',
  templateUrl: './profile-tax-step.component.html',
  styleUrls: ['./profile-tax-step.component.scss'],
})
export class ProfileTaxStepComponent implements OnInit {
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  taxForm: FormGroup;
  constructor(public profile: ProfileFacade, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taxForm = this.formBuilder.group({
      ein: [''],
      fedW9: [''],
    });
  }

  goBack() {
    this.previousStep.emit('insurance');
  }

  submitForm() {
    console.log(this.taxForm.value);
    this.profile.nextEditStep('bio');
  }

}

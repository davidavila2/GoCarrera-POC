import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileFacade } from 'src/app/state/profile.facade';

@Component({
  selector: 'app-profile-insurance-step',
  templateUrl: './profile-insurance-step.component.html',
  styleUrls: ['./profile-insurance-step.component.scss'],
})
export class ProfileInsuranceStepComponent implements OnInit {
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  insuranceForm: FormGroup;
  constructor(public profile: ProfileFacade, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.insuranceForm = this.formBuilder.group({
      insurance: [''],
      policyNumber: [''],
      agentName: [''],
      agentPhoneNumber: [''],
      insurancePolicyDocument: [''],
      insuranceExpirationDate: [''],
    });
  }

  goBack() {
    this.previousStep.emit('basics');
  }

  submitForm() {
    console.log(this.insuranceForm.value);
    this.profile.nextEditStep('tax');
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Tab1UiService } from 'src/app/services/tab1-ui.service';

@Component({
  selector: 'app-profile-bio-step',
  templateUrl: './profile-bio-step.component.html',
  styleUrls: ['./profile-bio-step.component.scss'],
})
export class ProfileBioStepComponent implements OnInit {
  @Output() previousStep: EventEmitter<any> = new EventEmitter<any>();
  bioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public profileUIService: Tab1UiService) { }

  ngOnInit() {
    this.bioForm = this.formBuilder.group({
      bio: [''],
      profilePicture: [''],
    });
  }

  goBack() {
    this.previousStep.emit('tax');
  }

  submitForm() {
    console.log(this.bioForm.value);
    this.profileUIService.close();
  }
}

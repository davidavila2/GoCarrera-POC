import { Component, OnInit } from '@angular/core';
import { ProfileFacade } from 'src/app/state/profile.facade';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent implements OnInit {

  constructor(public profile: ProfileFacade) { }

  ngOnInit() { }

}

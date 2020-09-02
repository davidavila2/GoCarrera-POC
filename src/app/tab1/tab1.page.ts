import { Component } from '@angular/core';
import { Tab1UiService } from '../services/tab1-ui.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public profileUIService: Tab1UiService) { }

}

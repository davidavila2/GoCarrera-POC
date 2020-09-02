import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileFacade {
  currentEditingStep$ = of('basics');

  constructor() { }

  nextEditStep(step: string) {
    this.currentEditingStep$ = of(step);
  }

  goBackAndEditStep(step: string) {
    console.log(step, 'something happened');
    this.currentEditingStep$ = of(step);
  }

  cancelEdit() {
    console.log('cancel form');
  }
}

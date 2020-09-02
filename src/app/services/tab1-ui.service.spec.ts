import { TestBed } from '@angular/core/testing';

import { Tab1UiService } from './tab1-ui.service';

describe('Tab1UiService', () => {
  let service: Tab1UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab1UiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

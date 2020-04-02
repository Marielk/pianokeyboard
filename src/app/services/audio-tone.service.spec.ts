import { TestBed } from '@angular/core/testing';

import { AudioToneService } from './audio-tone.service';

describe('AudioToneService', () => {
  let service: AudioToneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioToneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

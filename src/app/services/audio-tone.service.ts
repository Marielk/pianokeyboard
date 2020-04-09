import { Injectable } from '@angular/core';
import { Tones, Keyboard } from '../models/pianoTones.model';

// tslint:disable-next-line: one-variable-per-declaration
declare var AudioContext, webkitAudioContext: any;

@Injectable({
  providedIn: 'root'
})
export class AudiotoneService {
  context = new (AudioContext || webkitAudioContext)();
  attack = 1;
  release = 100;
  volume = 1;
  type: OscillatorType = 'triangle';
  map = new Tones().map;
  keyboard = new Keyboard().keyboardCustom;
  constructor() { }

  kickoff() {
    this.context.createGain();
  }

  playFrequency(freq) {
    this.attack = this.attack || 1;
    this.release = this.release || 1;
    const envelope = this.context.createGain();
    envelope.gain.setValueAtTime(this.volume, this.context.currentTime);
    envelope.connect(this.context.destination);

    envelope.gain.setValueAtTime(0, this.context.currentTime);
    envelope.gain.setTargetAtTime(this.volume, this.context.currentTime, this.attack / 1000);
    
    const osc = this.context.createOscillator();
    osc.frequency.setValueAtTime(freq, this.context.currentTime);
    osc.type = this.type;
    osc.connect(envelope);
    osc.start();
    // debugger
    if (this.release) {
        envelope.gain.setTargetAtTime(0, this.context.currentTime + this.attack / 1000, this.release / 1000);
        setTimeout(() => {
            osc.stop();
            osc.disconnect(envelope);
            envelope.gain.cancelScheduledValues(this.context.currentTime);
            envelope.disconnect(this.context.destination);
          }, this.attack * 10 + this.release * 10);
    }

}

play(freqOrNote, octave) {
  // debugger
  if (typeof freqOrNote === 'number') {
      this.playFrequency(freqOrNote);
  } else if (typeof freqOrNote === 'string') {
      if (octave == null) {
          octave = 4;
      }
      this.playFrequency(this.map[octave][freqOrNote.toLowerCase()]);
  }
}

getTimeMS() {
  return this.context.currentTime * 1000;
}

giveDetailPosition(key) {
  switch  (key.id) {
    case '87':
      key.style.left = '0px';
      break;
    case '69':
      key.style.left = '-10px';
      break;
    case '84':
      key.style.left = '-3px';
      break;
    case '89':
      key.style.left = '-14px';
      break;
    case '85':
      key.style.left = '-26px';
      break;
    case '79':
      key.style.left = '-19px';
      break;
    case '80':
      key.style.left = '-30px';
      break;
  }
}


}

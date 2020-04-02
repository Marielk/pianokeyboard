import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AudiotoneService } from 'src/app/services/audio-tone.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit, AfterViewInit {
  @ViewChild('keyboard') keyDiv: ElementRef;
  keyboard = Object.entries(this.audioS.keyboard);
  constructor(private audioS: AudiotoneService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.play();
  }

  play() {
    this.audioS.kickoff();
    // this.audioS.playFrequency(130.813)
    document.addEventListener('keydown', (e) => {
      // tslint:disable-next-line: deprecation
      const keycode = e.keyCode;
      // console.log(keycode);
      const key =  this.keyboard.find((code) => { if ( Number(code[0]) === keycode ) { return code; }});
      if (key) {
        const note = key[1].split(',');
        this.audioS.play(note[0], note[1]);
      }
    });
  }

}

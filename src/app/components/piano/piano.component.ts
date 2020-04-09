import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AudiotoneService } from 'src/app/services/audio-tone.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit, AfterViewInit {
  @ViewChild('keyboard') keyDiv: ElementRef;
  keysparse = Object.entries(this.audioS.keyboard);
  negras = [];
  blancas = [];
  constructor(private audioS: AudiotoneService) { }

  ngOnInit() {
    this.keysPrepare();
  }
  
  ngAfterViewInit() {
    this.givePosition();
    this.start();
  }

  keysPrepare() {
    this.keysparse.forEach(([key, value]) => {
      const values = value.split(',');
      const item = {
        tecla: values[3],
        code: key,
        note: values[0],
        octave: values[1],
        color: values[2],
        posicion: values[4],
        notalatina: values[5]
      };
      if (values[2] === 'white') {
        this.blancas.push(item);
      } else if (values[2] === 'black' )  {
        this.negras.push(item);
      }
    });
    this.orderKeys();
  }

  givePosition() {
    this.negras.forEach((item) => {
      const key = document.getElementById(item.code);
      this.audioS.giveDetailPosition(key);
    });
  }

  orderKeys() {
    this.blancas.sort((a, b) =>  a.posicion - b.posicion );
    this.negras.sort((a, b) =>  a.posicion - b.posicion );
  }

  start() {
    this.audioS.kickoff();
    // this.audioS.playFrequency(130.813)
    document.addEventListener('keydown', (e) => {
      // tslint:disable-next-line: deprecation
      const keycode = e.keyCode;
      this.play(keycode);
    });
  }

  play(keycode) {
    this.animateKeyPress(keycode);
      // console.log(keycode);
    const key =  this.keysparse.find((code) => { if ( Number(code[0]) === keycode ) { return code; }});
    if (key) {
        const note = key[1].split(',');
        this.audioS.play(note[0], note[1]);
      }
  }

  playByClick(e) {
    const keyCode = Number(e);
    this.play(keyCode);
  }

  animateKeyPress(key) {
    const tecla = document.getElementById(`${key}`);
    if (tecla) {
      tecla.classList.add('animate');
      tecla.classList.add('active');
      tecla.classList.add('clickEffect');
      setTimeout(() => {
        tecla.classList.remove('animate');
      }, 700);
      setTimeout(() => {
        tecla.classList.remove('active');
        tecla.classList.remove('clickEffect');
      }, 300);
    }
  }

}

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/piano/piano.component */
    "./src/app/components/piano/piano.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'piano-keyboard';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-piano");
        }
      },
      directives: [_components_piano_piano_component__WEBPACK_IMPORTED_MODULE_1__["PianoComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/piano/piano.component */
    "./src/app/components/piano/piano.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__["PianoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__["PianoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/piano/piano.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/piano/piano.component.ts ***!
    \*****************************************************/

  /*! exports provided: PianoComponent */

  /***/
  function srcAppComponentsPianoPianoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PianoComponent", function () {
      return PianoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/audio-tone.service */
    "./src/app/services/audio-tone.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["keyboard"];

    function PianoComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r2, " ");
      }
    }

    var PianoComponent =
    /*#__PURE__*/
    function () {
      function PianoComponent(audioS) {
        _classCallCheck(this, PianoComponent);

        this.audioS = audioS;
        this.keyboard = Object.entries(this.audioS.keyboard);
      }

      _createClass(PianoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.play();
        }
      }, {
        key: "play",
        value: function play() {
          var _this = this;

          this.audioS.kickoff(); // this.audioS.playFrequency(130.813)

          document.addEventListener('keydown', function (e) {
            // tslint:disable-next-line: deprecation
            var keycode = e.keyCode; // console.log(keycode);

            var key = _this.keyboard.find(function (code) {
              if (Number(code[0]) === keycode) {
                return code;
              }
            });

            if (key) {
              var note = key[1].split(',');

              _this.audioS.play(note[0], note[1]);
            }
          });
        }
      }]);

      return PianoComponent;
    }();

    PianoComponent.ɵfac = function PianoComponent_Factory(t) {
      return new (t || PianoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__["AudiotoneService"]));
    };

    PianoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PianoComponent,
      selectors: [["app-piano"]],
      viewQuery: function PianoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.keyDiv = _t.first);
        }
      },
      decls: 5,
      vars: 1,
      consts: [["id", "keyboard"], ["keyboard", ""], [4, "ngFor", "ngForOf"]],
      template: function PianoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let\xB4s play!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PianoComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlhbm8vcGlhbm8uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PianoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-piano',
          templateUrl: './piano.component.html',
          styleUrls: ['./piano.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__["AudiotoneService"]
        }];
      }, {
        keyDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['keyboard']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/pianoTones.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/pianoTones.model.ts ***!
    \********************************************/

  /*! exports provided: Tones, Keyboard */

  /***/
  function srcAppModelsPianoTonesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tones", function () {
      return Tones;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Keyboard", function () {
      return Keyboard;
    });

    var Tones = function Tones() {
      _classCallCheck(this, Tones);

      this.map = [{
        // octave 0
        'c': 16.351,
        'c#': 17.324,
        'db': 17.324,
        'd': 18.354,
        'd#': 19.445,
        'eb': 19.445,
        'e': 20.601,
        'f': 21.827,
        'f#': 23.124,
        'gb': 23.124,
        'g': 24.499,
        'g#': 25.956,
        'ab': 25.956,
        'a': 27.5,
        'a#': 29.135,
        'bb': 29.135,
        'b': 30.868
      }, {
        // octave 1
        'c': 32.703,
        'c#': 34.648,
        'db': 34.648,
        'd': 36.708,
        'd#': 38.891,
        'eb': 38.891,
        'e': 41.203,
        'f': 43.654,
        'f#': 46.249,
        'gb': 46.249,
        'g': 48.999,
        'g#': 51.913,
        'ab': 51.913,
        'a': 55,
        'a#': 58.27,
        'bb': 58.27,
        'b': 61.735
      }, {
        // octave 2
        'c': 65.406,
        'c#': 69.296,
        'db': 69.296,
        'd': 73.416,
        'd#': 77.782,
        'eb': 77.782,
        'e': 82.407,
        'f': 87.307,
        'f#': 92.499,
        'gb': 92.499,
        'g': 97.999,
        'g#': 103.826,
        'ab': 103.826,
        'a': 110,
        'a#': 116.541,
        'bb': 116.541,
        'b': 123.471
      }, {
        // octave 3
        'c': 130.813,
        'c#': 138.591,
        'db': 138.591,
        'd': 146.832,
        'd#': 155.563,
        'eb': 155.563,
        'e': 164.814,
        'f': 174.614,
        'f#': 184.997,
        'gb': 184.997,
        'g': 195.998,
        'g#': 207.652,
        'ab': 207.652,
        'a': 220,
        'a#': 233.082,
        'bb': 233.082,
        'b': 246.942
      }, {
        // octave 4
        'c': 261.626,
        'c#': 277.183,
        'db': 277.183,
        'd': 293.665,
        'd#': 311.127,
        'eb': 311.127,
        'e': 329.628,
        'f': 349.228,
        'f#': 369.994,
        'gb': 369.994,
        'g': 391.995,
        'g#': 415.305,
        'ab': 415.305,
        'a': 440,
        'a#': 466.164,
        'bb': 466.164,
        'b': 493.883
      }, {
        // octave 5
        'c': 523.251,
        'c#': 554.365,
        'db': 554.365,
        'd': 587.33,
        'd#': 622.254,
        'eb': 622.254,
        'e': 659.255,
        'f': 698.456,
        'f#': 739.989,
        'gb': 739.989,
        'g': 783.991,
        'g#': 830.609,
        'ab': 830.609,
        'a': 880,
        'a#': 932.328,
        'bb': 932.328,
        'b': 987.767
      }, {
        // octave 6
        'c': 1046.502,
        'c#': 1108.731,
        'db': 1108.731,
        'd': 1174.659,
        'd#': 1244.508,
        'eb': 1244.508,
        'e': 1318.51,
        'f': 1396.913,
        'f#': 1479.978,
        'gb': 1479.978,
        'g': 1567.982,
        'g#': 1661.219,
        'ab': 1661.219,
        'a': 1760,
        'a#': 1864.655,
        'bb': 1864.655,
        'b': 1975.533
      }, {
        // octave 7
        'c': 2093.005,
        'c#': 2217.461,
        'db': 2217.461,
        'd': 2349.318,
        'd#': 2489.016,
        'eb': 2489.016,
        'e': 2637.021,
        'f': 2793.826,
        'f#': 2959.955,
        'gb': 2959.955,
        'g': 3135.964,
        'g#': 3322.438,
        'ab': 3322.438,
        'a': 3520,
        'a#': 3729.31,
        'bb': 3729.31,
        'b': 3951.066
      }, {
        // octave 8
        'c': 4186.009,
        'c#': 4434.922,
        'db': 4434.922,
        'd': 4698.636,
        'd#': 4978.032,
        'eb': 4978.032,
        'e': 5274.042,
        'f': 5587.652,
        'f#': 5919.91,
        'gb': 5919.91,
        'g': 6271.928,
        'g#': 6644.876,
        'ab': 6644.876,
        'a': 7040,
        'a#': 7458.62,
        'bb': 7458.62,
        'b': 7902.132
      }, {
        // octave 9
        'c': 8372.018,
        'c#': 8869.844,
        'db': 8869.844,
        'd': 9397.272,
        'd#': 9956.064,
        'eb': 9956.064,
        'e': 10548.084,
        'f': 11175.304,
        'f#': 11839.82,
        'gb': 11839.82,
        'g': 12543.856,
        'g#': 13289.752,
        'ab': 13289.752,
        'a': 14080,
        'a#': 14917.24,
        'bb': 14917.24,
        'b': 15804.264
      }];
    };

    var Keyboard = function Keyboard() {
      _classCallCheck(this, Keyboard);

      this.keyboardCustom = {
        65: 'c,4, white',
        83: 'd,4, white',
        68: 'e,4, white',
        70: 'f,4, white',
        71: 'g,4, white',
        72: 'a,4, white',
        74: 'b,4, white',
        75: 'c,5, white',
        76: 'd,5, white',
        192: 'e,5, white',

        /* Negras  */
        87: 'c#,4, black',
        69: 'd#,4, black',
        84: 'f#,4, black',
        89: 'g#,4, black',
        85: 'a#,4, black',
        79: 'c#,5, black',
        80: 'd#,5, black'
      };
      this.keyboard = {
        /* ~ */
        192: 'C,-2',

        /* 1 */
        49: 'C#,-2',

        /* 2 */
        50: 'D,-2',

        /* 3 */
        51: 'D#,-2',

        /* 4 */
        52: 'E,-2',

        /* 5 */
        53: 'F,-2',

        /* 6 */
        54: 'F#,-2',

        /* 7 */
        55: 'G,-2',

        /* 8 */
        56: 'G#,-2',

        /* 9 */
        57: 'A,-2',

        /* 0 */
        48: 'A#,-2',

        /* - */
        189: 'B,-2',

        /* = */
        187: 'C,-1',

        /* Q */
        81: 'C#,-1',

        /* W */
        87: 'D,-1',

        /* E */
        69: 'D#,-1',

        /* R */
        82: 'E,-1',

        /* T */
        84: 'F,-1',

        /* Y */
        89: 'F#,-1',

        /* U */
        85: 'G,-1',

        /* I */
        73: 'G#,-1',

        /* O */
        79: 'A,-1',

        /* P */
        80: 'A#,-1',

        /* [ */
        219: 'B,-1',

        /* ] */
        221: 'C,0',

        /* A */
        65: 'C#,0',

        /* S */
        83: 'D,0',

        /* D */
        68: 'D#,0',

        /* F */
        70: 'E,0',

        /* G */
        71: 'F,0',

        /* H */
        72: 'F#,0',

        /* J */
        74: 'G,0',

        /* K */
        75: 'G#,0',

        /* L */
        76: 'A,0',

        /* ; */
        186: 'A#,0',

        /* " */
        222: 'B,0',

        /* Z */
        90: 'C,1',

        /* X */
        88: 'C#,1',

        /* C */
        67: 'D,1',

        /* V */
        86: 'D#,1',

        /* B */
        66: 'E,1',

        /* N */
        78: 'F,1',

        /* M */
        77: 'F#,1',

        /* , */
        188: 'G,1',

        /* . */
        190: 'G#,1',

        /* / */
        191: 'A,1',

        /* <- */
        37: 'A#,1',

        /* -> */
        39: 'B,1'
      };
    };
    /***/

  },

  /***/
  "./src/app/services/audio-tone.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/audio-tone.service.ts ***!
    \************************************************/

  /*! exports provided: AudiotoneService */

  /***/
  function srcAppServicesAudioToneServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudiotoneService", function () {
      return AudiotoneService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/pianoTones.model */
    "./src/app/models/pianoTones.model.ts");

    var AudiotoneService =
    /*#__PURE__*/
    function () {
      function AudiotoneService() {
        _classCallCheck(this, AudiotoneService);

        this.context = new (AudioContext || webkitAudioContext)();
        this.attack = 1;
        this.release = 100;
        this.volume = 1;
        this.type = 'triangle';
        this.map = new _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__["Tones"]().map;
        this.keyboard = new _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]().keyboardCustom;
      }

      _createClass(AudiotoneService, [{
        key: "kickoff",
        value: function kickoff() {
          this.context.createGain();
        }
      }, {
        key: "playFrequency",
        value: function playFrequency(freq) {
          var _this2 = this;

          this.attack = this.attack || 1;
          this.release = this.release || 1;
          var envelope = this.context.createGain();
          envelope.gain.setValueAtTime(this.volume, this.context.currentTime);
          envelope.connect(this.context.destination);
          envelope.gain.setValueAtTime(0, this.context.currentTime);
          envelope.gain.setTargetAtTime(this.volume, this.context.currentTime, this.attack / 1000);
          var osc = this.context.createOscillator();
          osc.frequency.setValueAtTime(freq, this.context.currentTime);
          osc.type = this.type;
          osc.connect(envelope);
          osc.start(); // debugger

          if (this.release) {
            envelope.gain.setTargetAtTime(0, this.context.currentTime + this.attack / 1000, this.release / 1000);
            setTimeout(function () {
              osc.stop();
              osc.disconnect(envelope);
              envelope.gain.cancelScheduledValues(_this2.context.currentTime);
              envelope.disconnect(_this2.context.destination);
            }, this.attack * 10 + this.release * 10);
          }
        }
      }, {
        key: "play",
        value: function play(freqOrNote, octave) {
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
      }, {
        key: "getTimeMS",
        value: function getTimeMS() {
          return this.context.currentTime * 1000;
        }
      }]);

      return AudiotoneService;
    }();

    AudiotoneService.ɵfac = function AudiotoneService_Factory(t) {
      return new (t || AudiotoneService)();
    };

    AudiotoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AudiotoneService,
      factory: AudiotoneService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudiotoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lovel\Desktop\Mariel\proyectos practica\piano keyboard\pianokeyboard\piano-keyboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
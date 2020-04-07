function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    function PianoComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var negra_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.playByClick(negra_r3.code);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var negra_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", negra_r3.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](negra_r3.tecla);
      }
    }

    function PianoComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoComponent_div_7_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var blanca_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.playByClick(blanca_r6.code);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blanca_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", blanca_r6.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", blanca_r6.tecla, " ");
      }
    }

    var PianoComponent =
    /*#__PURE__*/
    function () {
      function PianoComponent(audioS) {
        _classCallCheck(this, PianoComponent);

        this.audioS = audioS;
        this.keysparse = Object.entries(this.audioS.keyboard);
        this.negras = [];
        this.blancas = [];
      }

      _createClass(PianoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.keysPrepare();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.givePosition();
          this.start();
        }
      }, {
        key: "keysPrepare",
        value: function keysPrepare() {
          var _this = this;

          this.keysparse.forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            var values = value.split(',');
            var item = {
              tecla: values[3],
              code: key,
              note: values[0],
              octave: values[1],
              color: values[2],
              posicion: values[4]
            };

            if (values[2] === 'white') {
              _this.blancas.push(item);
            } else if (values[2] === 'black') {
              _this.negras.push(item);
            }
          });
          this.orderKeys();
        }
      }, {
        key: "givePosition",
        value: function givePosition() {
          var _this2 = this;

          this.negras.forEach(function (item) {
            var key = document.getElementById(item.code);

            _this2.audioS.giveDetailPosition(key);
          });
        }
      }, {
        key: "orderKeys",
        value: function orderKeys() {
          this.blancas.sort(function (a, b) {
            return a.posicion - b.posicion;
          });
          this.negras.sort(function (a, b) {
            return a.posicion - b.posicion;
          });
        }
      }, {
        key: "start",
        value: function start() {
          var _this3 = this;

          this.audioS.kickoff(); // this.audioS.playFrequency(130.813)

          document.addEventListener('keydown', function (e) {
            // tslint:disable-next-line: deprecation
            var keycode = e.keyCode;

            _this3.play(keycode);
          });
        }
      }, {
        key: "play",
        value: function play(keycode) {
          this.animateKeyPress(keycode); // console.log(keycode);

          var key = this.keysparse.find(function (code) {
            if (Number(code[0]) === keycode) {
              return code;
            }
          });

          if (key) {
            var note = key[1].split(',');
            this.audioS.play(note[0], note[1]);
          }
        }
      }, {
        key: "playByClick",
        value: function playByClick(e) {
          var keyCode = Number(e);
          this.play(keyCode);
        }
      }, {
        key: "animateKeyPress",
        value: function animateKeyPress(key) {
          var tecla = document.getElementById("".concat(key));

          if (tecla) {
            tecla.classList.add('animate');
            tecla.classList.add('active');
            tecla.classList.add('clickEffect');
            setTimeout(function () {
              tecla.classList.remove('animate');
            }, 700);
            setTimeout(function () {
              tecla.classList.remove('active');
              tecla.classList.remove('clickEffect');
            }, 300);
          }
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
      decls: 8,
      vars: 2,
      consts: [[1, "container-fluid", "bkg"], ["id", "keyboard", 1, "col-6", "m-auto"], ["keyboard", ""], ["id", "teclas"], [1, "row"], ["class", "blacks bubbly-button", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "whites bubbly-button", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "blacks", "bubbly-button", 3, "id", "click"], [1, "letras_negras", "mb-0"], [1, "whites", "bubbly-button", 3, "id", "click"], [1, "letras_blancas", "mb-0"]],
      template: function PianoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PianoComponent_div_5_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PianoComponent_div_7_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.negras);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blancas);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".bubbly-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 8px rgba(255, 0, 130, 0.5);\n}\n.bubbly-button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.bubbly-button[_ngcontent-%COMP%]:before, .bubbly-button[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 140%;\n  height: 100%;\n  left: -20%;\n  z-index: -1000;\n  transition: all ease-in-out 0.5s;\n  background-repeat: no-repeat;\n}\n.bubbly-button[_ngcontent-%COMP%]:before {\n  display: none;\n  top: -75%;\n  background-image: radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 20%, #FFCCFF 20%, transparent 30%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 10%, #FFCCFF 15%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%);\n  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;\n}\n.bubbly-button[_ngcontent-%COMP%]:after {\n  display: none;\n  bottom: -75%;\n  background-image: radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 10%, #FFCCFF 15%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%);\n  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n.bubbly-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  background-color: #ffb3ff;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n}\n.bubbly-button.animate[_ngcontent-%COMP%]:before {\n  display: block;\n  -webkit-animation: topBubbles ease-in-out 0.75s forwards;\n          animation: topBubbles ease-in-out 0.75s forwards;\n}\n.bubbly-button.animate[_ngcontent-%COMP%]:after {\n  display: block;\n  -webkit-animation: bottomBubbles ease-in-out 0.75s forwards;\n          animation: bottomBubbles ease-in-out 0.75s forwards;\n}\n.active[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n}\n.clickEffect[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 140%;\n  height: 100%;\n  z-index: -1000;\n  background-color: #FFCCFF !important;\n  color: #003399 !important;\n  transition: all ease-in-out 0.3s;\n  background-repeat: no-repeat;\n}\n@-webkit-keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@-webkit-keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n.bkg[_ngcontent-%COMP%] {\n  background-image: url('background.png');\n  min-height: 100vh;\n  background-size: cover;\n}\n#keyboard[_ngcontent-%COMP%] {\n  background-image: url('piano_rosa.png');\n  position: relative;\n  top: 240px;\n  height: 20em;\n  background-size: contain;\n  width: 35%;\n}\n#teclas[_ngcontent-%COMP%] {\n  position: relative;\n  top: 100px;\n  left: 78px;\n}\n.blacks[_ngcontent-%COMP%] {\n  background-color: mediumpurple;\n  text-align: center;\n  color: white;\n  height: 75px;\n  margin-left: 31px;\n  width: 26px;\n  z-index: 1;\n  position: relative;\n  top: -5px;\n}\n.blacks[_ngcontent-%COMP%]:hover {\n  background-color: #CCCCFF;\n}\n.blacks[_ngcontent-%COMP%]:hover   .letras_negras[_ngcontent-%COMP%] {\n  color: black;\n}\n.letras_negras[_ngcontent-%COMP%] {\n  position: relative;\n  top: 45px;\n}\n.whites[_ngcontent-%COMP%] {\n  border-left: 2px solid cornflowerblue;\n  background-color: aliceblue;\n  color: blueviolet;\n  height: 215px;\n  z-index: 0;\n  position: relative;\n  top: -79px;\n  width: 42px;\n  text-align: center;\n}\n.whites[_ngcontent-%COMP%]:hover {\n  background-color: #FFCCFF;\n  color: #003399;\n}\n.whites[_ngcontent-%COMP%]:hover   .letras_blancas[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 15px #508AD3;\n}\n.letras_blancas[_ngcontent-%COMP%] {\n  position: relative;\n  top: 182px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWFuby9DOlxcVXNlcnNcXGxvdmVsXFxEZXNrdG9wXFxNYXJpZWxcXHByb3llY3RvcyBwcmFjdGljYVxccHJveWVjdG8gcGlhbm9cXHBpYW5va2V5Ym9hcmQvc2Fzc1xcX3RhcEFuaW1hdGlvbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL3BpYW5vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL0M6XFxVc2Vyc1xcbG92ZWxcXERlc2t0b3BcXE1hcmllbFxccHJveWVjdG9zIHByYWN0aWNhXFxwcm95ZWN0byBwaWFub1xccGlhbm9rZXlib2FyZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGlhbm9cXHBpYW5vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSw0Q0FBQTtBQ1ZGO0FEWUU7RUFDRSxVQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ1hKO0FEY0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlpQkFDQTtFQVNGLGdHQUFBO0FDckJGO0FEeUJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrYUFDQTtFQU9GLDhFQUFBO0FDOUJGO0FEa0NFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0FDaENKO0FEb0NJO0VBQ0UsY0FBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUNsQ047QURvQ0k7RUFDRSxjQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ2xDTjtBRHVDQTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUNyQ0Y7QUR5Q0E7RUFDRTtJQUNFLG1HQUFBO0VDdENGO0VEd0NFO0lBQ0UsaUdBQUE7RUN0Q0o7RUR1Q0Q7SUFDRyxtR0FBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLG1HQUFBO0VDdENGO0VEd0NFO0lBQ0UsaUdBQUE7RUN0Q0o7RUR1Q0Q7SUFDRyxtR0FBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUR3Q0E7RUFDRTtJQUNFLHNGQUFBO0VDdENGO0VEd0NBO0lBQ0Usa0ZBQUE7RUN0Q0Y7RUR1Q0Q7SUFDRyxtRkFBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLHNGQUFBO0VDdENGO0VEd0NBO0lBQ0Usa0ZBQUE7RUN0Q0Y7RUR1Q0Q7SUFDRyxtRkFBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUN2RkE7RUFDRSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUR5RkY7QUN0RkE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUR5RkY7QUN0RkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEeUZGO0FDdEZBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBRHlGRjtBQ3RGQTtFQUNFLHlCQUFBO0FEeUZGO0FDdEZBO0VBQ0UsWUFBQTtBRHlGRjtBQ3RGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBRHlGRjtBQ3RGQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEeUZGO0FDdEZBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FEeUZGO0FDdEZBO0VBQ0UsaUNBQUE7QUR5RkY7QUN0RkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUR5RkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL3BpYW5vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZ1c2NoaWE6ICNmZjAwODE7XHJcbiRidXR0b24tYmc6ICNGRkNDRkY7XHJcbiRidXR0b24tdGV4dC1jb2xvcjogI2ZmZjtcclxuJGJhYnktYmx1ZTogI2Y4ZmFmZjtcclxuXHJcbi8vIGJvZHl7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJhYnktYmx1ZTtcclxuLy8gfVxyXG4uYnViYmx5LWJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMC4xcywgYm94LXNoYWRvdyBlYXNlLWluIDAuMjVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDI1NSwgMCwgMTMwLCAwLjUpO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgJjpiZWZvcmUsICY6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAtMjAlO1xyXG4gICAgei1pbmRleDogLTEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3Jle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRvcDogLTc1JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIHRyYW5zcGFyZW50IDIwJSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDMwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICB0cmFuc3BhcmVudCAxMCUsICRidXR0b24tYmcgMTUlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMCUgMTAlLCAyMCUgMjAlLCAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAxMCUgMTAlLCAxNSUgMTUlLCAxMCUgMTAlLCAxOCUgMTglO1xyXG4gIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODAlLCAtNSUgMjAlLCAxMCUgNDAlLCAyMCUgMCUsIDMwJSAzMCUsIDIyJSA1MCUsIDUwJSA1MCUsIDY1JSAyMCUsIDg1JSAzMCU7XHJcbiAgfVxyXG4gIFxyXG4gICY6YWZ0ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm90dG9tOiAtNzUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksIFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAgdHJhbnNwYXJlbnQgMTAlLCAkYnV0dG9uLWJnIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMjAlIDIwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMjAlIDIwJTtcclxuICAvL2JhY2tncm91bmQtcG9zaXRpb246IDUlIDkwJSwgMTAlIDkwJSwgMTAlIDkwJSwgMTUlIDkwJSwgMjUlIDkwJSwgMjUlIDkwJSwgNDAlIDkwJSwgNTUlIDkwJSwgNzAlIDkwJTtcclxuICB9XHJcbiBcclxuICAmOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnV0dG9uLWJnLCA1JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMjU1LCAwLCAxMzAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gICYuYW5pbWF0ZXtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYW5pbWF0aW9uOiB0b3BCdWJibGVzIGVhc2UtaW4tb3V0IDAuNzVzIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGFuaW1hdGlvbjogYm90dG9tQnViYmxlcyBlYXNlLWluLW91dCAwLjc1cyBmb3J3YXJkcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggcmdiYSgyNTUsIDAsIDEzMCwgMC4yKTtcclxufVxyXG5cclxuLmNsaWNrRWZmZWN0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gbGVmdDogLTIwJTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQ0ZGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDMzOTkgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyB0b3BCdWJibGVzIHtcclxuICAwJXtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUlIDkwJSwgMTAlIDkwJSwgMTAlIDkwJSwgMTUlIDkwJSwgMjUlIDkwJSwgMjUlIDkwJSwgNDAlIDkwJSwgNTUlIDkwJSwgNzAlIDkwJTtcclxuICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MCUsIDAlIDIwJSwgMTAlIDQwJSwgMjAlIDAlLCAzMCUgMzAlLCAyMiUgNTAlLCA1MCUgNTAlLCA2NSUgMjAlLCA5MCUgMzAlO31cclxuIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNzAlLCAwJSAxMCUsIDEwJSAzMCUsIDIwJSAtMTAlLCAzMCUgMjAlLCAyMiUgNDAlLCA1MCUgNDAlLCA2NSUgMTAlLCA5MCUgMjAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMCUsIDAlIDAlLCAgMCUgMCUsICAwJSAwJSwgIDAlIDAlLCAgMCUgMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdHRvbUJ1YmJsZXMge1xyXG4gIDAle1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIC0xMCUsIDMwJSAxMCUsIDU1JSAtMTAlLCA3MCUgLTEwJSwgODUlIC0xMCUsIDcwJSAtMTAlLCA3MCUgMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MCUsIDIwJSA4MCUsIDQ1JSA2MCUsIDYwJSAxMDAlLCA3NSUgNzAlLCA5NSUgNjAlLCAxMDUlIDAlO31cclxuIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgOTAlLCAyMCUgOTAlLCA0NSUgNzAlLCA2MCUgMTEwJSwgNzUlIDgwJSwgOTUlIDcwJSwgMTEwJSAxMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAwJSAwJSwgMCUgMCUsICAwJSAwJSwgIDAlIDAlLCAgMCUgMCUsICAwJSAwJTtcclxuICB9XHJcbn0iLCIuYnViYmx5LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMC4xcywgYm94LXNoYWRvdyBlYXNlLWluIDAuMjVzO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDAsIDEzMCwgMC41KTtcbn1cbi5idWJibHktYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5idWJibHktYnV0dG9uOmJlZm9yZSwgLmJ1YmJseS1idXR0b246YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAtMjAlO1xuICB6LWluZGV4OiAtMTAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYnViYmx5LWJ1dHRvbjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IC03NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAyMCUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAzMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDEwJSwgI0ZGQ0NGRiAxNSUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwJSAxMCUsIDIwJSAyMCUsIDE1JSAxNSUsIDIwJSAyMCUsIDE4JSAxOCUsIDEwJSAxMCUsIDE1JSAxNSUsIDEwJSAxMCUsIDE4JSAxOCU7XG59XG4uYnViYmx5LWJ1dHRvbjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvdHRvbTogLTc1JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxMCUsICNGRkNDRkYgMTUlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAyMCUgMjAlLCAxNSUgMTUlLCAxMCUgMTAlLCAyMCUgMjAlO1xufVxuLmJ1YmJseS1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiM2ZmO1xuICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMjU1LCAwLCAxMzAsIDAuMik7XG59XG4uYnViYmx5LWJ1dHRvbi5hbmltYXRlOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IHRvcEJ1YmJsZXMgZWFzZS1pbi1vdXQgMC43NXMgZm9yd2FyZHM7XG59XG4uYnViYmx5LWJ1dHRvbi5hbmltYXRlOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogYm90dG9tQnViYmxlcyBlYXNlLWluLW91dCAwLjc1cyBmb3J3YXJkcztcbn1cblxuLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDI1NSwgMCwgMTMwLCAwLjIpO1xufVxuXG4uY2xpY2tFZmZlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0NGRiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMzM5OSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuQGtleWZyYW1lcyB0b3BCdWJibGVzIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUlIDkwJSwgMTAlIDkwJSwgMTAlIDkwJSwgMTUlIDkwJSwgMjUlIDkwJSwgMjUlIDkwJSwgNDAlIDkwJSwgNTUlIDkwJSwgNzAlIDkwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgwJSwgMCUgMjAlLCAxMCUgNDAlLCAyMCUgMCUsIDMwJSAzMCUsIDIyJSA1MCUsIDUwJSA1MCUsIDY1JSAyMCUsIDkwJSAzMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNzAlLCAwJSAxMCUsIDEwJSAzMCUsIDIwJSAtMTAlLCAzMCUgMjAlLCAyMiUgNDAlLCA1MCUgNDAlLCA2NSUgMTAlLCA5MCUgMjAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMCUgMCUsIDAlIDAlLCAwJSAwJSwgMCUgMCUsIDAlIDAlLCAwJSAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3R0b21CdWJibGVzIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAtMTAlLCAzMCUgMTAlLCA1NSUgLTEwJSwgNzAlIC0xMCUsIDg1JSAtMTAlLCA3MCUgLTEwJSwgNzAlIDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODAlLCAyMCUgODAlLCA0NSUgNjAlLCA2MCUgMTAwJSwgNzUlIDcwJSwgOTUlIDYwJSwgMTA1JSAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA5MCUsIDIwJSA5MCUsIDQ1JSA3MCUsIDYwJSAxMTAlLCA3NSUgODAlLCA5NSUgNzAlLCAxMTAlIDEwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlLCAwJSAwJSwgMCUgMCUsIDAlIDAlLCAwJSAwJSwgMCUgMCU7XG4gIH1cbn1cbi5ia2cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIik7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ja2V5Ym9hcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcGlhbm9fcm9zYS5wbmdcIik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNDBweDtcbiAgaGVpZ2h0OiAyMGVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAzNSU7XG59XG5cbiN0ZWNsYXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDc4cHg7XG59XG5cbi5ibGFja3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1wdXJwbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMXB4O1xuICB3aWR0aDogMjZweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbi5ibGFja3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0ZGO1xufVxuXG4uYmxhY2tzOmhvdmVyIC5sZXRyYXNfbmVncmFzIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGV0cmFzX25lZ3JhcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NXB4O1xufVxuXG4ud2hpdGVzIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBjb2xvcjogYmx1ZXZpb2xldDtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC03OXB4O1xuICB3aWR0aDogNDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2hpdGVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0NGRjtcbiAgY29sb3I6ICMwMDMzOTk7XG59XG5cbi53aGl0ZXM6aG92ZXIgLmxldHJhc19ibGFuY2FzIHtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCAjNTA4QUQzO1xufVxuXG4ubGV0cmFzX2JsYW5jYXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTgycHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Fzcy90YXBBbmltYXRpb24nO1xyXG5cclxuLmJrZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNrZXlib2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9waWFub19yb3NhLnBuZycpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI0MHB4O1xyXG4gIGhlaWdodDogMjBlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuI3RlY2xhc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiA3OHB4O1xyXG59XHJcblxyXG4uYmxhY2tze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNzVweDtcclxuICBtYXJnaW4tbGVmdDogMzFweDtcclxuICB3aWR0aDogMjZweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5ibGFja3M6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NGRiA7IFxyXG59XHJcblxyXG4uYmxhY2tzOmhvdmVyIC5sZXRyYXNfbmVncmFzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sZXRyYXNfbmVncmFze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi53aGl0ZXN7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgaGVpZ2h0OiAyMTVweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC03OXB4O1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndoaXRlczpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQ0ZGO1xyXG4gIGNvbG9yOiAjMDAzMzk5O1xyXG59XHJcblxyXG4ud2hpdGVzOmhvdmVyIC5sZXRyYXNfYmxhbmNhc3tcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4ICM1MDhBRDM7XHJcbn1cclxuXHJcbi5sZXRyYXNfYmxhbmNhc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxODJweDtcclxufVxyXG4iXX0= */"]
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
        65: 'c,4,white,A,1',
        83: 'd,4,white,S,2',
        68: 'e,4,white,D,3',
        70: 'f,4,white,F,4',
        71: 'g,4,white,G,5',
        72: 'a,4,white,H,6',
        74: 'b,4,white,J,7',
        75: 'c,5,white,K,8',
        76: 'd,5,white,L,9',
        192: 'e,5,white,Ñ,10',

        /* Negras  */
        87: 'c#,4,black,W,1',
        69: 'd#,4,black,E,2',
        84: 'f#,4,black,T,3',
        89: 'g#,4,black,Y,4',
        85: 'a#,4,black,U,5',
        79: 'c#,5,black,O,6',
        80: 'd#,5,black,P,7'
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
          var _this4 = this;

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
              envelope.gain.cancelScheduledValues(_this4.context.currentTime);
              envelope.disconnect(_this4.context.destination);
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
      }, {
        key: "giveDetailPosition",
        value: function giveDetailPosition(key) {
          switch (key.id) {
            case '69':
              key.style.left = '-16px';
              break;

            case '79':
              key.style.left = '8px';
              break;

            case '80':
              key.style.left = '-8px';
              break;

            case '84':
              key.style.left = '11px';
              break;

            case '85':
              key.style.left = '-18px';
              break;

            case '85':
              key.style.left = '-20px';
              break;
          }
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
    /*! C:\Users\lovel\Desktop\Mariel\proyectos practica\proyecto piano\pianokeyboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
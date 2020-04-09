(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/piano/piano.component */ "./src/app/components/piano/piano.component.ts");



class AppComponent {
    constructor() {
        this.title = 'piano-keyboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-piano");
    } }, directives: [_components_piano_piano_component__WEBPACK_IMPORTED_MODULE_1__["PianoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/piano/piano.component */ "./src/app/components/piano/piano.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__["PianoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_3__["PianoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/piano/piano.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/piano/piano.component.ts ***!
  \*****************************************************/
/*! exports provided: PianoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoComponent", function() { return PianoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/audio-tone.service */ "./src/app/services/audio-tone.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["keyboard"];
function PianoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const negra_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.playByClick(negra_r3.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const negra_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", negra_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](negra_r3.notalatina);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](negra_r3.tecla);
} }
function PianoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const blanca_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.playByClick(blanca_r6.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blanca_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", blanca_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blanca_r6.notalatina);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blanca_r6.tecla);
} }
class PianoComponent {
    constructor(audioS) {
        this.audioS = audioS;
        this.keysparse = Object.entries(this.audioS.keyboard);
        this.negras = [];
        this.blancas = [];
    }
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
            }
            else if (values[2] === 'black') {
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
        this.blancas.sort((a, b) => a.posicion - b.posicion);
        this.negras.sort((a, b) => a.posicion - b.posicion);
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
        const key = this.keysparse.find((code) => { if (Number(code[0]) === keycode) {
            return code;
        } });
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
PianoComponent.ɵfac = function PianoComponent_Factory(t) { return new (t || PianoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__["AudiotoneService"])); };
PianoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PianoComponent, selectors: [["app-piano"]], viewQuery: function PianoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.keyDiv = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "container", "bkg"], ["id", "keyboard", 1, "col-xs-12", "col-md-6", "m-auto"], ["keyboard", ""], ["id", "teclas"], [1, "row"], ["class", "blacks bubbly-button", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "whites bubbly-button", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "blacks", "bubbly-button", 3, "id", "click"], [1, "notas", "letras_negras", "mb-0"], [1, "letras_negras", "mb-0"], [1, "whites", "bubbly-button", 3, "id", "click"], [1, "notas", "letras_blancas", "mb-0"], [1, "letras_blancas", "mb-0"]], template: function PianoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PianoComponent_div_5_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PianoComponent_div_7_Template, 5, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.negras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blancas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".bubbly-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 8px rgba(255, 0, 130, 0.5);\n}\n.bubbly-button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.bubbly-button[_ngcontent-%COMP%]:before, .bubbly-button[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 10%;\n  height: 10%;\n  left: -20%;\n  z-index: -1000;\n  transition: all ease-in-out 0.5s;\n  background-repeat: no-repeat;\n}\n.bubbly-button[_ngcontent-%COMP%]:before {\n  display: none;\n  top: -5%;\n  background-image: radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 20%, #FFCCFF 20%, transparent 30%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 10%, #FFCCFF 15%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%);\n  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;\n}\n.bubbly-button[_ngcontent-%COMP%]:after {\n  display: none;\n  bottom: -5%;\n  background-image: radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, transparent 10%, #FFCCFF 15%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%), radial-gradient(circle, #FFCCFF 20%, transparent 20%);\n  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n.bubbly-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  background-color: #ffb3ff;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n}\n.bubbly-button.animate[_ngcontent-%COMP%]:before {\n  display: block;\n  -webkit-animation: topBubbles ease-in-out 0.75s forwards;\n          animation: topBubbles ease-in-out 0.75s forwards;\n}\n.bubbly-button.animate[_ngcontent-%COMP%]:after {\n  display: block;\n  -webkit-animation: bottomBubbles ease-in-out 0.75s forwards;\n          animation: bottomBubbles ease-in-out 0.75s forwards;\n}\n.active[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n}\n.clickEffect[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 10%;\n  height: 10%;\n  z-index: -1000;\n  background-color: #FFCCFF !important;\n  color: #003399 !important;\n  transition: all ease-in-out 0.3s;\n  background-repeat: no-repeat;\n}\n@-webkit-keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@-webkit-keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n.bkg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-size: cover;\n}\n#keyboard[_ngcontent-%COMP%] {\n  background-image: url('piano_rosa.png');\n  position: relative;\n  background-size: cover;\n}\n#teclas[_ngcontent-%COMP%] {\n  position: relative;\n}\n.blacks[_ngcontent-%COMP%] {\n  background-color: mediumpurple;\n  text-align: center;\n  color: white;\n  z-index: 1;\n  position: relative;\n}\n.blacks[_ngcontent-%COMP%]:hover {\n  background-color: #CCCCFF;\n}\n.blacks[_ngcontent-%COMP%]:hover   .letras_negras[_ngcontent-%COMP%] {\n  color: black;\n}\n.letras_negras[_ngcontent-%COMP%] {\n  position: relative;\n}\n.whites[_ngcontent-%COMP%] {\n  border-left: 2px solid cornflowerblue;\n  background-color: aliceblue;\n  color: blueviolet;\n  z-index: 0;\n  position: relative;\n  text-align: center;\n}\n.whites[_ngcontent-%COMP%]:hover {\n  background-color: #FFCCFF;\n  color: #003399;\n}\n.whites[_ngcontent-%COMP%]:hover   .letras_blancas[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 15px #508AD3;\n}\n.letras_blancas[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: bold;\n}\n@media only screen and (min-width: 320px) {\n  .bkg[_ngcontent-%COMP%] {\n    background-image: url('bkg_mobile1.png');\n  }\n\n  #keyboard[_ngcontent-%COMP%] {\n    top: 145px;\n    height: 10em;\n    min-width: 320px;\n  }\n\n  #teclas[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 55px;\n    left: 65px;\n    width: 225px;\n  }\n\n  .whites[_ngcontent-%COMP%] {\n    top: -44px;\n    min-height: 100px;\n    min-width: 9%;\n  }\n\n  .blacks[_ngcontent-%COMP%] {\n    width: 8%;\n    margin-left: 6%;\n    min-height: 45px;\n  }\n\n  .letras_blancas[_ngcontent-%COMP%] {\n    top: 65px;\n    font-size: x-small;\n  }\n\n  .letras_negras[_ngcontent-%COMP%] {\n    top: 20px;\n    font-size: xx-small;\n  }\n\n  .notas[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n@media only screen and (min-width: 375px) {\n  #teclas[_ngcontent-%COMP%] {\n    width: 244px;\n  }\n}\n@media only screen and (min-width: 420px) {\n  .bkg[_ngcontent-%COMP%] {\n    background-image: url('bkg_mobile1.png');\n  }\n\n  #keyboard[_ngcontent-%COMP%] {\n    height: 11em;\n  }\n\n  #teclas[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 66px;\n    left: 65px;\n    width: 294px;\n  }\n}\n@media only screen and (min-width: 640px) {\n  .bkg[_ngcontent-%COMP%] {\n    background-image: url('tablet_bkg.png');\n    background-size: contain;\n    min-height: 360px;\n  }\n\n  #keyboard[_ngcontent-%COMP%] {\n    top: 105px;\n    height: 12em;\n    min-width: 396px;\n  }\n\n  .whites[_ngcontent-%COMP%] {\n    top: -53px;\n    min-height: 121px;\n  }\n\n  .blacks[_ngcontent-%COMP%] {\n    margin-left: 5.6%;\n    min-height: 55px;\n  }\n\n  .letras_blancas[_ngcontent-%COMP%] {\n    top: 72px;\n    font-size: small;\n  }\n\n  .letras_negras[_ngcontent-%COMP%] {\n    top: 10px;\n    font-size: small;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .bkg[_ngcontent-%COMP%] {\n    background-image: url('background.png');\n    background-size: cover;\n    min-height: 555px;\n  }\n\n  #keyboard[_ngcontent-%COMP%] {\n    top: 150px;\n    height: 13em;\n  }\n\n  #teclas[_ngcontent-%COMP%] {\n    top: 76px;\n    left: 78px;\n    width: 350px;\n  }\n\n  .notas[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .bkg[_ngcontent-%COMP%] {\n    background-image: url('background.png');\n  }\n\n  #keyboard[_ngcontent-%COMP%] {\n    height: 18em;\n  }\n\n  #teclas[_ngcontent-%COMP%] {\n    top: 93px;\n    left: 93px;\n    width: 413px;\n  }\n\n  .whites[_ngcontent-%COMP%] {\n    top: -76px;\n    min-height: 190px;\n    min-width: 9.2%;\n  }\n\n  .notas[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n\n  .letras_blancas[_ngcontent-%COMP%] {\n    top: 125px;\n    font-size: large;\n  }\n\n  .blacks[_ngcontent-%COMP%] {\n    margin-left: 5.4%;\n    min-height: 78px;\n  }\n\n  .letras_negras[_ngcontent-%COMP%] {\n    top: 21px;\n    font-size: medium;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWFuby9DOlxcVXNlcnNcXGxvdmVsXFxEZXNrdG9wXFxNYXJpZWxcXHByb3llY3RvcyBwcmFjdGljYVxccHJveWVjdG8gcGlhbm9cXHBpYW5va2V5Ym9hcmQvc2Fzc1xcX3RhcEFuaW1hdGlvbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL3BpYW5vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL0M6XFxVc2Vyc1xcbG92ZWxcXERlc2t0b3BcXE1hcmllbFxccHJveWVjdG9zIHByYWN0aWNhXFxwcm95ZWN0byBwaWFub1xccGlhbm9rZXlib2FyZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGlhbm9cXHBpYW5vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSw0Q0FBQTtBQ1ZGO0FEWUU7RUFDRSxVQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ1hKO0FEY0U7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGlpQkFDQTtFQVNGLGdHQUFBO0FDckJGO0FEeUJFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrYUFDQTtFQU9GLDhFQUFBO0FDOUJGO0FEa0NFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0FDaENKO0FEb0NJO0VBQ0UsY0FBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUNsQ047QURvQ0k7RUFDRSxjQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ2xDTjtBRHVDQTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUNyQ0Y7QUR5Q0E7RUFDRTtJQUNFLG1HQUFBO0VDdENGO0VEd0NFO0lBQ0UsaUdBQUE7RUN0Q0o7RUR1Q0Q7SUFDRyxtR0FBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLG1HQUFBO0VDdENGO0VEd0NFO0lBQ0UsaUdBQUE7RUN0Q0o7RUR1Q0Q7SUFDRyxtR0FBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUR3Q0E7RUFDRTtJQUNFLHNGQUFBO0VDdENGO0VEd0NBO0lBQ0Usa0ZBQUE7RUN0Q0Y7RUR1Q0Q7SUFDRyxtRkFBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLHNGQUFBO0VDdENGO0VEd0NBO0lBQ0Usa0ZBQUE7RUN0Q0Y7RUR1Q0Q7SUFDRyxtRkFBQTtJQUNGLHlEQUFBO0VDckNBO0FBQ0Y7QUM3RUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FEK0VGO0FDNUVBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEK0VGO0FDNUVBO0VBQ0Usa0JBQUE7QUQrRUY7QUM1RUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRCtFRjtBQzVFQTtFQUNFLHlCQUFBO0FEK0VGO0FDNUVBO0VBQ0UsWUFBQTtBRCtFRjtBQzVFQTtFQUNFLGtCQUFBO0FEK0VGO0FDM0VBO0VBQ0UscUNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUQ4RUY7QUMzRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUQ4RUY7QUMzRUE7RUFDRSxpQ0FBQTtBRDhFRjtBQzNFQTtFQUNFLGtCQUFBO0VBRUEsaUJBQUE7QUQ2RUY7QUMxRUE7RUFDRTtJQUNFLHdDQUFBO0VENkVGOztFQzFFQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUQ2RUY7O0VDMUVBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUQ2RUY7O0VDMUVBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFRDZFRjs7RUMzRUE7SUFDRSxTQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VEOEVGOztFQzVFQTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtFRCtFRjs7RUM3RUE7SUFDRSxTQUFBO0lBQ0EsbUJBQUE7RURnRkY7O0VDN0VBO0lBQ0Usa0JBQUE7RURnRkY7QUFDRjtBQzVFQTtFQUNFO0lBQ0UsWUFBQTtFRDhFRjtBQUNGO0FDMUVBO0VBQ0U7SUFDRSx3Q0FBQTtFRDRFRjs7RUN6RUE7SUFDRSxZQUFBO0VENEVGOztFQ3pFQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VENEVGO0FBQ0Y7QUNyREE7RUFDRTtJQUNFLHVDQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtFRHVERjs7RUNyREE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VEd0RGOztFQ2hEQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFRG1ERjs7RUNoREE7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VEbURGOztFQ2pEQTtJQUNFLFNBQUE7SUFDQSxnQkFBQTtFRG9ERjs7RUNsREE7SUFDRSxTQUFBO0lBQ0EsZ0JBQUE7RURxREY7QUFDRjtBQ2xEQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VEb0RGOztFQ2pEQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VEb0RGOztFQ2pEQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRG9ERjs7RUNqREE7SUFDRSxtQkFBQTtFRG9ERjtBQUNGO0FDaERBO0VBQ0U7SUFDRSx1Q0FBQTtFRGtERjs7RUMvQ0E7SUFDRSxZQUFBO0VEa0RGOztFQy9DQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRGtERjs7RUMvQ0E7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VEa0RGOztFQy9DQTtJQUNFLG1CQUFBO0VEa0RGOztFQy9DQTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRGtERjs7RUMvQ0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VEa0RGOztFQy9DQTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFRGtERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waWFuby9waWFuby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmdXNjaGlhOiAjZmYwMDgxO1xyXG4kYnV0dG9uLWJnOiAjRkZDQ0ZGO1xyXG4kYnV0dG9uLXRleHQtY29sb3I6ICNmZmY7XHJcbiRiYWJ5LWJsdWU6ICNmOGZhZmY7XHJcblxyXG4vLyBib2R5e1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBmb250LWZhbWlseTogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiYWJ5LWJsdWU7XHJcbi8vIH1cclxuLmJ1YmJseS1idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIDAuMXMsIGJveC1zaGFkb3cgZWFzZS1pbiAwLjI1cztcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDAsIDEzMCwgMC41KTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3JlLCAmOmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGxlZnQ6IC0yMCU7XHJcbiAgICB6LWluZGV4OiAtMTAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgXHJcbiAgJjpiZWZvcmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdG9wOiAtNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICB0cmFuc3BhcmVudCAyMCUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAzMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksIFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAgdHJhbnNwYXJlbnQgMTAlLCAkYnV0dG9uLWJnIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAlIDEwJSwgMjAlIDIwJSwgMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMTAlIDEwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMTglIDE4JTtcclxuICAvL2JhY2tncm91bmQtcG9zaXRpb246IDAlIDgwJSwgLTUlIDIwJSwgMTAlIDQwJSwgMjAlIDAlLCAzMCUgMzAlLCAyMiUgNTAlLCA1MCUgNTAlLCA2NSUgMjAlLCA4NSUgMzAlO1xyXG4gIH1cclxuICBcclxuICAmOmFmdGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvdHRvbTogLTUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksIFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAgdHJhbnNwYXJlbnQgMTAlLCAkYnV0dG9uLWJnIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGJ1dHRvbi1iZyAyMCUsIHRyYW5zcGFyZW50IDIwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkYnV0dG9uLWJnIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRidXR0b24tYmcgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMjAlIDIwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMjAlIDIwJTtcclxuICAvL2JhY2tncm91bmQtcG9zaXRpb246IDUlIDkwJSwgMTAlIDkwJSwgMTAlIDkwJSwgMTUlIDkwJSwgMjUlIDkwJSwgMjUlIDkwJSwgNDAlIDkwJSwgNTUlIDkwJSwgNzAlIDkwJTtcclxuICB9XHJcbiBcclxuICAmOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnV0dG9uLWJnLCA1JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMjU1LCAwLCAxMzAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gICYuYW5pbWF0ZXtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYW5pbWF0aW9uOiB0b3BCdWJibGVzIGVhc2UtaW4tb3V0IDAuNzVzIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGFuaW1hdGlvbjogYm90dG9tQnViYmxlcyBlYXNlLWluLW91dCAwLjc1cyBmb3J3YXJkcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggcmdiYSgyNTUsIDAsIDEzMCwgMC4yKTtcclxufVxyXG5cclxuLmNsaWNrRWZmZWN0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIC8vIGxlZnQ6IC0yMCU7XHJcbiAgei1pbmRleDogLTEwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0NGRiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAzMzk5ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgdG9wQnViYmxlcyB7XHJcbiAgMCV7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1JSA5MCUsIDEwJSA5MCUsIDEwJSA5MCUsIDE1JSA5MCUsIDI1JSA5MCUsIDI1JSA5MCUsIDQwJSA5MCUsIDU1JSA5MCUsIDcwJSA5MCU7XHJcbiAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODAlLCAwJSAyMCUsIDEwJSA0MCUsIDIwJSAwJSwgMzAlIDMwJSwgMjIlIDUwJSwgNTAlIDUwJSwgNjUlIDIwJSwgOTAlIDMwJTt9XHJcbiAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDcwJSwgMCUgMTAlLCAxMCUgMzAlLCAyMCUgLTEwJSwgMzAlIDIwJSwgMjIlIDQwJSwgNTAlIDQwJSwgNjUlIDEwJSwgOTAlIDIwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlLCAwJSAwJSwgIDAlIDAlLCAgMCUgMCUsICAwJSAwJSwgIDAlIDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3R0b21CdWJibGVzIHtcclxuICAwJXtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJSAtMTAlLCAzMCUgMTAlLCA1NSUgLTEwJSwgNzAlIC0xMCUsIDg1JSAtMTAlLCA3MCUgLTEwJSwgNzAlIDAlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgODAlLCAyMCUgODAlLCA0NSUgNjAlLCA2MCUgMTAwJSwgNzUlIDcwJSwgOTUlIDYwJSwgMTA1JSAwJTt9XHJcbiAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDkwJSwgMjAlIDkwJSwgNDUlIDcwJSwgNjAlIDExMCUsIDc1JSA4MCUsIDk1JSA3MCUsIDExMCUgMTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMCUsIDAlIDAlLCAgMCUgMCUsICAwJSAwJSwgIDAlIDAlLCAgMCUgMCU7XHJcbiAgfVxyXG59IiwiLmJ1YmJseS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIDAuMXMsIGJveC1zaGFkb3cgZWFzZS1pbiAwLjI1cztcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjU1LCAwLCAxMzAsIDAuNSk7XG59XG4uYnViYmx5LWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYnViYmx5LWJ1dHRvbjpiZWZvcmUsIC5idWJibHktYnV0dG9uOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGxlZnQ6IC0yMCU7XG4gIHotaW5kZXg6IC0xMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5idWJibHktYnV0dG9uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogLTUlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMjAlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMzAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxMCUsICNGRkNDRkYgMTUlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMCUgMTAlLCAyMCUgMjAlLCAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAxMCUgMTAlLCAxNSUgMTUlLCAxMCUgMTAlLCAxOCUgMTglO1xufVxuLmJ1YmJseS1idXR0b246YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBib3R0b206IC01JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxMCUsICNGRkNDRkYgMTUlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0ZGQ0NGRiAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRkNDRkYgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRkZDQ0ZGIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAyMCUgMjAlLCAxNSUgMTUlLCAxMCUgMTAlLCAyMCUgMjAlO1xufVxuLmJ1YmJseS1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiM2ZmO1xuICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMjU1LCAwLCAxMzAsIDAuMik7XG59XG4uYnViYmx5LWJ1dHRvbi5hbmltYXRlOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IHRvcEJ1YmJsZXMgZWFzZS1pbi1vdXQgMC43NXMgZm9yd2FyZHM7XG59XG4uYnViYmx5LWJ1dHRvbi5hbmltYXRlOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogYm90dG9tQnViYmxlcyBlYXNlLWluLW91dCAwLjc1cyBmb3J3YXJkcztcbn1cblxuLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDI1NSwgMCwgMTMwLCAwLjIpO1xufVxuXG4uY2xpY2tFZmZlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgei1pbmRleDogLTEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDRkYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDMzOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbkBrZXlmcmFtZXMgdG9wQnViYmxlcyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1JSA5MCUsIDEwJSA5MCUsIDEwJSA5MCUsIDE1JSA5MCUsIDI1JSA5MCUsIDI1JSA5MCUsIDQwJSA5MCUsIDU1JSA5MCUsIDcwJSA5MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA4MCUsIDAlIDIwJSwgMTAlIDQwJSwgMjAlIDAlLCAzMCUgMzAlLCAyMiUgNTAlLCA1MCUgNTAlLCA2NSUgMjAlLCA5MCUgMzAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDcwJSwgMCUgMTAlLCAxMCUgMzAlLCAyMCUgLTEwJSwgMzAlIDIwJSwgMjIlIDQwJSwgNTAlIDQwJSwgNjUlIDEwJSwgOTAlIDIwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlLCAwJSAwJSwgMCUgMCUsIDAlIDAlLCAwJSAwJSwgMCUgMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm90dG9tQnViYmxlcyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCUgLTEwJSwgMzAlIDEwJSwgNTUlIC0xMCUsIDcwJSAtMTAlLCA4NSUgLTEwJSwgNzAlIC0xMCUsIDcwJSAwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDgwJSwgMjAlIDgwJSwgNDUlIDYwJSwgNjAlIDEwMCUsIDc1JSA3MCUsIDk1JSA2MCUsIDEwNSUgMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgOTAlLCAyMCUgOTAlLCA0NSUgNzAlLCA2MCUgMTEwJSwgNzUlIDgwJSwgOTUlIDcwJSwgMTEwJSAxMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwJSAwJSwgMCUgMCUsIDAlIDAlLCAwJSAwJSwgMCUgMCUsIDAlIDAlO1xuICB9XG59XG4uYmtnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNrZXlib2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9waWFub19yb3NhLnBuZ1wiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jdGVjbGFzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmxhY2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmxhY2tzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NGRjtcbn1cblxuLmJsYWNrczpob3ZlciAubGV0cmFzX25lZ3JhcyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxldHJhc19uZWdyYXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53aGl0ZXMge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoaXRlczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDRkY7XG4gIGNvbG9yOiAjMDAzMzk5O1xufVxuXG4ud2hpdGVzOmhvdmVyIC5sZXRyYXNfYmxhbmNhcyB7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggIzUwOEFEMztcbn1cblxuLmxldHJhc19ibGFuY2FzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuYmtnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmtnX21vYmlsZTEucG5nXCIpO1xuICB9XG5cbiAgI2tleWJvYXJkIHtcbiAgICB0b3A6IDE0NXB4O1xuICAgIGhlaWdodDogMTBlbTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgI3RlY2xhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiA2NXB4O1xuICAgIHdpZHRoOiAyMjVweDtcbiAgfVxuXG4gIC53aGl0ZXMge1xuICAgIHRvcDogLTQ0cHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWluLXdpZHRoOiA5JTtcbiAgfVxuXG4gIC5ibGFja3Mge1xuICAgIHdpZHRoOiA4JTtcbiAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxuXG4gIC5sZXRyYXNfYmxhbmNhcyB7XG4gICAgdG9wOiA2NXB4O1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxuXG4gIC5sZXRyYXNfbmVncmFzIHtcbiAgICB0b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgfVxuXG4gIC5ub3RhcyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XG4gICN0ZWNsYXMge1xuICAgIHdpZHRoOiAyNDRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkge1xuICAuYmtnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmtnX21vYmlsZTEucG5nXCIpO1xuICB9XG5cbiAgI2tleWJvYXJkIHtcbiAgICBoZWlnaHQ6IDExZW07XG4gIH1cblxuICAjdGVjbGFzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NnB4O1xuICAgIGxlZnQ6IDY1cHg7XG4gICAgd2lkdGg6IDI5NHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5ia2cge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90YWJsZXRfYmtnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gIH1cblxuICAja2V5Ym9hcmQge1xuICAgIHRvcDogMTA1cHg7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIG1pbi13aWR0aDogMzk2cHg7XG4gIH1cblxuICAud2hpdGVzIHtcbiAgICB0b3A6IC01M3B4O1xuICAgIG1pbi1oZWlnaHQ6IDEyMXB4O1xuICB9XG5cbiAgLmJsYWNrcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUuNiU7XG4gICAgbWluLWhlaWdodDogNTVweDtcbiAgfVxuXG4gIC5sZXRyYXNfYmxhbmNhcyB7XG4gICAgdG9wOiA3MnB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAubGV0cmFzX25lZ3JhcyB7XG4gICAgdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5ia2cge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDU1NXB4O1xuICB9XG5cbiAgI2tleWJvYXJkIHtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGhlaWdodDogMTNlbTtcbiAgfVxuXG4gICN0ZWNsYXMge1xuICAgIHRvcDogNzZweDtcbiAgICBsZWZ0OiA3OHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuXG4gIC5ub3RhcyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJrZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpO1xuICB9XG5cbiAgI2tleWJvYXJkIHtcbiAgICBoZWlnaHQ6IDE4ZW07XG4gIH1cblxuICAjdGVjbGFzIHtcbiAgICB0b3A6IDkzcHg7XG4gICAgbGVmdDogOTNweDtcbiAgICB3aWR0aDogNDEzcHg7XG4gIH1cblxuICAud2hpdGVzIHtcbiAgICB0b3A6IC03NnB4O1xuICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xuICAgIG1pbi13aWR0aDogOS4yJTtcbiAgfVxuXG4gIC5ub3RhcyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5sZXRyYXNfYmxhbmNhcyB7XG4gICAgdG9wOiAxMjVweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cbiAgLmJsYWNrcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUuNCU7XG4gICAgbWluLWhlaWdodDogNzhweDtcbiAgfVxuXG4gIC5sZXRyYXNfbmVncmFzIHtcbiAgICB0b3A6IDIxcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zYXNzL3RhcEFuaW1hdGlvbic7XHJcblxyXG4vLyBtZWRpYSBxdWVyeVxyXG4kYnJlYWtwb2ludC1tb2JpbGVYUzogMzIwcHg7XHJcbiRicmVha3BvaW50LW1vYmlsZVM6IDM3NXB4O1xyXG4kYnJlYWtwb2ludC1tb2JpbGVNOiA0MjBweDtcclxuJGJyZWFrcG9pbnQtbW9iaWxlTDogNjAwcHg7XHJcbiRicmVha3BvaW50LXRhYmxldDogNjQwcHg7XHJcbiRicmVha3BvaW50LWxhcHRvcDogMTAyNHB4O1xyXG4kYnJlYWtwb2ludC1sYXB0b3BMOiAxNDQwcHg7XHJcbiRicmVha3BvaW50LWxhcHRvcFhMOiAyNTYwcHg7XHJcblxyXG4uYmtne1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNrZXlib2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9waWFub19yb3NhLnBuZycpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jdGVjbGFze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJsYWNrc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1wdXJwbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJsYWNrczpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0ZGIDsgXHJcbn1cclxuXHJcbi5ibGFja3M6aG92ZXIgLmxldHJhc19uZWdyYXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxldHJhc19uZWdyYXN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHRvcDogNDVweDtcclxufVxyXG5cclxuLndoaXRlc3tcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aGl0ZXM6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0NGRjtcclxuICBjb2xvcjogIzAwMzM5OTtcclxufVxyXG5cclxuLndoaXRlczpob3ZlciAubGV0cmFzX2JsYW5jYXN7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCAjNTA4QUQzO1xyXG59XHJcblxyXG4ubGV0cmFzX2JsYW5jYXN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHRvcDogMTU4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlWFMpIHtcclxuICAuYmtne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmtnX21vYmlsZTEucG5nJyk7XHJcbiAgfVxyXG5cclxuICAja2V5Ym9hcmR7XHJcbiAgICB0b3A6IDE0NXB4O1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4gICN0ZWNsYXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuXHJcbiAgLndoaXRlc3tcclxuICAgIHRvcDogLTQ0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogOSU7XHJcbiAgfVxyXG4gIC5ibGFja3N7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICAubGV0cmFzX2JsYW5jYXN7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG4gIC5sZXRyYXNfbmVncmFze1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuICB9XHJcblxyXG4gIC5ub3Rhc3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1vYmlsZVMpIHtcclxuICAjdGVjbGFze1xyXG4gICAgd2lkdGg6IDI0NHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlTSkge1xyXG4gIC5ia2d7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9ia2dfbW9iaWxlMS5wbmcnKTtcclxuICB9XHJcblxyXG4gICNrZXlib2FyZHtcclxuICAgIGhlaWdodDogMTFlbTsgXHJcbiAgfVxyXG5cclxuICAjdGVjbGFze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2NnB4O1xyXG4gICAgbGVmdDogNjVweDtcclxuICAgIHdpZHRoOiAyOTRweDtcclxuICB9XHJcblxyXG4gIC8vIC53aGl0ZXN7XHJcbiAgLy8gICB0b3A6IC02NnB4O1xyXG4gIC8vICAgd2lkdGg6IDMwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDE0MHB4O1xyXG4gIC8vIH1cclxuICAvLyAuYmxhY2tze1xyXG4gIC8vICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgLy8gICB3aWR0aDogMjJweDtcclxuICAvLyAgIGhlaWdodDogNjlweDtcclxuICAvLyB9XHJcbiAgLy8gLmxldHJhc19ibGFuY2Fze1xyXG4gIC8vICAgdG9wOiAxMDlweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAvLyB9XHJcbiAgLy8gLmxldHJhc19uZWdyYXN7XHJcbiAgLy8gICB0b3A6IDQ0cHg7XHJcbiAgLy8gICBmb250LXNpemU6IHNtYWxsO1xyXG4gIC8vIH1cclxuICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIHtcclxuICAuYmtne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdGFibGV0X2JrZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gIH1cclxuICAja2V5Ym9hcmR7XHJcbiAgICB0b3A6IDEwNXB4O1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgbWluLXdpZHRoOiAzOTZweDtcclxuICB9XHJcblxyXG4gIC8vICN0ZWNsYXN7XHJcbiAgLy8gICB0b3A6IDY2cHg7XHJcbiAgLy8gICBsZWZ0OiA1NHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLndoaXRlc3tcclxuICAgIHRvcDogLTUzcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjFweDtcclxuICB9XHJcbiAgXHJcbiAgLmJsYWNrc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1LjYlO1xyXG4gICAgbWluLWhlaWdodDogNTVweDtcclxuICB9XHJcbiAgLmxldHJhc19ibGFuY2Fze1xyXG4gICAgdG9wOiA3MnB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbiAgLmxldHJhc19uZWdyYXN7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sYXB0b3ApIHtcclxuICAuYmtne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTVweDtcclxuICB9XHJcblxyXG4gICNrZXlib2FyZHtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEzZW07XHJcbiAgfVxyXG5cclxuICAjdGVjbGFze1xyXG4gICAgdG9wOiA3NnB4O1xyXG4gICAgbGVmdDogNzhweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcblxyXG4gIC5ub3Rhc3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sYXB0b3BMKSB7XHJcbiAgLmJrZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgfVxyXG5cclxuICAja2V5Ym9hcmR7XHJcbiAgICBoZWlnaHQ6IDE4ZW07XHJcbiAgfVxyXG5cclxuICAjdGVjbGFze1xyXG4gICAgdG9wOiA5M3B4O1xyXG4gICAgbGVmdDogOTNweDtcclxuICAgIHdpZHRoOiA0MTNweDtcclxuICB9XHJcblxyXG4gIC53aGl0ZXN7XHJcbiAgICB0b3A6IC03NnB4O1xyXG4gICAgbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkuMiU7XHJcbiAgfVxyXG5cclxuICAubm90YXN7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLmxldHJhc19ibGFuY2Fze1xyXG4gICAgdG9wOiAxMjVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuYmxhY2tze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUuNCU7XHJcbiAgICBtaW4taGVpZ2h0OiA3OHB4O1xyXG4gIH1cclxuXHJcbiAgLmxldHJhc19uZWdyYXN7XHJcbiAgICB0b3A6IDIxcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PianoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-piano',
                templateUrl: './piano.component.html',
                styleUrls: ['./piano.component.scss']
            }]
    }], function () { return [{ type: src_app_services_audio_tone_service__WEBPACK_IMPORTED_MODULE_1__["AudiotoneService"] }]; }, { keyDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['keyboard']
        }] }); })();


/***/ }),

/***/ "./src/app/models/pianoTones.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/pianoTones.model.ts ***!
  \********************************************/
/*! exports provided: Tones, Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tones", function() { return Tones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
class Tones {
    constructor() {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
    }
}
class Keyboard {
    constructor() {
        this.keyboardCustom = {
            65: 'c,4,white,A,1, Do',
            83: 'd,4,white,S,2, Re',
            68: 'e,4,white,D,3, Mi',
            70: 'f,4,white,F,4, Fa',
            71: 'g,4,white,G,5, Sol',
            72: 'a,4,white,H,6, La',
            74: 'b,4,white,J,7, Si',
            75: 'c,5,white,K,8, Do',
            76: 'd,5,white,L,9, Re',
            192: 'e,5,white,Ñ,10, Mi',
            /* Negras  */
            87: 'c#,4,black,W,1, do#',
            69: 'd#,4,black,E,2, re#',
            84: 'f#,4,black,T,3, mi#',
            89: 'g#,4,black,Y,4, fa#',
            85: 'a#,4,black,U,5, sol#',
            79: 'c#,5,black,O,6, la#',
            80: 'd#,5,black,P,7, si#'
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
            39: 'B,1',
        };
    }
}


/***/ }),

/***/ "./src/app/services/audio-tone.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/audio-tone.service.ts ***!
  \************************************************/
/*! exports provided: AudiotoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiotoneService", function() { return AudiotoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pianoTones.model */ "./src/app/models/pianoTones.model.ts");



class AudiotoneService {
    constructor() {
        this.context = new (AudioContext || webkitAudioContext)();
        this.attack = 1;
        this.release = 100;
        this.volume = 1;
        this.type = 'triangle';
        this.map = new _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__["Tones"]().map;
        this.keyboard = new _models_pianoTones_model__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]().keyboardCustom;
    }
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
        }
        else if (typeof freqOrNote === 'string') {
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
        switch (key.id) {
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
AudiotoneService.ɵfac = function AudiotoneService_Factory(t) { return new (t || AudiotoneService)(); };
AudiotoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudiotoneService, factory: AudiotoneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudiotoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lovel\Desktop\Mariel\proyectos practica\proyecto piano\pianokeyboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
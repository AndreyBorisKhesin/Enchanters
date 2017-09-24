webpackJsonp([4],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_business__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_social__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, userProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.auth = auth;
        this.getUserInfo();
    }
    WelcomePage.prototype.getUserInfo = function () {
        this.userName = this.userProvider.getUserName();
        this.userEmail = this.userProvider.getUserEmail();
        this.userPosition = this.userProvider.getUserPosition();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToLearningPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__business_business__["a" /* BusinessPage */]);
    };
    WelcomePage.prototype.goToSocialPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__social_social__["a" /* SocialPage */]);
    };
    WelcomePage.prototype.goToCalendar = function (filter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */], { filter: filter });
    };
    WelcomePage.prototype.signOut = function () {
        this.auth.auth.signOut();
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome to ENT! </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-card>\n    <img src="" />\n    <div card-title>ENT</div>\n    <div card-subtitle>Education Networking Tree</div>\n  </ion-card> -->\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <!-- <img src="img/marty-avatar.png"> -->\n      </ion-avatar>\n      <h2>{{userName}}</h2>\n      <p>{{userPosition}}</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left secondary small>\n        <ion-icon name="checkmark-circle"></ion-icon>\n        <div>12 Arbies</div>\n      </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left danger small (click)="goToCalendar(\'myQuestions\')">\n        <ion-icon name="help-circle"></ion-icon>\n        <div>4 Questions</div>\n      </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <button ion-button block (click)="goToLearningPage()">Learning</button>\n  <button ion-button block (click)="goToSocialPage()">Social</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    return QuestionPage;
}());
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>question</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialPage = (function () {
    function SocialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SocialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialPage');
    };
    return SocialPage;
}());
SocialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-social',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/social/social.html"*/'<!--\n  Generated template for the SocialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>social</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/social/social.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SocialPage);

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/business/business.module": [
		413,
		3
	],
	"../pages/calendar/calendar.module": [
		412,
		2
	],
	"../pages/question/question.module": [
		411,
		1
	],
	"../pages/social/social.module": [
		414,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LeafPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeafPage = (function () {
    function LeafPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topic = this.navParams.get('topic');
    }
    LeafPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeafPage');
    };
    LeafPage.prototype.learn = function (topic) {
        var filter = "learn-" + topic;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */], { filter: filter });
    };
    LeafPage.prototype.ask = function () {
    };
    LeafPage.prototype.mentor = function (topic) {
        var filter = "mentor-" + topic;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */], { filter: filter });
    };
    LeafPage.prototype.goToQuestion = function (filter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
    };
    return LeafPage;
}());
LeafPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-leaf',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/leaf/leaf.html"*/'<!--\n  Generated template for the LeafPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Topic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>{{topic}}</h1>\n  <p>Descriptions of this topic</p>\n  <p>More Descriptions</p>\n  <p>More Descriptions</p>\n  <button ion-button primary (click)="learn(topic)">Learn</button>\n  <button ion-button primary (click)="ask()">Ask</button>\n  <button ion-button primary (click)="mentor(topic)">Mentor</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/leaf/leaf.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LeafPage);

//# sourceMappingURL=leaf.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_business__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TechnologyPage = (function () {
    function TechnologyPage(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.skills = this.firebaseProvider.getTechSkills();
    }
    TechnologyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechnologyPage');
    };
    TechnologyPage.prototype.goToBusiness = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__business_business__["a" /* BusinessPage */]);
    };
    return TechnologyPage;
}());
TechnologyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-technology',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/technology/technology.html"*/'<!--\n  Generated template for the TechnologyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Learning\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p>Welcome to the technology page!</p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>This column will take 12 columns</ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button class=\'bus-button\' color=\'light\' (click)=\'goToBusiness()\'>Business</button>\n  <button ion-button class=\'tech-button\' color=\'light\'>Technology</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/technology/technology.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], TechnologyPage);

//# sourceMappingURL=technology.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, afAuth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.loginData = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
            .then(function (auth) {
            // Do custom things with auth
        })
            .catch(function (err) {
            // Handle error
            var toast = _this.toastCtrl.create({
                message: err.message,
                duration: 1000
            });
            toast.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], { email: this.loginData.email });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>E-Mail</ion-label>\n      <ion-input type="email" [(ngModel)]="loginData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="loginData.password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button full ion-button (click)="login()">Login</button>\n  <a href="#" (click)="signup()">Signup for an Account</a>\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, alertCtrl, afAuth, userProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.userProvider = userProvider;
        this.firebaseProvider = firebaseProvider;
        this.signupData = {
            name: '',
            email: '',
            password: '',
            passwordRetyped: ''
        };
        this.signupData.email = this.navParams.get('email');
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.signupData.password !== this.signupData.passwordRetyped) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'Your password and your re-entered password does not match each other.',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
            .then(function (auth) {
            // Could do something with the Auth-Response
            _this.userProvider.setUserName(_this.signupData.name);
            _this.firebaseProvider.addNewUser(_this.signupData.name);
            _this.firebaseProvider.addNewEmail(_this.signupData.name, _this.signupData.email);
        })
            .catch(function (err) {
            // Handle error
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="name" [(ngModel)]="signupData.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>E-Mail</ion-label>\n      <ion-input type="email" [(ngModel)]="signupData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signupData.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Re-Enter Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signupData.passwordRetyped"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button full ion-button (click)="signup()">Signup</button> <br/>\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_social_social__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_business_business__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_technology_technology__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_leaf_leaf__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_question_question__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_firebase__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_user__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyBngzUa5bdDC3sh9L_x9cD62lSQneCQRKM",
    authDomain: "enchanters-74480.firebaseapp.com",
    databaseURL: "https://enchanters-74480.firebaseio.com",
    projectId: "enchanters-74480",
    storageBucket: "enchanters-74480.appspot.com",
    messagingSenderId: "661519086631"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_business_business__["a" /* BusinessPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_technology_technology__["a" /* TechnologyPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_leaf_leaf__["a" /* LeafPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/business/business.module#BusinessPageModule', name: 'BusinessPage', segment: 'business', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_social_social__["a" /* SocialPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_business_business__["a" /* BusinessPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_technology_technology__["a" /* TechnologyPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_leaf_leaf__["a" /* LeafPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["a" /* AngularFireAuth */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, afAuth, statusBar, splashscreen) {
        var _this = this;
        this.afAuth = afAuth;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth)
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            else
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashscreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, firebaseProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.userProvider = userProvider;
        this.newName = '';
        this.names = this.firebaseProvider.getNames();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log(this.user);
    };
    HomePage.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newName);
        this.userProvider.setUserName(this.newName);
        this.userProvider.setUserPosition("Data Analyst Intern");
    };
    HomePage.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id);
    };
    HomePage.prototype.goToWelcomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/home/home.html"*/'\n<ion-content padding>\n	<button ion-button block (click)="goToWelcomePage()">Go to Welcome Page</button>\n	<ion-row>\n		<ion-col col-9>\n			<ion-item>\n				<ion-input type="text" [(ngModel)]="newName" placeholder="Name"></ion-input>\n			</ion-item>\n		</ion-col>\n		<ion-col>\n			<button ion-button (click)="addItem()">Add!</button>\n		</ion-col>\n	</ion-row>\n\n	<ion-list>\n		<ion-item-sliding *ngFor="let item of names | async">\n			<ion-item>\n				{{ item.$value }}\n			</ion-item>\n			<ion-item-options side="right">\n				<button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getNames = function () {
        return this.afd.list('/names/');
    };
    FirebaseProvider.prototype.addItem = function (newName) {
        this.afd.list('/names/').push(newName);
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        this.afd.list('/names/').remove(id);
    };
    FirebaseProvider.prototype.getBusinessSkills = function () {
        return this.afd.list('/skills/business/');
    };
    FirebaseProvider.prototype.getTechSkills = function () {
        return this.afd.list('/skills/technology/');
    };
    FirebaseProvider.prototype.addNewUser = function (newUserName) {
        var str1 = new String("/users/");
        var str2 = str1.concat(newUserName);
        var path = str2.concat("/name/");
        this.afd.list(path).push(newUserName);
    };
    FirebaseProvider.prototype.addNewEmail = function (newUserName, newUserEmail) {
        var str1 = new String("/users/");
        var str2 = str1.concat(newUserName);
        var path = str2.concat("/email/");
        this.afd.list(path).push(newUserEmail);
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.name = "";
        this.email = "";
        this.password = "";
        this.skills = new Map();
    }
    UserProvider.prototype.setUserName = function (value) {
        this.name = value;
    };
    UserProvider.prototype.getUserName = function () {
        return this.name;
    };
    UserProvider.prototype.getUserEmail = function () {
        return this.email;
    };
    UserProvider.prototype.setUserEmail = function (value) {
        this.email = value;
    };
    UserProvider.prototype.getUserPosition = function () {
        return this.position;
    };
    UserProvider.prototype.setUserPosition = function (value) {
        this.position = value;
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filter = this.navParams.get('filter');
        console.log("In calendar, filter = " + this.filter);
        switch (this.filter) {
            case "myQuestions":
                this.title = "My Questions";
                // This is going to be difficult
                break;
            case "mentor-Accounting & Acturial Science":
                this.title = "Accounting & Acturial Science Questions";
                this.topicId = 0;
                break;
            case "mentor-Client Services":
                this.title = "Client Services Questions";
                this.topicId = 1;
                break;
            case "mentor-Loan Management & Insurance":
                this.title = "Loan & Insurance Questions";
                this.topicId = 2;
                break;
            case "mentor-Marketing":
                this.title = "Marketing Questions";
                this.topicId = 3;
                break;
            case "mentor-Public Relations":
                this.title = "Public Relations Questions";
                this.topicId = 4;
                break;
            case "mentor-Sales & Operations":
                this.title = "Sales & Operations Questions";
                this.topicId = 5;
                break;
            case "mentor-Risk Management":
                this.title = "Risk Management Questions";
                this.topicId = 6;
                break;
            case "mentor-Trading & Capital Markets":
                this.title = "Trading & Capital Markets Questions";
                this.topicId = 7;
                break;
            case "mentor-Wealth Management":
                this.title = "Wealth Management Questions";
                this.topicId = 8;
                break;
            case "learn-Accounting & Acturial Science":
                this.title = "Accounting & Acturial Science Help";
                this.topicId = 0;
                break;
            case "learn-Client Services":
                this.title = "Client Services Help";
                this.topicId = 1;
                break;
            case "learn-Loan Management & Insurance":
                this.title = "Loan & Insurance Help";
                this.topicId = 2;
                break;
            case "learn-Marketing":
                this.title = "Marketing Help";
                this.topicId = 3;
                break;
            case "learn-Public Relations":
                this.title = "Public Relations Help";
                this.topicId = 4;
                break;
            case "learn-Sales & Operations":
                this.title = "Sales & Operations Help";
                this.topicId = 5;
                break;
            case "learn-Risk Management":
                this.title = "Risk Management Help";
                this.topicId = 6;
                break;
            case "learn-Trading & Capital Markets":
                this.title = "Trading & Capital Markets Help";
                this.topicId = 7;
                break;
            case "learn-Wealth Management":
                this.title = "Wealth Management Help";
                this.topicId = 8;
                break;
            default:
                this.title = "Default Calendar";
        }
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaf_leaf__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__technology_technology__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusinessPage = (function () {
    function BusinessPage(navCtrl, firebaseProvider, navParams) {
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.navParams = navParams;
        this.skills = this.firebaseProvider.getBusinessSkills();
    }
    BusinessPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter I'm in business");
    };
    BusinessPage.prototype.goToLeaf = function (topic) {
        console.log("Clicked in business: " + topic);
        // this.navCtrl.push(LeafPage, {topic: "Wealth Management"});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__leaf_leaf__["a" /* LeafPage */], { topic: topic });
    };
    BusinessPage.prototype.goToTech = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__technology_technology__["a" /* TechnologyPage */]);
    };
    return BusinessPage;
}());
BusinessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])({}),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-business',template:/*ion-inline-start:"/Users/Chrsitine/Desktop/Enchanters/src/pages/business/business.html"*/'<!--\n	Generated template for the BusinessPage page.\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n	Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Learning\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<h6>Commercial Banking</h6>\n		<ion-row>\n			<ion-col col-4 (click)="goToLeaf(\'Accounting & Actuarial Science\')"><img class="tile" src="img/Accounting.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Client Services\')"><img class="tile" src="img/Client.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Loan Management & Insurance\')"><img class="tile" src="img/Loan and Insurance.jpg"></ion-col>\n		</ion-row>\n		<h6>Communications</h6>\n		<ion-row>\n			<ion-col col-4 (click)="goToLeaf(\'Marketing\')"><img class="tile" src="img/Marketing.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Public Relations\')"><img class="tile" src="img/PR.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Sales & Operations\')"><img class="tile" src="img/Sales and Op.jpg"></ion-col>\n		</ion-row>\n		<h6>Investment Banking</h6>\n		<ion-row>\n			<ion-col col-4 (click)="goToLeaf(\'Risk Management\')"><img class="tile" src="img/Risk.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Trading & Capital Markets\')"><img class="tile" src="img/Trading and Cap.jpg"></ion-col>\n			<ion-col col-4 (click)="goToLeaf(\'Wealth Management\')"><img class="tile" src="img/Wealth.jpg"></ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n\n<ion-footer>\n	<button ion-button class=\'bus-button\' color=\'light\'>Business</button>\n	<button ion-button class=\'tech-button\' color=\'light\' (click)=\'goToTech()\'>Technology</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/Chrsitine/Desktop/Enchanters/src/pages/business/business.html"*/,
        styleUrls: ['/pages/business/business.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], BusinessPage);

//# sourceMappingURL=business.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--Slide 1 - Splash Screen -->\r\n<!-- <section class=\"slide1\" *ngIf=\"hideMe\">\r\n\t<owl-carousel-o [options]=\"onBoardingSlider\">\r\n    <ng-template carouselSlide>\r\n      <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n        <img src=\"./../assets/newassets/slide1.jpg\" class=\"slide1Img\" alt=\"Dermafique Skin Analysis\">\r\n      </picture>\r\n      <div class=\"\"></div>\r\n    </ng-template>\r\n    <ng-template carouselSlide>\r\n      New Slide\r\n    </ng-template>\r\n\t</owl-carousel-o>\r\n</section> -->\r\n\r\n<!--Slide 2 - Accept & Continue -->\r\n<!-- <section class=\"slide2\" *ngIf=\"showMe\">\r\n    <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n        <img src=\"./../assets/newassets/slide1.png\" class=\"logo\" alt=\"Dermafique\">\r\n    </picture>\r\n      <h1>Dermafique Skin Analysis</h1>\r\n      <p>Artificial Intelligence driven diagnosis technology that analyses, detects and ranks your skin against <strong>the 7 pivotal parameters of skin physiology.</strong></p>\r\n    <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"./../assets/slide2-skinconcerns.jpg\">\r\n        <source media=\"(min-width:961px)\" srcset=\"./../assets/slide2-skinconcerns.jpg\">\r\n        <img src=\"./../assets/slide2-skinconcerns.jpg\" class=\"w100\" alt=\"Skin Concerns\">\r\n    </picture>\r\n\r\n    <p>\r\n        <strong>Co-created with expert advice from India’s leading dermatologists</strong>\r\n    </p>\r\n\r\n    <form>\r\n        <label>\r\n            <input type=\"checkbox\" (change)=\"PolicyAgree($event)\" value=\"Please tick here to agree with our Privacy Policy and  Terms &  Conditions\" />\r\n            Please tick here to agree with our Privacy Policy and  Terms &  Conditions\r\n        </label>\r\n        <input type=\"submit\" value=\"Start the Test\" class=\"btnStyle\" (click)=\"showSlide3()\">\r\n    </form>\r\n</section> -->\r\n\r\n<!-- onboarding -->\r\n<section class=\"onboarding\" [class.lastSlide]=\"onboardinActiveSlide === 2\" *ngIf=\"showMe\">\r\n  <owl-carousel-o [options]=\"onBoardingSlider\" class=\"onboardingOwlCarousel\" #owlOnboarding (changed)=\"getOnboardingData($event)\">\r\n    <ng-template carouselSlide [id]=\"0\">\r\n      <div class=\"onboardSlide onboardingSlide1\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/slide1.png\">\r\n          <img src=\"./../assets/newassets/slide1.png\" class=\"w100\" alt=\"slide1\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"./../assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red\">Hi, Welcome to</h1>\r\n            <picture class=\"my-10\">\r\n              <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/smartdermaconsult.png\">\r\n              <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/smartdermaconsult.png\">\r\n              <img src=\"./../assets/newassets/smartdermaconsult.png\" class=\"w100\" alt=\"smartdermaconsult\">\r\n            </picture>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">For your Artificial Intelligence powered Personalized Skin Health Analysis</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template carouselSlide [id]=\"1\">\r\n      <div class=\"onboardSlide onboardingSlide2\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/slide2.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/slide2.png\">\r\n          <img src=\"./../assets/newassets/slide2.png\" class=\"w100\" alt=\"slide2\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"./../assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red mb-10\">Share your Selfie !</h1>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">Just upload your image and let Smart Dermaconsult’s\r\n              Artificial Intelligence powered Technology take care\r\n              of the rest to generate your personalized Skin Health Analysis on 7 Skin Health Parameters and overall Skin Health Score\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template carouselSlide [id]=\"2\">\r\n      <div class=\"onboardSlide onboardingSlide3\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/slide3.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/slide3.png\">\r\n          <img src=\"./../assets/newassets/slide3.png\" class=\"w100\" alt=\"slide3\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"./../assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red mb-10\">Smart DermaConsult’s <br />\r\n              AI Powered Technology</h1>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">helps you understand your skin’s unique needs\r\n              & shares personalized skin care recommendations \r\n              for Healthy Skin !</p>\r\n            <form class=\"d-flex df-dir-c\">\r\n              <label class=\"termsprivacy textcolor\">\r\n                  <input type=\"checkbox\" (change)=\"PolicyAgree($event)\" value=\"I agree with your terms and privacy\" />\r\n                  <span></span>\r\n                  I agree with your <a>terms and privacy</a>\r\n              </label>\r\n              <input type=\"submit\" value=\"Let's start\" class=\"btnStyle\" (click)=\"showSlide3()\">\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </owl-carousel-o>\r\n  <ng-container *ngIf=\"onboardinActiveSlide !== 2\">\r\n\t  <a class=\"onboardingSkip\" (click)=\"owlOnboarding.to('2')\">SKIP</a>\r\n\t</ng-container>\r\n</section>\r\n\r\n<!--Slide 3 - Select Gender-->\r\n<section class=\"slide3\" [class.show]=\"hideUntilCalled\" *ngIf=\"hideUntilCalled\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"./../assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1>Select Gender</h1>\r\n      <div>Structural differences are noticed <br />\r\n        between men's and women's skin.</div>\r\n    </div>\r\n  </div>\r\n\t<div class=\"genderCarousel\">\r\n\t\t<owl-carousel-o [options]=\"genderSlider\" (changed)=\"getGenderData($event)\">\r\n\t\t\t<ng-template carouselSlide id=\"female\">\r\n\t\t\t\t<!-- <input type=\"radio\" id=\"female\" [(ngModel)]=\"genderSelected\" name=\"gender\" value=\"female\" [checked]=\"true\" (change)=\"ChangeGender($event)\"> -->\r\n\t\t\t\t<label for=\"female\">\r\n\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/Female-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/Female-image.png\">\r\n\t\t\t\t\t\t<img src=\"./../assets/newassets/Female-image.png\" class=\"w100\" alt=\"womenface\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>  \r\n\t\t\t<ng-template carouselSlide id=\"male\">\r\n\t\t\t\t<!-- <input type=\"radio\" id=\"male\" [(ngModel)]=\"genderSelected\" name=\"gender\" value=\"male\" (change)=\"ChangeGender($event)\"> -->\r\n\t\t\t\t<label for=\"male\">\r\n\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<img src=\"./../assets/newassets/Male-image.png\" class=\"w100\" alt=\"Male\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>\r\n\t  </owl-carousel-o>\r\n\t</div>\r\n  <div class=\"bottomcurve\">\r\n      <img src=\"./../assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\" class=\"selected\">\r\n                    <strong>01</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>02</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>03</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n          <a href=\"\" (click)=\"showSlide4()\" class=\"onboardingSkip\">\r\n            Next →\r\n            <!-- <img src=\"../assets/next.png\"> -->\r\n          </a>\r\n          <div class=\"clear\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Slide 4 - Select Age -->\r\n<section class=\"slide3 slide4\" [class.show]=\"slide4Show\" *ngIf=\"slide4Show\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"./../assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1>How old are you?</h1>\r\n      <div>Did you know the signs of ageing begin to<br/> show as early as the age of 25\r\n      </div>\r\n    </div>\r\n  </div>\r\n\t<div class=\"genderCarousel\">\r\n\t\t<owl-carousel-o [options]=\"ageSlider\" (changed)=\"getAgeData($event)\">\r\n\t\t\t<ng-template carouselSlide *ngFor=\"let age of defaultAgeArray\" [id]=\"age\">\r\n\t\t\t\t<label for=\"{{age}}\">\r\n          <span>{{age}}</span>\r\n          <picture style=\"visibility: hidden;\">\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<img src=\"./../assets/newassets/Male-image.png\" class=\"w100\" alt=\"Male\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>\r\n\t  </owl-carousel-o>\r\n\t</div>\r\n  <div class=\"bottomcurve\">\r\n      <img src=\"./../assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>01</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>02</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" >\r\n                    <strong>03</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n          <a href=\"\" (click)=\"showSlide5()\" class=\"onboardingSkip\">\r\n            Next →\r\n            <!-- <img src=\"../assets/next.png\"> -->\r\n          </a>\r\n          <div class=\"clear\"></div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Slide 4 - Select Age -->\r\n<!-- <section class=\"slide4\" *ngIf=\"slide4Show\">\r\n    <h1>Enter your Age</h1>\r\n    <div class=\"ageSelector\">\r\n\t\t\t<div class=\"ageSelectorBx\">\r\n\t\t\t  <button class=\"btnStyle\" (click)=\"minus()\"><span>-</span></button>\r\n\t\t\t  <input type=\"text\" class=\"form-control ageTxtBig\" [(ngModel)]=\"inputnumber\" disabled>\r\n\t\t\t  <button class=\"btnStyle\" (click)=\"plus()\"><span>+</span></button>\r\n\t\t\t</div>\r\n\r\n        <h3>Derma Truth</h3>\r\n        <p>Structural differences are noticed between\r\n            men’s skin and women’s skin.</p>\r\n    </div>\r\n    <div class=\"steps1to3\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>1</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>2</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>3</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n\t\t\t<a href=\"javascript:;\" (click)=\"showSlide3()\" class=\"btnNext toLeft\"><img src=\"../assets/prev.png\"> Previous</a>\r\n        \t<a href=\"javascript:;\" (click)=\"showSlide5()\" class=\"btnNext toRight\">Next <img src=\"../assets/next.png\"></a>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n    </div>\r\n</section> -->\r\n\r\n<!--Slide 5 - Select Skin Type -->\r\n<section class=\"slide3 slide5\" [class.show]=\"slide5Show\" *ngIf=\"slide5Show\">\r\n    <div class=\"topcurve\">\r\n      <img src=\"./../assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n      <div class=\"topcurve-container\">\r\n        <h1>Which skin type<br /> describes you the best? </h1>\r\n        <div>Did you know the signs of ageing begin to<br/> show as early as the age of 25\r\n        </div>\r\n      </div>\r\n    </div>\r\n\t\t<div class=\"genderCarousel skinSlider\">\r\n\t\t\t<div *ngIf=\"GetSkinTypes\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<owl-carousel-o [options]=\"skinSlider\" (changed)=\"getSkinData($event)\">\r\n\t\t\t\t\t\t<ng-template carouselSlide *ngFor=\"let type of GetSkinTypes\" [id]=\"type.id\">\r\n\t\t\t\t\t\t\t<div class=\"{{type.title}}\">\r\n\t\t\t\t\t\t\t\t<!-- <input type=\"radio\" id=\"{{type.id}}\" [(ngModel)]=\"skinSelected\" value=\"{{type.title}}\" #tradio1 name=\"skinType\" value=\"oily\" (change)=\"Change($event, tradio1)\"> -->\r\n\t\t\t\t\t\t\t\t<label for=\"{{type.id}}\">\r\n\t\t\t\t\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t\t\t\t\t<source media=\"(max-width:200px)\" srcset=\"{{type.image_not_selected}}\">\r\n\t\t\t\t\t\t\t\t\t\t<source media=\"(min-width:200px)\" srcset=\"{{type.image_not_selected}}\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{type.image_not_selected}}\" class=\"w100\" alt=\"{{type.title}}\">\r\n\t\t\t\t\t\t\t\t\t</picture>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t  </owl-carousel-o>\r\n\t\t\t</div>\r\n\t\t</div>   \r\n  </div>\r\n    \r\n  <div class=\"bottomcurve\">\r\n    <img src=\"./../assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n    <div class=\"bottomcurve-container\">\r\n      <ul>\r\n        <li>\r\n            <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                <strong>1</strong>\r\n                <span>Gender</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"javascript:;\" (click)=\"showSlide4()\">\r\n                <strong>2</strong>\r\n                <span>Age</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"javascript:;\" class=\"selected\">\r\n                <strong>3</strong>\r\n                <span>Skin Type</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n      <div class=\"nextPrevBx mt-20\">\r\n        <a href=\"\" (click)=\"showSlide5()\" class=\"onboardingSkip\">\r\n          ← Previous \r\n        </a>\r\n        <a href=\"\" (click)=\"showSlide6()\" class=\"onboardingSkip\">\r\n          Next →\r\n        </a>\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n    </div>\r\n</div>\r\n    <!-- <div class=\"steps1to3\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>1</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide4()\">\r\n                    <strong>2</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>3</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n\t\t\t<a href=\"javascript:;\" (click)=\"showSlide4()\" class=\"btnNext toLeft\"><img src=\"../assets/prev.png\"> Previous</a>\r\n        \t<a href=\"javascript:;\" (click)=\"showSlide6()\" class=\"btnNext toRight\">Next <img src=\"../assets/next.png\"></a>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n    </div> -->\r\n</section>\r\n\r\n<!--Section 6 - Upload/Click Image And Analysing Screen -->\r\n<section class=\"slide3 slide6\" [class.show]=\"slide6Show\" *ngIf=\"slide6Show\">\r\n\t<video id=\"analysing\" width=\"100%\" height=\"100%\" style=\"display: none;\" autoplay muted loop>\r\n    <source src=\"./../assets/newassets/analysing-loader.mp4\" type=\"video/mp4\">\r\n\t</video>\r\n  <!-- <source src=\"https://high-octane.in/analysing-loader.mp4\" type=\"video/mp4\"> -->\r\n\t<div class=\"text-center\">\r\n    <p class=\"toptitle\">It's time for your</p>\r\n\t\t<h1>No Makeup Selfie!</h1>\r\n    <div class=\"webcam\">\r\n      <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"./../assets/newassets/facescan.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"./../assets/newassets/facescan.png\">\r\n        <img src=\"./../assets/newassets/facescan.png\" class=\"video-overlay\" alt=\"overlay\">\r\n      </picture>\r\n      <webcam class=\"webcamUnit\" [height]=\"height\" [trigger]=\"triggerObservable\" [allowCameraSwitch]=\"allowCameraSwitch\"\r\n        [videoOptions]=\"videoOptions\" [switchCamera]=\"nextWebcamObservable\" (imageCapture)=\"handleImage($event)\"\r\n        [imageQuality]=\"1\" (initError)=\"handleInitError($event)\">\r\n      </webcam>\r\n    </div>\r\n    <div class=\"bottomcurve slide6bottomcurve\">\r\n      <img src=\"./../assets/newassets/uploadcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <div class=\"error\" style=\"color: red;\">{{ code }} - {{message}}</div>\r\n        <p class=\"textcolor fs-16 lh-22\">Click the picture in natural light and<br />\r\n          keep a neutral expression</p>\r\n        <div class=\"imageCta\">\r\n          <a href=\"javascript:;\"><img src=\"../assets/newassets/uploadicon.png\"><input id=\"imgFile\" type=\"file\" (change)=\"changeImage($event)\"\r\n              accept=\"image/*\"></a>\r\n          <a href=\"javascript:;\" (click)=\"triggerSnapshot();\"><img src=\"../assets/newassets/cameraicon.png\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Section Login-->\r\n<section class=\"slide3 slideLogin\" [class.show]=\"slideLogin\" *ngIf=\"slideLogin\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"./../assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1 class=\"mt-20\">Your result is ready!</h1>\r\n\t    <p class=\"fs-18 lh-22\">Sign in for your analysis report</p>\r\n    </div>\r\n  </div>\r\n\t<form [formGroup]=\"regForm\"> \r\n    <div *ngIf=\"dataaa\">\r\n      <div class=\"registerBx\">\r\n        <!-- <label formControlName=\"PushID\">{{dataaa.id}}</label> -->\r\n        <input type=\"text\" id=\"PushID\" formControlName=\"PushID\"  value=\"{{dataaa.id}}\">\r\n        <input type=\"text\" id=\"txtNumber\" formControlName=\"txtNumber\" placeholder=\"Enter Email / Mobile Number\">\r\n        <!--<button (click)=\"SignIn()\">Submit</button>-->\r\n        <a (click)=\"SignIn()\" class=\"btnStyle\">Submit</a>\r\n      </div>\r\n\t\t\r\n\t\t  <div class=\"dividerOr\"><span>Or</span></div>\r\n\t\t\r\n\t\t  <div class=\"socialIcons\">\r\n        <!--<a (click)=\"submitLogin()\" class=\"btnStyle\">Facebook Authentication</a>\r\n        <a class=\"btnStyle\" #loginRef>Google Authentication</a>-->\r\n        <a (click)=\"submitLogin()\"><img src=\"./../assets/fb-icon.png\" alt=\"Facebook Icon\"></a>\r\n        <a (click)=\"prepareLogin()\" id=\"loginRef\" #loginRef><img src=\"./../assets/google-icon.png\" alt=\"Google Icon\"></a>\r\n        <img src=\"./../assets/whatsapp-icon.png\" alt=\"Whatsapp Icon\">\r\n\t\t  </div>\r\n\t\t  <div class=\"dividerOr\"><span>Or</span></div>\r\n      <a href=\"\" (click)=\"showSlide7()\" class=\"btnStyle\">Continue as Guest</a>\r\n    </div>\r\n\t</form>\r\n  <div class=\"bottomcurve slide6bottomcurve\">\r\n    <img src=\"./../assets/newassets/signupbottomcurve.png\" alt=\"bottomcurve\" />\r\n    <div class=\"bottomcurve-container\">\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Section 7 - Result-->\r\n<section class=\"slide7\" [class.show]=\"slide7Show\" *ngIf=\"slide7Show\">\r\n\t<div *ngIf=\"dataaa\" class=\"row\"  >\r\n        <h1>Here’s a detailed breakdown of your result…</h1>\r\n\t\t<div class=\"c100 p{{dataaa.outputData['skin_health_score']}} big center green\">\r\n\t\t\t<span><em>{{dataaa.outputData['skin_health_score']}}%</em> <strong>Skin Health<br>Score</strong></span>\r\n\t\t\t<div class=\"slice\"><div class=\"bar\"></div><div class=\"fill\"></div></div>\r\n\t\t</div>\r\n\t\t<div class=\"clear w100\"></div>\r\n\t\t<!--<div *ngFor=\"let use of dataaa.outputData | keyvalue\">\r\n            <h2>{{use.value}}% <span>{{use.key}}</span></h2>\r\n        </div>-->\r\n\t\t\r\n\t\t<div class=\"clear\"></div>\r\n\t\t\r\n\t\t<div class=\"sevenParamsBx\">\r\n\t\t\t<div class=\"circleUnit1 u1\">\r\n\t\t\t\t<span>{{dataaa.outputData['skin_dullness_percentage']}}%</span>\r\n\t\t\t\t<h3>Dullness</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"circleUnit1 u2\">\r\n\t\t\t\t<span>{{dataaa.outputData['dark_spot_percentage']}}%</span>\r\n\t\t\t\t<h3>Dark Spots</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"circleUnit1 u3\">\r\n\t\t\t\t<span>{{dataaa.outputData['dark_circle_percentage']}}%</span>\r\n\t\t\t\t<h3>Dark Circles</h3>\r\n\t\t\t</div>\r\n\r\n\t\t  <div class=\"col-md-6 col-sm-12 upload-image imageView text-center\">\r\n\t\t\t<img src=\"{{dataaa.outputImages['acne_image']}}\" class=\"image\">\r\n\t\t\t<img src=\"./../assets/face-mesh.png\" class=\"faceMesh\">\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"circleUnit1 u4\">\r\n\t\t\t\t<span>{{dataaa.outputData['Smoothness']}}%</span>\r\n\t\t\t\t<h3>Smoothness</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"circleUnit1 u5\">\r\n\t\t\t\t<span>{{dataaa.outputData['uneven_skin_percentage']}}%</span>\r\n\t\t\t\t<h3>Uneven Skin Tone</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"circleUnit1 u6\">\r\n\t\t\t\t<span>{{dataaa.outputData['face_firmness_percentage']}}%</span>\r\n\t\t\t\t<h3>Firmness</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\r\n\t\t\t<div class=\"circleUnit1 u7\">\r\n\t\t\t\t<span>{{dataaa.outputData['hydration_score']}}%</span>\r\n\t\t\t\t<h3>Hydration Score</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t  \r\n\t\t<div class=\"top3Priorities\">\r\n\t\t\t<h2>Your Top 3 Skin Priorities</h2>\r\n\t\t\t\r\n\t\t\t<div class=\"c100 p{{dataaa.outputData['hydration_score']}} small customSmall orange\">\r\n\t\t\t\t<span>{{dataaa.outputData['hydration_score']}}%</span>\r\n\t\t\t\t<div class=\"slice\">\r\n\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t<div class=\"fill\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h3>Hydration Score</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"c100 p{{dataaa.outputData['uneven_skin_percentage']}} small customSmall orange\">\r\n\t\t\t\t<span>{{dataaa.outputData['skin_dullness_percentage']}}%</span>\r\n\t\t\t\t<div class=\"slice\">\r\n\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t<div class=\"fill\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h3>Dullness</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"c100 p{{dataaa.outputData['face_firmness_percentage']}} small customSmall orange\">\r\n\t\t\t\t<span>{{dataaa.outputData['face_firmness_percentage']}}%</span>\r\n\t\t\t\t<div class=\"slice\">\r\n\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t<div class=\"fill\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h3>Firmness</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"yourSkinAnlaysis\" id=\"pdfTable\" #pdfTable>\r\n\t\t\t<h2>Your Detailed Skin Analysis Report</h2>\r\n\t\t\t<p>Swipe to learn about each priority</p>\r\n\t\t\t\r\n\t\t\t<owl-carousel-o [options]=\"resultSlider\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div *ngFor=\"let use of dataaa.priorityInfo.topPriorities\">\r\n\t\t\t\t\t\t<ng-template carouselSlide>\r\n\t\t\t\t\t\t\t<mat-tab-group>\r\n\t\t\t\t\t\t  <mat-tab label=\"Priority\">\r\n\t\t\t\t\t\t\t<div class=\"tab1Content tab\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"c100 p{{use.priority_score}} small customSmall orange\">\r\n\t\t\t\t\t\t\t\t<span>{{use.priority_score}}%</span>\r\n\t\t\t\t\t\t\t\t<div class=\"slice\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"fill\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<h3>{{use.priority_name}}</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p>{{use.priority_desc}}</p>\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t  </mat-tab>\r\n\t\t\t\t\t\t  <mat-tab label=\"Why & How To Use\">\r\n\t\t\t\t\t\t\t<div class=\"tab3Content tab\">\r\n\t\t\t\t\t\t\t\t<h6><strong>WHY</strong></h6>\r\n\t\t\t\t\t\t\t\t<p>{{use.priority_prod_why}}</p>\r\n\t\t\t\t\t\t\t\t<br><br>\r\n\r\n\t\t\t\t\t\t\t\t<h6><strong>HOW</strong></h6>\r\n\t\t\t\t\t\t\t\t<p>{{use.priority_prod_how}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </mat-tab>\r\n\t\t\t\t\t\t  <mat-tab label=\"Expert Tip\">\r\n\t\t\t\t\t\t\t<div class=\"tab1Content tab\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<h6><strong>{{use.priority_prod_title}}</strong></h6> \r\n\t\t\t\t\t\t\t\t<p>{{use.priority_experttip}}</p>\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tCombat signs of ageing with<br>\r\n\t\t\t\t\t\t\t\t<strong>{{use.priority_prod_desc}}</strong>\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<img src=\"{{use.priority_experttip_image}}\" class=\"prodImg\">\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<a href=\"{{use.priority_prod_amazon}}\"><img src=\"../assets/amazon.png\" class=\"buyNowLinks\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"{{use.priority_prod_nykaa}}\"><img src=\"../assets/nykaa.png\" class=\"buyNowLinks\"></a>\r\n\t\t\t\t\t\t\t\t<!-- <img src=\"{{use.Priority_prod_why_image}}\"> -->\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </mat-tab>\r\n\t\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t\t\t</ng-template> \r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t \r\n\t  \t\t</owl-carousel-o>\r\n\t\t\t\r\n            <!-- loop start -->\r\n            \r\n            <!--<div *ngFor=\"let use of dataaa.outputData | keyvalue\">\r\n            <h2>{{use.value}}% <span>{{use.key}}</span></h2>\r\n        </div>-->\r\n        \r\n\t\t</div>\r\n\t  <div class=\"col-md-6 col-sm-12 thankYouWrap\">\r\n\t\t  \r\n\t\t  <h5><img src=\"../assets/tick.png\" class=\"imgTick\">\r\n\t\t\t  Thank you for taking the skin analysis!</h5>\r\n\t\t  \r\n\t\t  <a (click)=\"downloadAsPDF()\" href=\"javascript:;\" class=\"btnStyle\">Download Report</a>\r\n\t\t<!--<h4>Message</h4><h5><b>{{ code }}</b></h5>-->\r\n\t\t <!--<p><b>{{ code }}</b>{{message}}</p>--> \r\n\t  </div>\r\n\t</div>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*******************************  Reset CSS *******************************/\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}\r\naudio,canvas,video{display:inline-block}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden]{display:none}\r\nhtml{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}\r\nbody{margin:0}\r\na:focus, :focus{outline:none; border: 0;}\r\na:active,a:hover{outline:0;text-decoration:none}\r\nh1{font-size:2em}\r\nabbr[title]{border-bottom:1px dotted}\r\nb,strong{font-weight:700}\r\ndfn{font-style:italic}\r\nmark{background:#ff0;color:#000}\r\ncode,kbd,pre,samp{font-family:monospace,serif;font-size:1em}\r\npre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}\r\nq{quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsup{top:-.5em}\r\nsub{bottom:-.25em}\r\nimg{border:0;outline:none}\r\nsvg:not(:root){overflow:hidden}\r\nfigure{margin:0}\r\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{border:0;padding:0}\r\nbutton,input,select,textarea{font-family:inherit;font-size:100%;margin:0;outline:0}\r\nbutton,input{line-height:normal}\r\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\r\nbutton[disabled],input[disabled]{cursor:default}\r\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\r\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\r\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\r\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\r\ntextarea{overflow:auto;vertical-align:top}\r\ntable{border-collapse:collapse;border-spacing:0}\r\na{text-decoration:none;outline:none;color:#000}\r\nul{margin:0;padding:0;list-style:none}\r\nul li{margin:0;padding:0}\r\n.alignCenter{text-align:center}\r\nbody{background:#fff;font-size:100%;font-family: 'Geogrotesque-Regular';font-weight:400;color:#1b1a1a;height:100%;position:relative;}\r\n.clear,.after{clear:both}\r\n.clear:after,.after:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}\r\n* html .clear,* html .after{zoom:1;clear:both;font-size:1px!important;line-height:1px!important}\r\n:first-child+html .clear,:first-child+html .after{zoom:1;clear:both;font-size:1px!important;line-height:1px!important}\r\nimg{border:0 none}\r\n.toRight{float:right!important}\r\n.toLeft{float:left!important}\r\n.toCenter{float:none!important;display:block;margin:0 auto}\r\n.noPadTop{padding-top:0!important}\r\nhtml,body{min-height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;width:100%;}\r\n*{margin:0;padding:0}\r\n/*******************************  Reset CSS *******************************/\r\n/*Slides*/\r\nsection{\r\n  width: 100%; max-width: 450px; margin: 0 auto;\r\n}\r\n.slide1 img{\r\n  width: 100%; display: block;\r\n}\r\n/*Camera Module*/\r\n.video-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin: 0;\r\n  width: 640px;\r\n}\r\n.upload-button {\r\n  position: relative;\r\n  display: inline-block;\r\n  z-index: 1;\r\n}\r\n.upload-button input[type=\"file\"] {\r\n  -webkit-appearance: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n.slide7 .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.slide7 .faceMesh{\r\n\tposition: absolute; top: 0; left: 0; width: 100%; height: 100%;\r\n}\r\n.slide7 .imageView{\r\n\tposition: relative; width: 46%; margin: 1em auto; border-radius: 10px; overflow: hidden; z-index: 1;\r\n}\r\n/*Global*/\r\nsection{\r\n\tbackground: url('bg.jpg') no-repeat bottom center #fff;\r\n\tbackground-size:100%;\r\n}\r\n/*Slide 1*/\r\n/*Slide 2*/\r\n/* .slide2{padding:0 2em; text-align: center;}\r\n.slide2 .logo{width:50%; margin:0 auto; display: block; padding: 1.5em 0;}\r\n.slide2 h1{font-size: 1.3em; margin-bottom: 0.5em;}\r\n.slide2 p{font-size: 0.8em; line-height: 1.5em; margin-bottom: 0;}\r\n.slide2 img{display: block; width: 95%; margin: 0 auto;}\r\n.slide2 label{color:#5b5a5a; margin-bottom: 1em; margin-top: 0.5em; font-size: 0.8em;}\r\n.slide2 .btnStyle{color:#414141; background: #ffe76b; background: -moz-linear-gradient(top,  #ffe76b 0%, #fff5c5 100%); background: -webkit-linear-gradient(top,  #ffe76b 0%,#fff5c5 100%); background: linear-gradient(to bottom,  #ffe76b 0%,#fff5c5 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe76b', endColorstr='#fff5c5',GradientType=0 ); display: block; border: 0; outline: 0; padding: 10px 3em; font-weight: bold; font-size: 1.1em; border-radius: 50px; margin: 0 auto 0 auto; display: inline-block;} */\r\n/*onboarding*/\r\n.onboarding {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n.onboarding.lastSlide ::ng-deep .owl-dots {\r\n  display: none;\r\n}\r\n.onboarding ::ng-deep .owl-dots {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 60px;\r\n}\r\n.onboarding ::ng-deep .owl-dots .owl-dot span {\r\n  height: 12px;\r\n  width: 12px;\r\n  margin: 5px;\r\n  background: #f3e5e4;\r\n}\r\n.onboarding ::ng-deep .owl-dots .owl-dot.active span {\r\n  background: var(--red);\r\n}\r\n.onboarding ::ng-deep .owl-nav [class*=owl-] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  background-color: rgba(var(--pink-rgba), .5);\r\n  color: var(--red);\r\n  border-radius: 100px;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-prev {\r\n  left: 0;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-next {\r\n  right: 0;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-next.disabled {\r\n  display: none;\r\n}\r\n.onboardingSkip {\r\n  color: var(--pink);\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  z-index: 1;\r\n  text-decoration: underline;\r\n  text-underline-offset: 2px;\r\n  cursor: pointer;\r\n}\r\n.onboarding .onboardingSkip {\r\n  position: absolute;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.onboardSlideWhiteOverlay {\r\n  /* background: url(./../assets/newassets/whitecurve.png) no-repeat 0 ;\r\n  background-size: 100%;\r\n  height: 340px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  text-align: center; */\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.onboardSlideWhiteOverlay > img {\r\n  width: 100%;\r\n  height: 48vh;\r\n}\r\n.onboardSlideWhiteOverlay-container {\r\n  position: absolute;\r\n  inset: 0;\r\n  padding: 120px 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.onboardSlideWhiteOverlay-container img {\r\n  max-width: 160px\r\n}\r\n.onboardSlide {\r\n  height: 100vh;\r\n}\r\n.onboardingSlide1 .onboardSlideWhiteOverlay {\r\n  /* padding: 110px 80px 0; */\r\n}\r\n.onboardingSlide2 .onboardSlideWhiteOverlay, .onboardingSlide3 .onboardSlideWhiteOverlay {\r\n  /* padding: 110px 30px 0; */\r\n}\r\n.onboardingSlide1 .onboardSlideWhiteOverlay img {\r\n  /* max-width: 160px; */\r\n}\r\nlabel.termsprivacy input {\r\n  display: none;\r\n}\r\nlabel.termsprivacy span {\r\n  height: 12px;\r\n  width: 12px;\r\n  margin-right: 6px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  border: 1px solid;\r\n}\r\nlabel.termsprivacy {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n}\r\nlabel.termsprivacy input:checked + span:before {\r\n  content: \"✔️\";\r\n  font-size: 10px;\r\n}\r\n.slide3 {\r\n  display: none;\r\n}\r\n.slide3.show {\r\n  display: flex;\r\n  -webkit-animation: showAnimate .3s linear;\r\n          animation: showAnimate .3s linear;\r\n}\r\n@-webkit-keyframes showAnimate {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes showAnimate {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n/*Slide 3*/\r\n.slide3 {\r\n  overflow: hidden;\r\n}\r\n.slide3 h1 {\r\n  text-align: center; \r\n  color: var(--red);\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n}\r\n.slide3 .owl-item{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide3 .owl-item img{width: 100%;}\r\n.slide3 .owl-item h3{font-size: 1em; text-align: center; font-style: italic; padding-top: 3em;}\r\n.slide3 .owl-item p{font-size: 1em; text-align: center; padding-top: 0.5em;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.steps1to3{position: absolute; bottom: 0; left: 0; width: 100%; padding: 1em; background: #fff0e9; text-align: center; padding-top: 2em; padding-bottom: 1em; border-radius: 60px 60px 0 0; border-top: 1.5px solid #ffc4ae;}\r\n.steps1to3 li{display: inline-block; width: 32%;}\r\n.steps1to3 li a{color: #a47660; display: block; position: relative; height: 10vh; width: 10vh; margin: 0 auto; opacity: 0.6;}\r\n.steps1to3 li a:after{content: \" \"; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 100px; border: 1px solid #a47660;}\r\n.steps1to3 li a.selected{opacity: 1;}\r\n.steps1to3 li a.selected:after{border-width: 2px;}\r\n.steps1to3 li strong{display: block; font-size: 2em; height: 10vh; line-height: 10vh;}\r\n.steps1to3 li span{display: block; font-size: 0.7em; position: absolute; bottom: 0; text-align: center; width: 100%; background: #fff0e9; z-index: 1;}\r\n.btnNext{font-weight: bold; padding: 1em 0; display: block;}\r\n.slide3 input[type=\"radio\"]{position: absolute; width: 1px; height: 1px; visibility: hidden;}\r\n/* .slide3 .genderCarousel{padding: 2em 0 1em 0;} */\r\n.slide3 .genderCarousel h3{font-size: 1em; text-align: center; margin-top: 2em; font-style: italic;}\r\n.slide3 .genderCarousel p{font-size: 0.9em; text-align: center; font-style: italic;}\r\n.slide3 .btnNext{text-align: center; width: 100%;}\r\n/* .slide3 .nextPrevBx{background: none;} */\r\n/* .slide3 ::ng-deep .owl-item {\r\n  background-color: #f3e3e2;\r\n  border-radius: 100%;\r\n  box-shadow: 0 0 48px 6px rgba(200, 149, 155, 0.43);\r\n} */\r\n.slide3 ::ng-deep .owl-item {\r\n  transform: scale(.6);\r\n  transition: .5s ease;\r\n  background-color: #f3e3e2;\r\n  border-radius: 100%;\r\n  box-shadow: 0 0 48px 6px rgba(200, 149, 155, 0.43);\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n}\r\n.slide3 ::ng-deep .owl-item:not(.active.center) {\r\n  filter: grayscale(.6);\r\n}\r\n.slide3 ::ng-deep .owl-item.active.center {\r\n  transform: scale(1.0);\r\n}\r\n.slide3 ::ng-deep .owl-carousel .owl-stage-outer {\r\n  overflow: visible;\r\n}\r\n/*Gender Slide*/\r\n.topcurve, .bottomcurve {\r\n  position: relative;\r\n}\r\n.topcurve img, .bottomcurve img {\r\n  width: 100%;\r\n}\r\n.topcurve .topcurve-container, .bottomcurve .bottomcurve-container {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\nsection.slide3 {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  background: url('gender-bg.png') 0 no-repeat;\r\n  background-size: cover;\r\n  height: 100%;\r\n}\r\n.bottomcurve .bottomcurve-container {\r\n  padding: 120px 40px 0;\r\n}\r\nsection.slide3 > * {\r\n  flex: 1;\r\n}\r\nsection.slide3 .bottomcurve-container ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.topcurve-container div {\r\n  background: var(--red);\r\n  color: var(--white);\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  padding: 2px 10px;\r\n  display: inline-block;\r\n  border-top-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n}\r\n.topcurve-container {\r\n  padding: 20px 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n/* section.slide3 .bottomcurve-container li {\r\n  background: var(--pink);\r\n  padding: 10px !important;\r\n  border-radius: 100px;\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n} */\r\nsection.slide3 .bottomcurve-container li a {\r\n  background: var(--pink);\r\n  padding: 10px !important;\r\n  border-radius: 100px;\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--red);\r\n}\r\nsection.slide3 .bottomcurve-container li a strong {\r\n  font-size: 30px;\r\n  line-height: 30px;\r\n  font-weight: lighter;\r\n}\r\nsection.slide3 .bottomcurve-container li a.selected {\r\n  color: var(--white);\r\n  background: var(--red);\r\n}\r\nsection.slide3 .bottomcurve-container li a.selected strong {\r\n  font-weight: bold;\r\n}\r\n/*Slide 4 Age Slider */\r\n/* .slide4 h1{text-align: center; font-size: 1.5em; color: #5b5a5a;} */\r\n.slide4 ul.genderSlider li{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide4 ul.genderSlider li img{width: 100%;}\r\n.slide4 h3{font-size: 1em; text-align: center; margin-top: 2em; font-style: italic;}\r\n.slide4 p{font-size: 0.9em; text-align: center; font-style: italic;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.slide4 .ageSelector{padding: 2em 0; text-align: center;}\r\n.slide4 .ageSelector .ageInput{padding: 0; border: 0; font-size: 3em; text-align: center; margin: 0; width: 100%; font-weight: bold; margin-bottom: 3em;}\r\n.glyphicon{width: 20px; height: 20px;}\r\n.slide4 .ageSelectorBx{padding: 2em 0;}\r\n.slide4 .ageSelectorBx button{width: 50px; height: 50px; padding: 0; font-style: normal; display: inline-block;}\r\n.slide4 .ageSelectorBx .ageTxtBig{background: none; border: 0; font-size: 3em; text-align: center; display: inline-block; width: 150px; vertical-align: middle;}\r\n.btnNext{font-weight: bold; padding: 1em 0; display: block; width: 44%; text-align: right; text-transform: uppercase; font-size: 0.9em;}\r\n.btnNext.toRight{text-align: left;}\r\n/* .nextPrevBx{background: url(../assets/pagination-border.png) no-repeat center center; background-size: auto 70%; margin-top: 2em;} */\r\n/* .nextPrevBx img{margin: 0 10px; width: 25px;} */\r\n.nextPrevBx { text-align: center; }\r\n.nextPrevBx .onboardingSkip:nth-child(2) {\r\n  padding-left: 10px;\r\n  margin-left: 9px;\r\n  position: relative;\r\n}\r\n.nextPrevBx .onboardingSkip:nth-child(2):before {\r\n  content: \"\";\r\n  height: 12px;\r\n  width: 1px;\r\n  background: var(--pink);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 4px;\r\n}\r\n/* .slide4 ::ng-deep .owl-item {\r\n  min-height: 220px;\r\n} */\r\n.slide4 ::ng-deep .owl-item label {\r\n  font-size: 70px;\r\n  /* display: flex;\r\n  place-content: center; */\r\n}\r\n.slide4 ::ng-deep .owl-item label span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: var(--red);\r\n}\r\n/*Slide 5*/\r\n/* .slide5{padding: 2em 0;} */\r\n/* .slide5 h1{text-align: center; font-size: 1.5em; color: #5b5a5a; padding: 0 2em;} */\r\n.slide5 ul.genderSlider li{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide5 ul.genderSlider li img{width: 100%;}\r\n.slide5 ul.genderSlider li h3{font-size: 1.2em;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.slide5 .btnNext{font-weight: bold; padding: 1em 0; display: block;}\r\n/* .slide5 .skinSlider{padding: 4em 0 2em 0; overflow: hidden;} */\r\n/*Slide 6*/\r\n.slide6{padding: 3em 0;};\r\n/* .slide6 h1{text-align: center; font-size: 1.5em; color: #5b5a5a; padding-top: 1em;} */\r\n.webcamUnit video, .mirrored{display: block; width: 100%;}\r\n.webcam{overflow: hidden; width: 80%; position: relative; margin: 1em auto; width: 288px; height: 384px;}\r\n.webcam .video-overlay{width: 100%;}\r\n.slide6 .imageCta{text-align: center; padding: 1em 0;}\r\n.slide6 .imageCta a{position: relative; display: inline-block;}\r\n.slide6 .imageCta img{width: 100px; padding: 0 10px;}\r\n.slide6 .imageCta input{position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 1;}\r\n/* .slide6 p{padding: 0 2em;} */\r\n#analysing{width: 100%; position: absolute; top: 0; left: 0; z-index: 9; background: #fff6db; background: linear-gradient(to bottom,  #fff6db 0%,#fcdad1 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff6db', endColorstr='#fcdad1',GradientType=0 );}\r\np.toptitle {\r\n  font-size: 16px;\r\n  color: var(--textcolor);\r\n}\r\np.bottomdesc {\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n  font-weight: 500;\r\n  color: var(--textcolor);\r\n}\r\n.bottomcurve.slide6bottomcurve {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.bottomcurve.slide6bottomcurve > img {\r\n  max-height: 300px;\r\n}\r\n/*Slide 7*/\r\n.slide7 {\r\n    padding: 2em 0;\r\n}\r\n.slide7 h1 {\r\n    font-size: 1.5em;\r\n    margin-bottom: 2em;\r\n\tcolor:#5b5a5a;\r\n\ttext-align: center;\r\n}\r\n.slide7 .top3Priorities {\r\n    padding: 2em 0; width: 100%; text-align: center;\r\n}\r\n.slide7 .top3Priorities h2 {\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n\tcolor: #5b5a5a;\r\n\tmargin-bottom: 1em;\r\n}\r\n.slide7 .circleUnit1 {\r\n    display: inline-block;\r\n    width: 30%;\r\n    text-align: center;\r\n    padding: 2em 0;\r\n}\r\n.slide7 .circleUnit1 h3 {\r\n    font-size: 0.8em;\r\n\tcolor: #807e7b;\r\n\tpadding: 0.5em 0;\r\n\twidth: 75%;\r\n\tmargin: 0 auto;\r\n}\r\n.slide7 .circleUnit1 span {\r\n\tfont-weight: bold; border-radius: 100px; border: 1px solid #807e7b; width: 40px; height: 40px; display: inline-block; line-height: 38px; text-align: center; color: #807e7b; font-size: 0.8em;\r\n}\r\n.slide7 .yourSkinAnlaysis{width: 100%; overflow: hidden;}\r\n.slide7 .yourSkinAnlaysis h2{\r\n\tfont-size: 1.4em;\r\n    text-align: center;\r\n    color: #5b5a5a;\r\n    margin-bottom: 0.2em;\r\n}\r\n.slide7 .yourSkinAnlaysis p{\r\n\tfont-size: 1em; text-align: center;\r\n}\r\n.slide7 .yourSkinAnlaysis ul li{\r\n\ttext-align: center;\r\n}\r\n.slide7 .yourSkinAnlaysis ul .circleUnit1{\r\n\tdisplay: block; margin: 0 auto;\r\n}\r\n.slide7 .yourSkinAnlaysis .prodImg{\r\n\twidth: 90%; margin: 0 auto; padding: 2em 0; display: block;\r\n}\r\n.slide7 .yourSkinAnlaysis .buyNowLinks{\r\n\twidth: 40%;\r\n\tdisplay: inline-block;\r\n}\r\n.slide7 .tab{\r\n\tbackground: #d7e6f4; margin-bottom: 2em; padding: 2em; text-align: center;\r\n}\r\n.slide7 .circleUnit1.bigCircleUnit {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.slide7 .circleUnit1.bigCircleUnit span {\r\n    width: 150px; \r\n\theight: 150px; \r\n\tline-height: 100px; \r\n\tfont-size: 45px; \r\n\tborder: 5px solid transparent; \r\n\tposition: relative;\r\n}\r\n.clear, .after {\r\n  clear: both;\r\n}\r\n.clear:after, .after:after {\r\n  visibility: hidden;\r\n  display: block;\r\n  font-size: 0;\r\n  content: \" \";\r\n  clear: both;\r\n  height: 0;\r\n}\r\n.w100{width: 100%; display: block;}\r\n/****************************************************************\r\n *\r\n * CSS Percentage Circle\r\n * Author: Andre Firchow\r\n *\r\n*****************************************************************/\r\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\r\n  clip: rect(auto, auto, auto, auto);\r\n}\r\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\r\n  position: absolute;\r\n  border: 0.04em solid #ade499;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n  clip: rect(0em, 0.5em, 1em, 0em);\r\n  border-radius: 50%;\r\n  transform: rotate(0deg);\r\n}\r\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\r\n  transform: rotate(180deg);\r\n}\r\n.c100 {\r\n  position: relative;\r\n  font-size: 120px;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 0.1em 0.1em 0;\r\n  background-color: #f8fdf6;\r\n}\r\n.c100 *, .c100 *:before, .c100 *:after {\r\n  box-sizing: content-box;\r\n}\r\n.c100.center {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n.c100.big {\r\n  font-size: 240px;\r\n}\r\n.c100.small {\r\n  font-size: 80px;\r\n}\r\n.c100 > span {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 5em;\r\n  line-height: 5em;\r\n  font-size: 0.2em;\r\n  color: #ade499;\r\n  display: block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  transition-property: all;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-out;\r\n\ttop: 30%; line-height: 1em;\r\n}\r\n.c100 > span strong{\r\n\tdisplay: block; font-size: 20px; color: #5b5a5a;\r\n}\r\n.c100:after {\r\n  position: absolute;\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  transition-property: all;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n.c100 .slice {\r\n  position: absolute;\r\n  width: 1em;\r\n  height: 1em;\r\n  clip: rect(0em, 1em, 1em, 0.5em);\r\n}\r\n.c100.p1 .bar {\r\n  transform: rotate(3.6deg);\r\n}\r\n.c100.p2 .bar {\r\n  transform: rotate(7.2deg);\r\n}\r\n.c100.p3 .bar {\r\n  transform: rotate(10.8deg);\r\n}\r\n.c100.p4 .bar {\r\n  transform: rotate(14.4deg);\r\n}\r\n.c100.p5 .bar {\r\n  transform: rotate(18deg);\r\n}\r\n.c100.p6 .bar {\r\n  transform: rotate(21.6deg);\r\n}\r\n.c100.p7 .bar {\r\n  transform: rotate(25.2deg);\r\n}\r\n.c100.p8 .bar {\r\n  transform: rotate(28.8deg);\r\n}\r\n.c100.p9 .bar {\r\n  transform: rotate(32.4deg);\r\n}\r\n.c100.p10 .bar {\r\n  transform: rotate(36deg);\r\n}\r\n.c100.p11 .bar {\r\n  transform: rotate(39.6deg);\r\n}\r\n.c100.p12 .bar {\r\n  transform: rotate(43.2deg);\r\n}\r\n.c100.p13 .bar {\r\n  transform: rotate(46.8deg);\r\n}\r\n.c100.p14 .bar {\r\n  transform: rotate(50.4deg);\r\n}\r\n.c100.p15 .bar {\r\n  transform: rotate(54deg);\r\n}\r\n.c100.p16 .bar {\r\n  transform: rotate(57.6deg);\r\n}\r\n.c100.p17 .bar {\r\n  transform: rotate(61.2deg);\r\n}\r\n.c100.p18 .bar {\r\n  transform: rotate(64.8deg);\r\n}\r\n.c100.p19 .bar {\r\n  transform: rotate(68.4deg);\r\n}\r\n.c100.p20 .bar {\r\n  transform: rotate(72deg);\r\n}\r\n.c100.p21 .bar {\r\n  transform: rotate(75.6deg);\r\n}\r\n.c100.p22 .bar {\r\n  transform: rotate(79.2deg);\r\n}\r\n.c100.p23 .bar {\r\n  transform: rotate(82.8deg);\r\n}\r\n.c100.p24 .bar {\r\n  transform: rotate(86.4deg);\r\n}\r\n.c100.p25 .bar {\r\n  transform: rotate(90deg);\r\n}\r\n.c100.p26 .bar {\r\n  transform: rotate(93.6deg);\r\n}\r\n.c100.p27 .bar {\r\n  transform: rotate(97.2deg);\r\n}\r\n.c100.p28 .bar {\r\n  transform: rotate(100.8deg);\r\n}\r\n.c100.p29 .bar {\r\n  transform: rotate(104.4deg);\r\n}\r\n.c100.p30 .bar {\r\n  transform: rotate(108deg);\r\n}\r\n.c100.p31 .bar {\r\n  transform: rotate(111.6deg);\r\n}\r\n.c100.p32 .bar {\r\n  transform: rotate(115.2deg);\r\n}\r\n.c100.p33 .bar {\r\n  transform: rotate(118.8deg);\r\n}\r\n.c100.p34 .bar {\r\n  transform: rotate(122.4deg);\r\n}\r\n.c100.p35 .bar {\r\n  transform: rotate(126deg);\r\n}\r\n.c100.p36 .bar {\r\n  transform: rotate(129.6deg);\r\n}\r\n.c100.p37 .bar {\r\n  transform: rotate(133.2deg);\r\n}\r\n.c100.p38 .bar {\r\n  transform: rotate(136.8deg);\r\n}\r\n.c100.p39 .bar {\r\n  transform: rotate(140.4deg);\r\n}\r\n.c100.p40 .bar {\r\n  transform: rotate(144deg);\r\n}\r\n.c100.p41 .bar {\r\n  transform: rotate(147.6deg);\r\n}\r\n.c100.p42 .bar {\r\n  transform: rotate(151.2deg);\r\n}\r\n.c100.p43 .bar {\r\n  transform: rotate(154.8deg);\r\n}\r\n.c100.p44 .bar {\r\n  transform: rotate(158.4deg);\r\n}\r\n.c100.p45 .bar {\r\n  transform: rotate(162deg);\r\n}\r\n.c100.p46 .bar {\r\n  transform: rotate(165.6deg);\r\n}\r\n.c100.p47 .bar {\r\n  transform: rotate(169.2deg);\r\n}\r\n.c100.p48 .bar {\r\n  transform: rotate(172.8deg);\r\n}\r\n.c100.p49 .bar {\r\n  transform: rotate(176.4deg);\r\n}\r\n.c100.p50 .bar {\r\n  transform: rotate(180deg);\r\n}\r\n.c100.p51 .bar {\r\n  transform: rotate(183.6deg);\r\n}\r\n.c100.p52 .bar {\r\n  transform: rotate(187.2deg);\r\n}\r\n.c100.p53 .bar {\r\n  transform: rotate(190.8deg);\r\n}\r\n.c100.p54 .bar {\r\n  transform: rotate(194.4deg);\r\n}\r\n.c100.p55 .bar {\r\n  transform: rotate(198deg);\r\n}\r\n.c100.p56 .bar {\r\n  transform: rotate(201.6deg);\r\n}\r\n.c100.p57 .bar {\r\n  transform: rotate(205.2deg);\r\n}\r\n.c100.p58 .bar {\r\n  transform: rotate(208.8deg);\r\n}\r\n.c100.p59 .bar {\r\n  transform: rotate(212.4deg);\r\n}\r\n.c100.p60 .bar {\r\n  transform: rotate(216deg);\r\n}\r\n.c100.p61 .bar {\r\n  transform: rotate(219.6deg);\r\n}\r\n.c100.p62 .bar {\r\n  transform: rotate(223.2deg);\r\n}\r\n.c100.p63 .bar {\r\n  transform: rotate(226.8deg);\r\n}\r\n.c100.p64 .bar {\r\n  transform: rotate(230.4deg);\r\n}\r\n.c100.p65 .bar {\r\n  transform: rotate(234deg);\r\n}\r\n.c100.p66 .bar {\r\n  transform: rotate(237.6deg);\r\n}\r\n.c100.p67 .bar {\r\n  transform: rotate(241.2deg);\r\n}\r\n.c100.p68 .bar {\r\n  transform: rotate(244.8deg);\r\n}\r\n.c100.p69 .bar {\r\n  transform: rotate(248.4deg);\r\n}\r\n.c100.p70 .bar {\r\n  transform: rotate(252deg);\r\n}\r\n.c100.p71 .bar {\r\n  transform: rotate(255.6deg);\r\n}\r\n.c100.p72 .bar {\r\n  transform: rotate(259.2deg);\r\n}\r\n.c100.p73 .bar {\r\n  transform: rotate(262.8deg);\r\n}\r\n.c100.p74 .bar {\r\n  transform: rotate(266.4deg);\r\n}\r\n.c100.p75 .bar {\r\n  transform: rotate(270deg);\r\n}\r\n.c100.p76 .bar {\r\n  transform: rotate(273.6deg);\r\n}\r\n.c100.p77 .bar {\r\n  transform: rotate(277.2deg);\r\n}\r\n.c100.p78 .bar {\r\n  transform: rotate(280.8deg);\r\n}\r\n.c100.p79 .bar {\r\n  transform: rotate(284.4deg);\r\n}\r\n.c100.p80 .bar {\r\n  transform: rotate(288deg);\r\n}\r\n.c100.p81 .bar {\r\n  transform: rotate(291.6deg);\r\n}\r\n.c100.p82 .bar {\r\n  transform: rotate(295.2deg);\r\n}\r\n.c100.p83 .bar {\r\n  transform: rotate(298.8deg);\r\n}\r\n.c100.p84 .bar {\r\n  transform: rotate(302.4deg);\r\n}\r\n.c100.p85 .bar {\r\n  transform: rotate(306deg);\r\n}\r\n.c100.p86 .bar {\r\n  transform: rotate(309.6deg);\r\n}\r\n.c100.p87 .bar {\r\n  transform: rotate(313.2deg);\r\n}\r\n.c100.p88 .bar {\r\n  transform: rotate(316.8deg);\r\n}\r\n.c100.p89 .bar {\r\n  transform: rotate(320.4deg);\r\n}\r\n.c100.p90 .bar {\r\n  transform: rotate(324deg);\r\n}\r\n.c100.p91 .bar {\r\n  transform: rotate(327.6deg);\r\n}\r\n.c100.p92 .bar {\r\n  transform: rotate(331.2deg);\r\n}\r\n.c100.p93 .bar {\r\n  transform: rotate(334.8deg);\r\n}\r\n.c100.p94 .bar {\r\n  transform: rotate(338.4deg);\r\n}\r\n.c100.p95 .bar {\r\n  transform: rotate(342deg);\r\n}\r\n.c100.p96 .bar {\r\n  transform: rotate(345.6deg);\r\n}\r\n.c100.p97 .bar {\r\n  transform: rotate(349.2deg);\r\n}\r\n.c100.p98 .bar {\r\n  transform: rotate(352.8deg);\r\n}\r\n.c100.p99 .bar {\r\n  transform: rotate(356.4deg);\r\n}\r\n.c100.p100 .bar {\r\n  transform: rotate(360deg);\r\n}\r\n.c100:hover {\r\n  cursor: default;\r\n}\r\n.c100:hover > span {\r\n  width: 3.33em;\r\n  line-height: 3.33em;\r\n  font-size: 0.3em;\r\n  color: #307bbb;\r\n}\r\n.c100:hover:after {\r\n  top: 0.04em;\r\n  left: 0.04em;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n}\r\n.c100.dark {\r\n  background-color: #777777;\r\n}\r\n.c100.dark .bar,\r\n.c100.dark .fill {\r\n  border-color: #c6ff00 !important;\r\n}\r\n.c100.dark > span {\r\n  color: #777777;\r\n}\r\n.c100.dark:after {\r\n  background-color: #666666;\r\n}\r\n.c100.dark:hover > span {\r\n  color: #c6ff00;\r\n}\r\n.c100.green .bar, .c100.green .fill {\r\n  border-color: #ade499 !important;\r\n}\r\n.c100.green:hover > span {\r\n  color: #ade499;\r\n}\r\n.c100.green.dark .bar, .c100.green.dark .fill {\r\n  border-color: #5fd400 !important;\r\n}\r\n.c100.green.dark:hover > span {\r\n  color: #5fd400;\r\n}\r\n.c100.orange .bar, .c100.orange .fill {\r\n  border-color: #dd9d22 !important;\r\n}\r\n.c100.orange:hover > span {\r\n  color: #dd9d22;\r\n}\r\n.c100.orange.dark .bar, .c100.orange.dark .fill {\r\n  border-color: #e08833 !important;\r\n}\r\n.c100.orange.dark:hover > span {\r\n  color: #e08833;\r\n}\r\n/*Circle CSS Ends*/\r\n/*Slide Login*/\r\nsection.slideLogin{\r\n  display: flex;           /* establish flex container */\r\n  flex-direction: column;  /* make main axis vertical */\r\n  justify-content: center; /* center items vertically, in this case */\r\n  align-items: center;\r\n  /* padding: 0 2em; */\r\n}\r\n/* .slideLogin h1{text-align: center; font-size: 1.5em; color: #5b5a5a;} */\r\n.slideLogin #PushID{width: 0; padding: 0; border: 0; height: 0; position: relative; z-index: -1;}\r\n.slideLogin #txtNumber{border-radius: 100px; border: 1px solid #ccc; margin-bottom: 1em; display: block; width: 100%;}\r\n.slideLogin .btnStyle{margin-bottom: 0; text-align: center;}\r\n.slideLogin .btnStyle, .slideLogin input {\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.slide3.slideLogin {\r\n  display: block;\r\n}\r\n.slideLogin form {\r\n  position: absolute;\r\n  padding: 0 4em;\r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.registerBx {\r\n\tpadding: 2em 0 1em 0;\r\n\ttext-align: center;\r\n}\r\n.registerBx input, .registerBx button {\r\n\tpadding: 1em;\r\n  display: inline-block;\r\n}\r\n.socialIcons {\r\n\t/* padding-bottom: 2em; */\r\n\ttext-align: center;\r\n}\r\n.socialIcons img {\r\n\twidth: 70px; padding: 1em 0.5em;\r\n}\r\n.dividerOr {\r\n\tpadding: 1em 0; \r\n  /* border-bottom: 1px solid #ccc;  */\r\n  height: 1px; margin-bottom: 2em; position: relative; text-align: center; line-height: 2em;\r\n}\r\n.dividerOr span{\r\n\t/* background: #fff; */\r\n    padding: 1em;\r\n    position: relative;\r\n}\r\n.dividerOr span:before, .dividerOr span:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  width: 110px;\r\n  position: absolute;\r\n  background: var(--red);\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.dividerOr span:before {\r\n  left: -120px;\r\n}\r\n.dividerOr span:after {\r\n  right: -120px;\r\n}\r\n/* .btnStyle {\r\n\tcolor:#414141; background: #ffe76b; background: -moz-linear-gradient(top,  #ffe76b 0%, #fff5c5 100%); background: -webkit-linear-gradient(top,  #ffe76b 0%,#fff5c5 100%); background: linear-gradient(to bottom,  #ffe76b 0%,#fff5c5 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe76b', endColorstr='#fff5c5',GradientType=0 ); display: block; border: 0; outline: 0; padding: 10px 3em; font-weight: bold; font-size: 1.1em; border-radius: 50px; margin: 0 auto 2em auto;\r\n} */\r\n.btnStyle {\r\n  color: var(--white);\r\n  background: var(--red);\r\n  border: none;\r\n  display: flex;\r\n  padding: 14px 44px;\r\n  border-radius: 20px;\r\n}\r\n.slide7 .c100 strong{\r\n\tdisplay: block; font-size: 23px; color: #5b5a5a; line-height: 25px; padding-top: 10px; font-weight: normal;\r\n}\r\n.slide7 .c100 span em{\r\n\tfont-style: normal; font-size: 1.4em;\r\n}\r\n.slide7 .sevenParamsBx{\r\n\tposition: relative; margin-top: 2em;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1 {\r\n\tposition: absolute; left: 0; top: 0; padding: 0 !important; \r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u1{\r\n\ttop: 0;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u2{\r\n\ttop: 25%;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u3{\r\n\ttop: 51%;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u4{\r\n\ttop: 0;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u5{\r\n\ttop: 25%;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u6{\r\n\ttop: 51%;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u7{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1:after { \r\n\tcontent: \"\"; position: absolute; right: 0; top: 33%; border-top: 2px dashed #807e7b; width: 30%; \r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u4:after, .slide7 .sevenParamsBx .circleUnit1.u5:after, .slide7 .sevenParamsBx .circleUnit1.u6:after { \r\n\tright: inherit; left: 0;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u7:after{\r\n\tcontent: none;\r\n}\r\n.c100.big:before { content: ''; width: 30px; height: 30px; border-radius: 50%; background: #ade499; position: absolute; top: -9px; left: 50%; margin-left: -5px; z-index: 1; transform: rotate( 180deg ); box-shadow: 2px 2px 10px rgb(173 228 153 / 50%); }\r\n.slide7 .customSmall.c100{width: 0.7em; height: 0.7em; background-color: #dad6cf; float: none; display: inline-block; margin: 0 0.2em 0.5em 0.2em;}\r\n.slide7 .customSmall.c100 > span{color: #807e7b; font-weight: bold; top: 39%; width: 100%; font-size: 0.18em;}\r\n.slide7 .customSmall.c100 .slice{width: 0.72em; height: 0.72em;}\r\n.slide7 .customSmall.c100 .bar{width: 0.62em; height: 0.62em; border-color: #ff5722 !important;}\r\n.slide7 .customSmall.c100 .fill{border-color: #ff5722 !important; width: 0.62em; height: 0.62em;}\r\n.slide7 .customSmall.c100:after{top: 0.02em; left: 0.02em; width: 0.66em; height: 0.66em;}\r\n.slide7 .customSmall.c100 h3 { font-size: 0.15em; width: 120%; text-align: center; position: absolute; top: 110%; left:-10%; }\r\n.slide7 .thankYouWrap .imgTick{display: block; width: 50px; margin: 1em auto;}\r\n.slide7 .thankYouWrap h5{font-size: 1.4em; text-align: center; width: 80%; margin: 0 auto 1em auto; color: #5b5a5a;}\r\n.slide7 .thankYouWrap .btnStyle{width: 250px;}\r\n@media screen and (max-width: 960px) {\r\n  /*Camera Module*/\r\n  .video-overlay {\r\n    width: 375px;\r\n\twidth: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQuY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UsaUZBQWlGLGFBQWE7QUFDOUYsbUJBQW1CLG9CQUFvQjtBQUN2QyxzQkFBc0IsWUFBWSxDQUFDLFFBQVE7QUFDM0MsU0FBUyxZQUFZO0FBQ3JCLEtBQUssc0JBQXNCLENBQUMsNkJBQTZCLENBQUMseUJBQXlCO0FBQ25GLEtBQUssUUFBUTtBQUNiLGdCQUFnQixZQUFZLEVBQUUsU0FBUyxDQUFDO0FBQ3hDLGlCQUFpQixTQUFTLENBQUMsb0JBQW9CO0FBQy9DLEdBQUcsYUFBYTtBQUNoQixZQUFZLHdCQUF3QjtBQUNwQyxTQUFTLGVBQWU7QUFDeEIsSUFBSSxpQkFBaUI7QUFDckIsS0FBSyxlQUFlLENBQUMsVUFBVTtBQUMvQixrQkFBa0IsMkJBQTJCLENBQUMsYUFBYTtBQUMzRCxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0I7QUFDN0QsRUFBRSxzQ0FBc0M7QUFDeEMsTUFBTSxhQUFhO0FBQ25CLFFBQVEsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUI7QUFDN0UsSUFBSSxTQUFTO0FBQ2IsSUFBSSxhQUFhO0FBQ2pCLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDekIsZUFBZSxlQUFlO0FBQzlCLE9BQU8sUUFBUTtBQUNmLFNBQVMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLDBCQUEwQjtBQUN4RSxPQUFPLFFBQVEsQ0FBQyxTQUFTO0FBQ3pCLDZCQUE2QixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVM7QUFDbEYsYUFBYSxrQkFBa0I7QUFDL0IsMEVBQTBFLHlCQUF5QixDQUFDLGNBQWM7QUFDbEgsaUNBQWlDLGNBQWM7QUFDL0MsMkNBQTJDLHFCQUFxQixDQUFDLFNBQVM7QUFDMUUscUJBQXFCLDRCQUE0QixDQUE0RCxzQkFBc0I7QUFDbkksbUdB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eUI7QUFDM0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLHdCQUF3QjtBQUMxQjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLHdCQUF3QjtBQUMxQjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFD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RyxpQ0FBaUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztBQUMvRCwrQkFBK0IsYUFBYSxFQUFFLGNBQWMsRUFBRSxnQ0FBZ0MsQ0FBQztBQUMvRixnQ0FBZ0MsZ0NBQWdDLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztBQUNoRyxnQ0FBZ0MsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO0FBQ3pGLCtCQUErQixpQkFBaUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUM3SCwrQkFBK0IsY0FBYyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztBQUM3RSx5QkFBeUIsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsQ0FBQztBQUNuSCxnQ0FBZ0MsWUFBWSxDQUFDO0FBRTdDO0VBQ0UsZ0JBQWdCO0VBQ2hCO0lBQ0UsWUFBWTtDQUNmLFdBQVc7RUFDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgUmVzZXQgQ1NTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxuYXYsc2VjdGlvbixzdW1tYXJ5e2Rpc3BsYXk6YmxvY2t9XHJcbmF1ZGlvLGNhbnZhcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31cclxuYXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1cclxuW2hpZGRlbl17ZGlzcGxheTpub25lfVxyXG5odG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1cclxuYm9keXttYXJnaW46MH1cclxuYTpmb2N1cywgOmZvY3Vze291dGxpbmU6bm9uZTsgYm9yZGVyOiAwO31cclxuYTphY3RpdmUsYTpob3ZlcntvdXRsaW5lOjA7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XHJcbmgxe2ZvbnQtc2l6ZToyZW19XHJcbmFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206MXB4IGRvdHRlZH1cclxuYixzdHJvbmd7Zm9udC13ZWlnaHQ6NzAwfVxyXG5kZm57Zm9udC1zdHlsZTppdGFsaWN9XHJcbm1hcmt7YmFja2dyb3VuZDojZmYwO2NvbG9yOiMwMDB9XHJcbmNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxzZXJpZjtmb250LXNpemU6MWVtfVxyXG5wcmV7d2hpdGUtc3BhY2U6cHJlO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkfVxyXG5xe3F1b3RlczpcIlxcMjAxQ1wiIFwiXFwyMDFEXCIgXCJcXDIwMThcIiBcIlxcMjAxOVwifVxyXG5zbWFsbHtmb250LXNpemU6ODAlfVxyXG5zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1cclxuc3Vwe3RvcDotLjVlbX1cclxuc3Vie2JvdHRvbTotLjI1ZW19XHJcbmltZ3tib3JkZXI6MDtvdXRsaW5lOm5vbmV9XHJcbnN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1cclxuZmlndXJle21hcmdpbjowfVxyXG5maWVsZHNldHtib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjttYXJnaW46MCAycHg7cGFkZGluZzouMzVlbSAuNjI1ZW0gLjc1ZW19XHJcbmxlZ2VuZHtib3JkZXI6MDtwYWRkaW5nOjB9XHJcbmJ1dHRvbixpbnB1dCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTttYXJnaW46MDtvdXRsaW5lOjB9XHJcbmJ1dHRvbixpbnB1dHtsaW5lLWhlaWdodDpub3JtYWx9XHJcbmJ1dHRvbixodG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0saW5wdXRbdHlwZT1cInJlc2V0XCJdLGlucHV0W3R5cGU9XCJzdWJtaXRcIl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtjdXJzb3I6cG9pbnRlcn1cclxuYnV0dG9uW2Rpc2FibGVkXSxpbnB1dFtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxpbnB1dFt0eXBlPVwicmFkaW9cIl17Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkOy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveH1cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfVxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfVxyXG50ZXh0YXJlYXtvdmVyZmxvdzphdXRvO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxudGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9XHJcbmF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7b3V0bGluZTpub25lO2NvbG9yOiMwMDB9XHJcbnVse21hcmdpbjowO3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmV9XHJcbnVsIGxpe21hcmdpbjowO3BhZGRpbmc6MH1cclxuLmFsaWduQ2VudGVye3RleHQtYWxpZ246Y2VudGVyfVxyXG5ib2R5e2JhY2tncm91bmQ6I2ZmZjtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTogJ0dlb2dyb3Rlc3F1ZS1SZWd1bGFyJztmb250LXdlaWdodDo0MDA7Y29sb3I6IzFiMWExYTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbi5jbGVhciwuYWZ0ZXJ7Y2xlYXI6Ym90aH1cclxuLmNsZWFyOmFmdGVyLC5hZnRlcjphZnRlcnt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbnRlbnQ6XCIgXCI7Y2xlYXI6Ym90aDtoZWlnaHQ6MH1cclxuKiBodG1sIC5jbGVhciwqIGh0bWwgLmFmdGVye3pvb206MTtjbGVhcjpib3RoO2ZvbnQtc2l6ZToxcHghaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjFweCFpbXBvcnRhbnR9XHJcbjpmaXJzdC1jaGlsZCtodG1sIC5jbGVhciw6Zmlyc3QtY2hpbGQraHRtbCAuYWZ0ZXJ7em9vbToxO2NsZWFyOmJvdGg7Zm9udC1zaXplOjFweCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MXB4IWltcG9ydGFudH1cclxuaW1ne2JvcmRlcjowIG5vbmV9XHJcbi50b1JpZ2h0e2Zsb2F0OnJpZ2h0IWltcG9ydGFudH1cclxuLnRvTGVmdHtmbG9hdDpsZWZ0IWltcG9ydGFudH1cclxuLnRvQ2VudGVye2Zsb2F0Om5vbmUhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0b31cclxuLm5vUGFkVG9we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fVxyXG5odG1sLGJvZHl7bWluLWhlaWdodDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7d2lkdGg6MTAwJTt9XHJcbip7bWFyZ2luOjA7cGFkZGluZzowfVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgUmVzZXQgQ1NTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4iLCJAaW1wb3J0ICdyZXNldC5jc3MnO1xyXG5cclxuLypTbGlkZXMqL1xyXG5zZWN0aW9ue1xyXG4gIHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDQ1MHB4OyBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNsaWRlMSBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKkNhbWVyYSBNb2R1bGUqL1xyXG4udmlkZW8tb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogNjQwcHg7XHJcbn1cclxuXHJcbi51cGxvYWQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51cGxvYWQtYnV0dG9uIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlNyAuaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNsaWRlNyAuZmFjZU1lc2h7XHJcblx0cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZTcgLmltYWdlVmlld3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiA0NiU7IG1hcmdpbjogMWVtIGF1dG87IGJvcmRlci1yYWRpdXM6IDEwcHg7IG92ZXJmbG93OiBoaWRkZW47IHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qR2xvYmFsKi9cclxuc2VjdGlvbntcclxuXHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2JnLmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgI2ZmZjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxufVxyXG5cclxuLypTbGlkZSAxKi9cclxuXHJcbi8qU2xpZGUgMiovXHJcbi8qIC5zbGlkZTJ7cGFkZGluZzowIDJlbTsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLnNsaWRlMiAubG9nb3t3aWR0aDo1MCU7IG1hcmdpbjowIGF1dG87IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAxLjVlbSAwO31cclxuLnNsaWRlMiBoMXtmb250LXNpemU6IDEuM2VtOyBtYXJnaW4tYm90dG9tOiAwLjVlbTt9XHJcbi5zbGlkZTIgcHtmb250LXNpemU6IDAuOGVtOyBsaW5lLWhlaWdodDogMS41ZW07IG1hcmdpbi1ib3R0b206IDA7fVxyXG4uc2xpZGUyIGltZ3tkaXNwbGF5OiBibG9jazsgd2lkdGg6IDk1JTsgbWFyZ2luOiAwIGF1dG87fVxyXG4uc2xpZGUyIGxhYmVse2NvbG9yOiM1YjVhNWE7IG1hcmdpbi1ib3R0b206IDFlbTsgbWFyZ2luLXRvcDogMC41ZW07IGZvbnQtc2l6ZTogMC44ZW07fVxyXG4uc2xpZGUyIC5idG5TdHlsZXtjb2xvcjojNDE0MTQxOyBiYWNrZ3JvdW5kOiAjZmZlNzZiOyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZlNzZiIDAlLCAjZmZmNWM1IDEwMCUpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZlNzZiIDAlLCNmZmY1YzUgMTAwJSk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZmZlNzZiIDAlLCNmZmY1YzUgMTAwJSk7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZlNzZiJywgZW5kQ29sb3JzdHI9JyNmZmY1YzUnLEdyYWRpZW50VHlwZT0wICk7IGRpc3BsYXk6IGJsb2NrOyBib3JkZXI6IDA7IG91dGxpbmU6IDA7IHBhZGRpbmc6IDEwcHggM2VtOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxLjFlbTsgYm9yZGVyLXJhZGl1czogNTBweDsgbWFyZ2luOiAwIGF1dG8gMCBhdXRvOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fSAqL1xyXG5cclxuLypvbmJvYXJkaW5nKi9cclxuLm9uYm9hcmRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nLmxhc3RTbGlkZSA6Om5nLWRlZXAgLm93bC1kb3RzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1kb3RzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmM2U1ZTQ7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLW5hdiBbY2xhc3MqPW93bC1dIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGluay1yZ2JhKSwgLjUpO1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1uYXYgLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm9uYm9hcmRpbmcgOjpuZy1kZWVwIC5vd2wtbmF2IC5vd2wtbmV4dC5kaXNhYmxlZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9uYm9hcmRpbmdTa2lwIHtcclxuICBjb2xvcjogdmFyKC0tcGluayk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyAub25ib2FyZGluZ1NraXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI0cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLm9uYm9hcmRTbGlkZVdoaXRlT3ZlcmxheSB7XHJcbiAgLyogYmFja2dyb3VuZDogdXJsKC4vLi4vYXNzZXRzL25ld2Fzc2V0cy93aGl0ZWN1cnZlLnBuZykgbm8tcmVwZWF0IDAgO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXkgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDh2aDtcclxufVxyXG5cclxuLm9uYm9hcmRTbGlkZVdoaXRlT3ZlcmxheS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBwYWRkaW5nOiAxMjBweCA0MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXktY29udGFpbmVyIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNjBweFxyXG59XHJcblxyXG4ub25ib2FyZFNsaWRlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ub25ib2FyZGluZ1NsaWRlMSAub25ib2FyZFNsaWRlV2hpdGVPdmVybGF5IHtcclxuICAvKiBwYWRkaW5nOiAxMTBweCA4MHB4IDA7ICovXHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nU2xpZGUyIC5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXksIC5vbmJvYXJkaW5nU2xpZGUzIC5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXkge1xyXG4gIC8qIHBhZGRpbmc6IDExMHB4IDMwcHggMDsgKi9cclxufVxyXG5cclxuLm9uYm9hcmRpbmdTbGlkZTEgLm9uYm9hcmRTbGlkZVdoaXRlT3ZlcmxheSBpbWcge1xyXG4gIC8qIG1heC13aWR0aDogMTYwcHg7ICovXHJcbn1cclxuXHJcbmxhYmVsLnRlcm1zcHJpdmFjeSBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubGFiZWwudGVybXNwcml2YWN5IHNwYW4ge1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG5sYWJlbC50ZXJtc3ByaXZhY3kge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxubGFiZWwudGVybXNwcml2YWN5IGlucHV0OmNoZWNrZWQgKyBzcGFuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinJTvuI9cIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5zbGlkZTMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZTMuc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbmltYXRpb246IHNob3dBbmltYXRlIC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd0FuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qU2xpZGUgMyovXHJcbi5zbGlkZTMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNsaWRlMyBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zbGlkZTMgLm93bC1pdGVte2Rpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDQ4JTsgbWFyZ2luOiAxZW0gYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLnNsaWRlMyAub3dsLWl0ZW0gaW1ne3dpZHRoOiAxMDAlO31cclxuLnNsaWRlMyAub3dsLWl0ZW0gaDN7Zm9udC1zaXplOiAxZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zdHlsZTogaXRhbGljOyBwYWRkaW5nLXRvcDogM2VtO31cclxuLnNsaWRlMyAub3dsLWl0ZW0gcHtmb250LXNpemU6IDFlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMC41ZW07fVxyXG4vKi5zbGlkZTMgaW5wdXRbdHlwZT1cInJhZGlvXCJde3dpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBvdmVyZmxvdzogaGlkZGVuOyB2aXNpYmlsaXR5OiBoaWRkZW47fSovXHJcbi5zdGVwczF0bzN7cG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxZW07IGJhY2tncm91bmQ6ICNmZmYwZTk7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy10b3A6IDJlbTsgcGFkZGluZy1ib3R0b206IDFlbTsgYm9yZGVyLXJhZGl1czogNjBweCA2MHB4IDAgMDsgYm9yZGVyLXRvcDogMS41cHggc29saWQgI2ZmYzRhZTt9XHJcbi5zdGVwczF0bzMgbGl7ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMzIlO31cclxuLnN0ZXBzMXRvMyBsaSBhe2NvbG9yOiAjYTQ3NjYwOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwdmg7IHdpZHRoOiAxMHZoOyBtYXJnaW46IDAgYXV0bzsgb3BhY2l0eTogMC42O31cclxuLnN0ZXBzMXRvMyBsaSBhOmFmdGVye2NvbnRlbnQ6IFwiIFwiOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNhNDc2NjA7fVxyXG4uc3RlcHMxdG8zIGxpIGEuc2VsZWN0ZWR7b3BhY2l0eTogMTt9XHJcbi5zdGVwczF0bzMgbGkgYS5zZWxlY3RlZDphZnRlcntib3JkZXItd2lkdGg6IDJweDt9XHJcbi5zdGVwczF0bzMgbGkgc3Ryb25ne2Rpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDJlbTsgaGVpZ2h0OiAxMHZoOyBsaW5lLWhlaWdodDogMTB2aDt9XHJcbi5zdGVwczF0bzMgbGkgc3BhbntkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAwLjdlbTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICNmZmYwZTk7IHotaW5kZXg6IDE7fVxyXG4uYnRuTmV4dHtmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogMWVtIDA7IGRpc3BsYXk6IGJsb2NrO31cclxuLnNsaWRlMyBpbnB1dFt0eXBlPVwicmFkaW9cIl17cG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgdmlzaWJpbGl0eTogaGlkZGVuO31cclxuLyogLnNsaWRlMyAuZ2VuZGVyQ2Fyb3VzZWx7cGFkZGluZzogMmVtIDAgMWVtIDA7fSAqL1xyXG4uc2xpZGUzIC5nZW5kZXJDYXJvdXNlbCBoM3tmb250LXNpemU6IDFlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAyZW07IGZvbnQtc3R5bGU6IGl0YWxpYzt9XHJcbi5zbGlkZTMgLmdlbmRlckNhcm91c2VsIHB7Zm9udC1zaXplOiAwLjllbTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXN0eWxlOiBpdGFsaWM7fVxyXG4uc2xpZGUzIC5idG5OZXh0e3RleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7fVxyXG4vKiAuc2xpZGUzIC5uZXh0UHJldkJ4e2JhY2tncm91bmQ6IG5vbmU7fSAqL1xyXG4vKiAuc2xpZGUzIDo6bmctZGVlcCAub3dsLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2UzZTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgNDhweCA2cHggcmdiYSgyMDAsIDE0OSwgMTU1LCAwLjQzKTtcclxufSAqL1xyXG4uc2xpZGUzIDo6bmctZGVlcCAub3dsLWl0ZW0ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2UzZTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgNDhweCA2cHggcmdiYSgyMDAsIDE0OSwgMTU1LCAwLjQzKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zbGlkZTMgOjpuZy1kZWVwIC5vd2wtaXRlbTpub3QoLmFjdGl2ZS5jZW50ZXIpIHtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSguNik7XHJcbn1cclxuLnNsaWRlMyA6Om5nLWRlZXAgLm93bC1pdGVtLmFjdGl2ZS5jZW50ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxufVxyXG4uc2xpZGUzIDo6bmctZGVlcCAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Utb3V0ZXIge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vKkdlbmRlciBTbGlkZSovXHJcblxyXG4udG9wY3VydmUsIC5ib3R0b21jdXJ2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9wY3VydmUgaW1nLCAuYm90dG9tY3VydmUgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvcGN1cnZlIC50b3BjdXJ2ZS1jb250YWluZXIsIC5ib3R0b21jdXJ2ZSAuYm90dG9tY3VydmUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vYXNzZXRzL25ld2Fzc2V0cy9nZW5kZXItYmcucG5nKSAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJvdHRvbWN1cnZlIC5ib3R0b21jdXJ2ZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEyMHB4IDQwcHggMDtcclxufVxyXG5cclxuc2VjdGlvbi5zbGlkZTMgPiAqIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3BjdXJ2ZS1jb250YWluZXIgZGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLnRvcGN1cnZlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogc2VjdGlvbi5zbGlkZTMgLmJvdHRvbWN1cnZlLWNvbnRhaW5lciBsaSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbnNlY3Rpb24uc2xpZGUzIC5ib3R0b21jdXJ2ZS1jb250YWluZXIgbGkgYSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbnNlY3Rpb24uc2xpZGUzIC5ib3R0b21jdXJ2ZS1jb250YWluZXIgbGkgYSBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuc2VjdGlvbi5zbGlkZTMgLmJvdHRvbWN1cnZlLWNvbnRhaW5lciBsaSBhLnNlbGVjdGVkIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbnNlY3Rpb24uc2xpZGUzIC5ib3R0b21jdXJ2ZS1jb250YWluZXIgbGkgYS5zZWxlY3RlZCBzdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLypTbGlkZSA0IEFnZSBTbGlkZXIgKi9cclxuLyogLnNsaWRlNCBoMXt0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMS41ZW07IGNvbG9yOiAjNWI1YTVhO30gKi9cclxuLnNsaWRlNCB1bC5nZW5kZXJTbGlkZXIgbGl7ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNDglOyBtYXJnaW46IDFlbSBhdXRvOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc2xpZGU0IHVsLmdlbmRlclNsaWRlciBsaSBpbWd7d2lkdGg6IDEwMCU7fVxyXG4uc2xpZGU0IGgze2ZvbnQtc2l6ZTogMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDJlbTsgZm9udC1zdHlsZTogaXRhbGljO31cclxuLnNsaWRlNCBwe2ZvbnQtc2l6ZTogMC45ZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zdHlsZTogaXRhbGljO31cclxuLyouc2xpZGUzIGlucHV0W3R5cGU9XCJyYWRpb1wiXXt3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgb3ZlcmZsb3c6IGhpZGRlbjsgdmlzaWJpbGl0eTogaGlkZGVuO30qL1xyXG4uc2xpZGU0IC5hZ2VTZWxlY3RvcntwYWRkaW5nOiAyZW0gMDsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLnNsaWRlNCAuYWdlU2VsZWN0b3IgLmFnZUlucHV0e3BhZGRpbmc6IDA7IGJvcmRlcjogMDsgZm9udC1zaXplOiAzZW07IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwOyB3aWR0aDogMTAwJTsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi1ib3R0b206IDNlbTt9XHJcbi5nbHlwaGljb257d2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDt9XHJcbi5zbGlkZTQgLmFnZVNlbGVjdG9yQnh7cGFkZGluZzogMmVtIDA7fVxyXG4uc2xpZGU0IC5hZ2VTZWxlY3RvckJ4IGJ1dHRvbnt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4OyBwYWRkaW5nOiAwOyBmb250LXN0eWxlOiBub3JtYWw7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbi5zbGlkZTQgLmFnZVNlbGVjdG9yQnggLmFnZVR4dEJpZ3tiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IDA7IGZvbnQtc2l6ZTogM2VtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDE1MHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cclxuLmJ0bk5leHR7Zm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDFlbSAwOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDQ0JTsgdGV4dC1hbGlnbjogcmlnaHQ7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtc2l6ZTogMC45ZW07fVxyXG4uYnRuTmV4dC50b1JpZ2h0e3RleHQtYWxpZ246IGxlZnQ7fVxyXG4vKiAubmV4dFByZXZCeHtiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL3BhZ2luYXRpb24tYm9yZGVyLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogYXV0byA3MCU7IG1hcmdpbi10b3A6IDJlbTt9ICovXHJcbi8qIC5uZXh0UHJldkJ4IGltZ3ttYXJnaW46IDAgMTBweDsgd2lkdGg6IDI1cHg7fSAqL1xyXG5cclxuLm5leHRQcmV2QnggeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLm5leHRQcmV2QnggLm9uYm9hcmRpbmdTa2lwOm50aC1jaGlsZCgyKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5uZXh0UHJldkJ4IC5vbmJvYXJkaW5nU2tpcDpudGgtY2hpbGQoMik6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNHB4O1xyXG59XHJcblxyXG4vKiAuc2xpZGU0IDo6bmctZGVlcCAub3dsLWl0ZW0ge1xyXG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG59ICovXHJcblxyXG4uc2xpZGU0IDo6bmctZGVlcCAub3dsLWl0ZW0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuXHJcbi5zbGlkZTQgOjpuZy1kZWVwIC5vd2wtaXRlbSBsYWJlbCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG5cclxuLypTbGlkZSA1Ki9cclxuLyogLnNsaWRlNXtwYWRkaW5nOiAyZW0gMDt9ICovXHJcbi8qIC5zbGlkZTUgaDF7dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEuNWVtOyBjb2xvcjogIzViNWE1YTsgcGFkZGluZzogMCAyZW07fSAqL1xyXG4uc2xpZGU1IHVsLmdlbmRlclNsaWRlciBsaXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA0OCU7IG1hcmdpbjogMWVtIGF1dG87IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5zbGlkZTUgdWwuZ2VuZGVyU2xpZGVyIGxpIGltZ3t3aWR0aDogMTAwJTt9XHJcbi5zbGlkZTUgdWwuZ2VuZGVyU2xpZGVyIGxpIGgze2ZvbnQtc2l6ZTogMS4yZW07fVxyXG4vKi5zbGlkZTMgaW5wdXRbdHlwZT1cInJhZGlvXCJde3dpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBvdmVyZmxvdzogaGlkZGVuOyB2aXNpYmlsaXR5OiBoaWRkZW47fSovXHJcbi5zbGlkZTUgLmJ0bk5leHR7Zm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDFlbSAwOyBkaXNwbGF5OiBibG9jazt9XHJcbi8qIC5zbGlkZTUgLnNraW5TbGlkZXJ7cGFkZGluZzogNGVtIDAgMmVtIDA7IG92ZXJmbG93OiBoaWRkZW47fSAqL1xyXG5cclxuLypTbGlkZSA2Ki9cclxuLnNsaWRlNntwYWRkaW5nOiAzZW0gMDt9O1xyXG4vKiAuc2xpZGU2IGgxe3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxLjVlbTsgY29sb3I6ICM1YjVhNWE7IHBhZGRpbmctdG9wOiAxZW07fSAqL1xyXG4ud2ViY2FtVW5pdCB2aWRlbywgLm1pcnJvcmVke2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTt9XHJcbi53ZWJjYW17b3ZlcmZsb3c6IGhpZGRlbjsgd2lkdGg6IDgwJTsgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW46IDFlbSBhdXRvOyB3aWR0aDogMjg4cHg7IGhlaWdodDogMzg0cHg7fVxyXG4ud2ViY2FtIC52aWRlby1vdmVybGF5e3dpZHRoOiAxMDAlO31cclxuLnNsaWRlNiAuaW1hZ2VDdGF7dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAxZW0gMDt9XHJcbi5zbGlkZTYgLmltYWdlQ3RhIGF7cG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uc2xpZGU2IC5pbWFnZUN0YSBpbWd7d2lkdGg6IDEwMHB4OyBwYWRkaW5nOiAwIDEwcHg7fVxyXG4uc2xpZGU2IC5pbWFnZUN0YSBpbnB1dHtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb3BhY2l0eTogMDsgei1pbmRleDogMTt9XHJcbi8qIC5zbGlkZTYgcHtwYWRkaW5nOiAwIDJlbTt9ICovXHJcbiNhbmFseXNpbmd7d2lkdGg6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB6LWluZGV4OiA5OyBiYWNrZ3JvdW5kOiAjZmZmNmRiOyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZmNmRiIDAlLCAjZmNkYWQxIDEwMCUpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZmNmRiIDAlLCNmY2RhZDEgMTAwJSk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZmZmNmRiIDAlLCNmY2RhZDEgMTAwJSk7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmNmRiJywgZW5kQ29sb3JzdHI9JyNmY2RhZDEnLEdyYWRpZW50VHlwZT0wICk7fVxyXG5wLnRvcHRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbn1cclxucC5ib3R0b21kZXNjIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcclxufVxyXG4uYm90dG9tY3VydmUuc2xpZGU2Ym90dG9tY3VydmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmJvdHRvbWN1cnZlLnNsaWRlNmJvdHRvbWN1cnZlID4gaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLypTbGlkZSA3Ki9cclxuLnNsaWRlNyB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuLnNsaWRlNyBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cdGNvbG9yOiM1YjVhNWE7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGU3IC50b3AzUHJpb3JpdGllcyB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlNyAudG9wM1ByaW9yaXRpZXMgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzViNWE1YTtcclxuXHRtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5zbGlkZTcgLmNpcmNsZVVuaXQxIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxufVxyXG5cclxuLnNsaWRlNyAuY2lyY2xlVW5pdDEgaDMge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuXHRjb2xvcjogIzgwN2U3YjtcclxuXHRwYWRkaW5nOiAwLjVlbSAwO1xyXG5cdHdpZHRoOiA3NSU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZTcgLmNpcmNsZVVuaXQxIHNwYW4ge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkOyBib3JkZXItcmFkaXVzOiAxMDBweDsgYm9yZGVyOiAxcHggc29saWQgIzgwN2U3Yjsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBsaW5lLWhlaWdodDogMzhweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzgwN2U3YjsgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLnNsaWRlNyAueW91clNraW5BbmxheXNpc3t3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9XHJcblxyXG4uc2xpZGU3IC55b3VyU2tpbkFubGF5c2lzIGgye1xyXG5cdGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzViNWE1YTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG59XHJcblxyXG5cclxuLnNsaWRlNyAueW91clNraW5BbmxheXNpcyBwe1xyXG5cdGZvbnQtc2l6ZTogMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnlvdXJTa2luQW5sYXlzaXMgdWwgbGl7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGU3IC55b3VyU2tpbkFubGF5c2lzIHVsIC5jaXJjbGVVbml0MXtcclxuXHRkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZTcgLnlvdXJTa2luQW5sYXlzaXMgLnByb2RJbWd7XHJcblx0d2lkdGg6IDkwJTsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDJlbSAwOyBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlNyAueW91clNraW5BbmxheXNpcyAuYnV5Tm93TGlua3N7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnRhYntcclxuXHRiYWNrZ3JvdW5kOiAjZDdlNmY0OyBtYXJnaW4tYm90dG9tOiAyZW07IHBhZGRpbmc6IDJlbTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGU3IC5jaXJjbGVVbml0MS5iaWdDaXJjbGVVbml0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlNyAuY2lyY2xlVW5pdDEuYmlnQ2lyY2xlVW5pdCBzcGFuIHtcclxuICAgIHdpZHRoOiAxNTBweDsgXHJcblx0aGVpZ2h0OiAxNTBweDsgXHJcblx0bGluZS1oZWlnaHQ6IDEwMHB4OyBcclxuXHRmb250LXNpemU6IDQ1cHg7IFxyXG5cdGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jbGVhciwgLmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNsZWFyOmFmdGVyLCAuYWZ0ZXI6YWZ0ZXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udzEwMHt3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7fVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKlxyXG4gKiBDU1MgUGVyY2VudGFnZSBDaXJjbGVcclxuICogQXV0aG9yOiBBbmRyZSBGaXJjaG93XHJcbiAqXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ucmVjdC1hdXRvLCAuYzEwMC5wNTEgLnNsaWNlLCAuYzEwMC5wNTIgLnNsaWNlLCAuYzEwMC5wNTMgLnNsaWNlLCAuYzEwMC5wNTQgLnNsaWNlLCAuYzEwMC5wNTUgLnNsaWNlLCAuYzEwMC5wNTYgLnNsaWNlLCAuYzEwMC5wNTcgLnNsaWNlLCAuYzEwMC5wNTggLnNsaWNlLCAuYzEwMC5wNTkgLnNsaWNlLCAuYzEwMC5wNjAgLnNsaWNlLCAuYzEwMC5wNjEgLnNsaWNlLCAuYzEwMC5wNjIgLnNsaWNlLCAuYzEwMC5wNjMgLnNsaWNlLCAuYzEwMC5wNjQgLnNsaWNlLCAuYzEwMC5wNjUgLnNsaWNlLCAuYzEwMC5wNjYgLnNsaWNlLCAuYzEwMC5wNjcgLnNsaWNlLCAuYzEwMC5wNjggLnNsaWNlLCAuYzEwMC5wNjkgLnNsaWNlLCAuYzEwMC5wNzAgLnNsaWNlLCAuYzEwMC5wNzEgLnNsaWNlLCAuYzEwMC5wNzIgLnNsaWNlLCAuYzEwMC5wNzMgLnNsaWNlLCAuYzEwMC5wNzQgLnNsaWNlLCAuYzEwMC5wNzUgLnNsaWNlLCAuYzEwMC5wNzYgLnNsaWNlLCAuYzEwMC5wNzcgLnNsaWNlLCAuYzEwMC5wNzggLnNsaWNlLCAuYzEwMC5wNzkgLnNsaWNlLCAuYzEwMC5wODAgLnNsaWNlLCAuYzEwMC5wODEgLnNsaWNlLCAuYzEwMC5wODIgLnNsaWNlLCAuYzEwMC5wODMgLnNsaWNlLCAuYzEwMC5wODQgLnNsaWNlLCAuYzEwMC5wODUgLnNsaWNlLCAuYzEwMC5wODYgLnNsaWNlLCAuYzEwMC5wODcgLnNsaWNlLCAuYzEwMC5wODggLnNsaWNlLCAuYzEwMC5wODkgLnNsaWNlLCAuYzEwMC5wOTAgLnNsaWNlLCAuYzEwMC5wOTEgLnNsaWNlLCAuYzEwMC5wOTIgLnNsaWNlLCAuYzEwMC5wOTMgLnNsaWNlLCAuYzEwMC5wOTQgLnNsaWNlLCAuYzEwMC5wOTUgLnNsaWNlLCAuYzEwMC5wOTYgLnNsaWNlLCAuYzEwMC5wOTcgLnNsaWNlLCAuYzEwMC5wOTggLnNsaWNlLCAuYzEwMC5wOTkgLnNsaWNlLCAuYzEwMC5wMTAwIC5zbGljZSB7XHJcbiAgY2xpcDogcmVjdChhdXRvLCBhdXRvLCBhdXRvLCBhdXRvKTtcclxufVxyXG5cclxuLnBpZSwgLmMxMDAgLmJhciwgLmMxMDAucDUxIC5maWxsLCAuYzEwMC5wNTIgLmZpbGwsIC5jMTAwLnA1MyAuZmlsbCwgLmMxMDAucDU0IC5maWxsLCAuYzEwMC5wNTUgLmZpbGwsIC5jMTAwLnA1NiAuZmlsbCwgLmMxMDAucDU3IC5maWxsLCAuYzEwMC5wNTggLmZpbGwsIC5jMTAwLnA1OSAuZmlsbCwgLmMxMDAucDYwIC5maWxsLCAuYzEwMC5wNjEgLmZpbGwsIC5jMTAwLnA2MiAuZmlsbCwgLmMxMDAucDYzIC5maWxsLCAuYzEwMC5wNjQgLmZpbGwsIC5jMTAwLnA2NSAuZmlsbCwgLmMxMDAucDY2IC5maWxsLCAuYzEwMC5wNjcgLmZpbGwsIC5jMTAwLnA2OCAuZmlsbCwgLmMxMDAucDY5IC5maWxsLCAuYzEwMC5wNzAgLmZpbGwsIC5jMTAwLnA3MSAuZmlsbCwgLmMxMDAucDcyIC5maWxsLCAuYzEwMC5wNzMgLmZpbGwsIC5jMTAwLnA3NCAuZmlsbCwgLmMxMDAucDc1IC5maWxsLCAuYzEwMC5wNzYgLmZpbGwsIC5jMTAwLnA3NyAuZmlsbCwgLmMxMDAucDc4IC5maWxsLCAuYzEwMC5wNzkgLmZpbGwsIC5jMTAwLnA4MCAuZmlsbCwgLmMxMDAucDgxIC5maWxsLCAuYzEwMC5wODIgLmZpbGwsIC5jMTAwLnA4MyAuZmlsbCwgLmMxMDAucDg0IC5maWxsLCAuYzEwMC5wODUgLmZpbGwsIC5jMTAwLnA4NiAuZmlsbCwgLmMxMDAucDg3IC5maWxsLCAuYzEwMC5wODggLmZpbGwsIC5jMTAwLnA4OSAuZmlsbCwgLmMxMDAucDkwIC5maWxsLCAuYzEwMC5wOTEgLmZpbGwsIC5jMTAwLnA5MiAuZmlsbCwgLmMxMDAucDkzIC5maWxsLCAuYzEwMC5wOTQgLmZpbGwsIC5jMTAwLnA5NSAuZmlsbCwgLmMxMDAucDk2IC5maWxsLCAuYzEwMC5wOTcgLmZpbGwsIC5jMTAwLnA5OCAuZmlsbCwgLmMxMDAucDk5IC5maWxsLCAuYzEwMC5wMTAwIC5maWxsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAwLjA0ZW0gc29saWQgI2FkZTQ5OTtcclxuICB3aWR0aDogMC45MmVtO1xyXG4gIGhlaWdodDogMC45MmVtO1xyXG4gIGNsaXA6IHJlY3QoMGVtLCAwLjVlbSwgMWVtLCAwZW0pO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4ucGllLWZpbGwsIC5jMTAwLnA1MSAuYmFyOmFmdGVyLCAuYzEwMC5wNTEgLmZpbGwsIC5jMTAwLnA1MiAuYmFyOmFmdGVyLCAuYzEwMC5wNTIgLmZpbGwsIC5jMTAwLnA1MyAuYmFyOmFmdGVyLCAuYzEwMC5wNTMgLmZpbGwsIC5jMTAwLnA1NCAuYmFyOmFmdGVyLCAuYzEwMC5wNTQgLmZpbGwsIC5jMTAwLnA1NSAuYmFyOmFmdGVyLCAuYzEwMC5wNTUgLmZpbGwsIC5jMTAwLnA1NiAuYmFyOmFmdGVyLCAuYzEwMC5wNTYgLmZpbGwsIC5jMTAwLnA1NyAuYmFyOmFmdGVyLCAuYzEwMC5wNTcgLmZpbGwsIC5jMTAwLnA1OCAuYmFyOmFmdGVyLCAuYzEwMC5wNTggLmZpbGwsIC5jMTAwLnA1OSAuYmFyOmFmdGVyLCAuYzEwMC5wNTkgLmZpbGwsIC5jMTAwLnA2MCAuYmFyOmFmdGVyLCAuYzEwMC5wNjAgLmZpbGwsIC5jMTAwLnA2MSAuYmFyOmFmdGVyLCAuYzEwMC5wNjEgLmZpbGwsIC5jMTAwLnA2MiAuYmFyOmFmdGVyLCAuYzEwMC5wNjIgLmZpbGwsIC5jMTAwLnA2MyAuYmFyOmFmdGVyLCAuYzEwMC5wNjMgLmZpbGwsIC5jMTAwLnA2NCAuYmFyOmFmdGVyLCAuYzEwMC5wNjQgLmZpbGwsIC5jMTAwLnA2NSAuYmFyOmFmdGVyLCAuYzEwMC5wNjUgLmZpbGwsIC5jMTAwLnA2NiAuYmFyOmFmdGVyLCAuYzEwMC5wNjYgLmZpbGwsIC5jMTAwLnA2NyAuYmFyOmFmdGVyLCAuYzEwMC5wNjcgLmZpbGwsIC5jMTAwLnA2OCAuYmFyOmFmdGVyLCAuYzEwMC5wNjggLmZpbGwsIC5jMTAwLnA2OSAuYmFyOmFmdGVyLCAuYzEwMC5wNjkgLmZpbGwsIC5jMTAwLnA3MCAuYmFyOmFmdGVyLCAuYzEwMC5wNzAgLmZpbGwsIC5jMTAwLnA3MSAuYmFyOmFmdGVyLCAuYzEwMC5wNzEgLmZpbGwsIC5jMTAwLnA3MiAuYmFyOmFmdGVyLCAuYzEwMC5wNzIgLmZpbGwsIC5jMTAwLnA3MyAuYmFyOmFmdGVyLCAuYzEwMC5wNzMgLmZpbGwsIC5jMTAwLnA3NCAuYmFyOmFmdGVyLCAuYzEwMC5wNzQgLmZpbGwsIC5jMTAwLnA3NSAuYmFyOmFmdGVyLCAuYzEwMC5wNzUgLmZpbGwsIC5jMTAwLnA3NiAuYmFyOmFmdGVyLCAuYzEwMC5wNzYgLmZpbGwsIC5jMTAwLnA3NyAuYmFyOmFmdGVyLCAuYzEwMC5wNzcgLmZpbGwsIC5jMTAwLnA3OCAuYmFyOmFmdGVyLCAuYzEwMC5wNzggLmZpbGwsIC5jMTAwLnA3OSAuYmFyOmFmdGVyLCAuYzEwMC5wNzkgLmZpbGwsIC5jMTAwLnA4MCAuYmFyOmFmdGVyLCAuYzEwMC5wODAgLmZpbGwsIC5jMTAwLnA4MSAuYmFyOmFmdGVyLCAuYzEwMC5wODEgLmZpbGwsIC5jMTAwLnA4MiAuYmFyOmFmdGVyLCAuYzEwMC5wODIgLmZpbGwsIC5jMTAwLnA4MyAuYmFyOmFmdGVyLCAuYzEwMC5wODMgLmZpbGwsIC5jMTAwLnA4NCAuYmFyOmFmdGVyLCAuYzEwMC5wODQgLmZpbGwsIC5jMTAwLnA4NSAuYmFyOmFmdGVyLCAuYzEwMC5wODUgLmZpbGwsIC5jMTAwLnA4NiAuYmFyOmFmdGVyLCAuYzEwMC5wODYgLmZpbGwsIC5jMTAwLnA4NyAuYmFyOmFmdGVyLCAuYzEwMC5wODcgLmZpbGwsIC5jMTAwLnA4OCAuYmFyOmFmdGVyLCAuYzEwMC5wODggLmZpbGwsIC5jMTAwLnA4OSAuYmFyOmFmdGVyLCAuYzEwMC5wODkgLmZpbGwsIC5jMTAwLnA5MCAuYmFyOmFmdGVyLCAuYzEwMC5wOTAgLmZpbGwsIC5jMTAwLnA5MSAuYmFyOmFmdGVyLCAuYzEwMC5wOTEgLmZpbGwsIC5jMTAwLnA5MiAuYmFyOmFmdGVyLCAuYzEwMC5wOTIgLmZpbGwsIC5jMTAwLnA5MyAuYmFyOmFmdGVyLCAuYzEwMC5wOTMgLmZpbGwsIC5jMTAwLnA5NCAuYmFyOmFmdGVyLCAuYzEwMC5wOTQgLmZpbGwsIC5jMTAwLnA5NSAuYmFyOmFmdGVyLCAuYzEwMC5wOTUgLmZpbGwsIC5jMTAwLnA5NiAuYmFyOmFmdGVyLCAuYzEwMC5wOTYgLmZpbGwsIC5jMTAwLnA5NyAuYmFyOmFmdGVyLCAuYzEwMC5wOTcgLmZpbGwsIC5jMTAwLnA5OCAuYmFyOmFmdGVyLCAuYzEwMC5wOTggLmZpbGwsIC5jMTAwLnA5OSAuYmFyOmFmdGVyLCAuYzEwMC5wOTkgLmZpbGwsIC5jMTAwLnAxMDAgLmJhcjphZnRlciwgLmMxMDAucDEwMCAuZmlsbCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jMTAwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxMjBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgMC4xZW0gMC4xZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmZGY2O1xyXG59XHJcbi5jMTAwICosIC5jMTAwICo6YmVmb3JlLCAuYzEwMCAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLmMxMDAuY2VudGVyIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYzEwMC5iaWcge1xyXG4gIGZvbnQtc2l6ZTogMjQwcHg7XHJcbn1cclxuLmMxMDAuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxufVxyXG4uYzEwMCA+IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDVlbTtcclxuICBmb250LXNpemU6IDAuMmVtO1xyXG4gIGNvbG9yOiAjYWRlNDk5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuXHR0b3A6IDMwJTsgbGluZS1oZWlnaHQ6IDFlbTtcclxufVxyXG4uYzEwMCA+IHNwYW4gc3Ryb25ne1xyXG5cdGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjNWI1YTVhO1xyXG59XHJcbi5jMTAwOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjA4ZW07XHJcbiAgbGVmdDogMC4wOGVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAwLjg0ZW07XHJcbiAgaGVpZ2h0OiAwLjg0ZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbn1cclxuLmMxMDAgLnNsaWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBjbGlwOiByZWN0KDBlbSwgMWVtLCAxZW0sIDAuNWVtKTtcclxufVxyXG4uYzEwMC5wMSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMy42ZGVnKTtcclxufVxyXG4uYzEwMC5wMiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuMmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy4yZGVnKTtcclxufVxyXG4uYzEwMC5wMyAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDUgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xyXG59XHJcbi5jMTAwLnA2IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDcgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDEwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcclxufVxyXG4uYzEwMC5wMTEgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM5LjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxufVxyXG4uYzEwMC5wMTIgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxufVxyXG4uYzEwMC5wMTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ2LjhkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxufVxyXG4uYzEwMC5wMTQgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUwLjRkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxufVxyXG4uYzEwMC5wMTUgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDU0ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xyXG59XHJcbi5jMTAwLnAxNiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNTcuNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG59XHJcbi5jMTAwLnAxNyAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjEuMmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG59XHJcbi5jMTAwLnAxOCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAxOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjguNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG59XHJcbi5jMTAwLnAyMCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XHJcbn1cclxuLmMxMDAucDIxIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDIyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3OS4yZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbn1cclxuLmMxMDAucDIzIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4Mi44ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbn1cclxuLmMxMDAucDI0IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDI1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4uYzEwMC5wMjYgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkzLjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxufVxyXG4uYzEwMC5wMjcgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDk3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wMjggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwMC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTAwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnAyOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTA0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDMwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xyXG59XHJcbi5jMTAwLnAzMSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTExLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDMyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMTUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDExNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wMzMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDExOC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTE4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAzNCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDM1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xyXG59XHJcbi5jMTAwLnAzNiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTI5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDM3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wMzggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAzOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDQwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xyXG59XHJcbi5jMTAwLnA0MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQ3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDQyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNDMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1NC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTU4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTguNGRlZyk7XHJcbn1cclxuLmMxMDAucDQ1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTYyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTYyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xyXG59XHJcbi5jMTAwLnA0NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTY1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDQ3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNjkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE2OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNDggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE3Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTcyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTc2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDUwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5jMTAwLnA1MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgzLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODMuNmRlZyk7XHJcbn1cclxuLmMxMDAucDUyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODcuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wNTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE5MC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTkwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA1NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTk0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDU1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xyXG59XHJcbi5jMTAwLnA1NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjAxLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDU3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMDUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNTggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIwOC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjA4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA1OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDYwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG59XHJcbi5jMTAwLnA2MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjE5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDYyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wNjMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA2NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjMwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDY1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzRkZWcpO1xyXG59XHJcbi5jMTAwLnA2NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjM3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDY3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNjggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0NC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQ0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA2OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQ4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDguNGRlZyk7XHJcbn1cclxuLmMxMDAucDcwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xyXG59XHJcbi5jMTAwLnA3MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjU1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDcyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNTkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI1OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNzMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI2Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjYyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA3NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjY2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDc1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG59XHJcbi5jMTAwLnA3NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjczLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzMuNmRlZyk7XHJcbn1cclxuLmMxMDAucDc3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzcuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wNzggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4MC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjgwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA3OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjg0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDgwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODhkZWcpO1xyXG59XHJcbi5jMTAwLnA4MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjkxLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDgyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyOTUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI5NS4yZGVnKTtcclxufVxyXG4uYzEwMC5wODMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI5OC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA4NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDg1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xyXG59XHJcbi5jMTAwLnA4NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzA5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDg3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMTMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wODggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMxNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA4OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzIwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDkwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xyXG59XHJcbi5jMTAwLnA5MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzI3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDkyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzNC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzM0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzM4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzguNGRlZyk7XHJcbn1cclxuLmMxMDAucDk1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDJkZWcpO1xyXG59XHJcbi5jMTAwLnA5NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzQ1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDk3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNDkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM0OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOTggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzUyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzU2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDEwMCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG4uYzEwMDpob3ZlciB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5jMTAwOmhvdmVyID4gc3BhbiB7XHJcbiAgd2lkdGg6IDMuMzNlbTtcclxuICBsaW5lLWhlaWdodDogMy4zM2VtO1xyXG4gIGZvbnQtc2l6ZTogMC4zZW07XHJcbiAgY29sb3I6ICMzMDdiYmI7XHJcbn1cclxuLmMxMDA6aG92ZXI6YWZ0ZXIge1xyXG4gIHRvcDogMC4wNGVtO1xyXG4gIGxlZnQ6IDAuMDRlbTtcclxuICB3aWR0aDogMC45MmVtO1xyXG4gIGhlaWdodDogMC45MmVtO1xyXG59XHJcbi5jMTAwLmRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmMxMDAuZGFyayAuYmFyLFxyXG4uYzEwMC5kYXJrIC5maWxsIHtcclxuICBib3JkZXItY29sb3I6ICNjNmZmMDAgIWltcG9ydGFudDtcclxufVxyXG4uYzEwMC5kYXJrID4gc3BhbiB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmMxMDAuZGFyazphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxufVxyXG4uYzEwMC5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNjNmZmMDA7XHJcbn1cclxuLmMxMDAuZ3JlZW4gLmJhciwgLmMxMDAuZ3JlZW4gLmZpbGwge1xyXG4gIGJvcmRlci1jb2xvcjogI2FkZTQ5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5jMTAwLmdyZWVuOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNhZGU0OTk7XHJcbn1cclxuLmMxMDAuZ3JlZW4uZGFyayAuYmFyLCAuYzEwMC5ncmVlbi5kYXJrIC5maWxsIHtcclxuICBib3JkZXItY29sb3I6ICM1ZmQ0MDAgIWltcG9ydGFudDtcclxufVxyXG4uYzEwMC5ncmVlbi5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICM1ZmQ0MDA7XHJcbn1cclxuLmMxMDAub3JhbmdlIC5iYXIsIC5jMTAwLm9yYW5nZSAuZmlsbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGQ5ZDIyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmMxMDAub3JhbmdlOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNkZDlkMjI7XHJcbn1cclxuLmMxMDAub3JhbmdlLmRhcmsgLmJhciwgLmMxMDAub3JhbmdlLmRhcmsgLmZpbGwge1xyXG4gIGJvcmRlci1jb2xvcjogI2UwODgzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5jMTAwLm9yYW5nZS5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNlMDg4MzM7XHJcbn1cclxuXHJcbi8qQ2lyY2xlIENTUyBFbmRzKi9cclxuXHJcbi8qU2xpZGUgTG9naW4qL1xyXG5cclxuc2VjdGlvbi5zbGlkZUxvZ2lue1xyXG4gIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgICAvKiBlc3RhYmxpc2ggZmxleCBjb250YWluZXIgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLyogbWFrZSBtYWluIGF4aXMgdmVydGljYWwgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogY2VudGVyIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogcGFkZGluZzogMCAyZW07ICovXHJcbn1cclxuXHJcbi8qIC5zbGlkZUxvZ2luIGgxe3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxLjVlbTsgY29sb3I6ICM1YjVhNWE7fSAqL1xyXG4uc2xpZGVMb2dpbiAjUHVzaElEe3dpZHRoOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGhlaWdodDogMDsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAtMTt9XHJcbi5zbGlkZUxvZ2luICN0eHROdW1iZXJ7Ym9yZGVyLXJhZGl1czogMTAwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IG1hcmdpbi1ib3R0b206IDFlbTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlO31cclxuLnNsaWRlTG9naW4gLmJ0blN0eWxle21hcmdpbi1ib3R0b206IDA7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5zbGlkZUxvZ2luIC5idG5TdHlsZSwgLnNsaWRlTG9naW4gaW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlMy5zbGlkZUxvZ2luIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2xpZGVMb2dpbiBmb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMCA0ZW07XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5yZWdpc3RlckJ4IHtcclxuXHRwYWRkaW5nOiAyZW0gMCAxZW0gMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3RlckJ4IGlucHV0LCAucmVnaXN0ZXJCeCBidXR0b24ge1xyXG5cdHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zb2NpYWxJY29ucyB7XHJcblx0LyogcGFkZGluZy1ib3R0b206IDJlbTsgKi9cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpYWxJY29ucyBpbWcge1xyXG5cdHdpZHRoOiA3MHB4OyBwYWRkaW5nOiAxZW0gMC41ZW07XHJcbn0gXHJcblxyXG4uZGl2aWRlck9yIHtcclxuXHRwYWRkaW5nOiAxZW0gMDsgXHJcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7ICAqL1xyXG4gIGhlaWdodDogMXB4OyBtYXJnaW4tYm90dG9tOiAyZW07IHBvc2l0aW9uOiByZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcblxyXG4uZGl2aWRlck9yIHNwYW57XHJcblx0LyogYmFja2dyb3VuZDogI2ZmZjsgKi9cclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpdmlkZXJPciBzcGFuOmJlZm9yZSwgLmRpdmlkZXJPciBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5kaXZpZGVyT3Igc3BhbjpiZWZvcmUge1xyXG4gIGxlZnQ6IC0xMjBweDtcclxufVxyXG5cclxuLmRpdmlkZXJPciBzcGFuOmFmdGVyIHtcclxuICByaWdodDogLTEyMHB4O1xyXG59XHJcblxyXG5cclxuLyogLmJ0blN0eWxlIHtcclxuXHRjb2xvcjojNDE0MTQxOyBiYWNrZ3JvdW5kOiAjZmZlNzZiOyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZlNzZiIDAlLCAjZmZmNWM1IDEwMCUpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZlNzZiIDAlLCNmZmY1YzUgMTAwJSk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZmZlNzZiIDAlLCNmZmY1YzUgMTAwJSk7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZlNzZiJywgZW5kQ29sb3JzdHI9JyNmZmY1YzUnLEdyYWRpZW50VHlwZT0wICk7IGRpc3BsYXk6IGJsb2NrOyBib3JkZXI6IDA7IG91dGxpbmU6IDA7IHBhZGRpbmc6IDEwcHggM2VtOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxLjFlbTsgYm9yZGVyLXJhZGl1czogNTBweDsgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XHJcbn0gKi9cclxuXHJcbi5idG5TdHlsZSB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE0cHggNDRweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uc2xpZGU3IC5jMTAwIHN0cm9uZ3tcclxuXHRkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAyM3B4OyBjb2xvcjogIzViNWE1YTsgbGluZS1oZWlnaHQ6IDI1cHg7IHBhZGRpbmctdG9wOiAxMHB4OyBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2xpZGU3IC5jMTAwIHNwYW4gZW17XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsOyBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnUxe1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTJ7XHJcblx0dG9wOiAyNSU7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnUze1xyXG5cdHRvcDogNTElO1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51NHtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTV7XHJcblx0dG9wOiAyNSU7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTZ7XHJcblx0dG9wOiA1MSU7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTd7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MTphZnRlciB7IFxyXG5cdGNvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDA7IHRvcDogMzMlOyBib3JkZXItdG9wOiAycHggZGFzaGVkICM4MDdlN2I7IHdpZHRoOiAzMCU7IFxyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51NDphZnRlciwgLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTU6YWZ0ZXIsIC5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnU2OmFmdGVyIHsgXHJcblx0cmlnaHQ6IGluaGVyaXQ7IGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnU3OmFmdGVye1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jMTAwLmJpZzpiZWZvcmUgeyBjb250ZW50OiAnJzsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjYWRlNDk5OyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTlweDsgbGVmdDogNTAlOyBtYXJnaW4tbGVmdDogLTVweDsgei1pbmRleDogMTsgdHJhbnNmb3JtOiByb3RhdGUoIDE4MGRlZyApOyBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDE3MyAyMjggMTUzIC8gNTAlKTsgfVxyXG5cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMHt3aWR0aDogMC43ZW07IGhlaWdodDogMC43ZW07IGJhY2tncm91bmQtY29sb3I6ICNkYWQ2Y2Y7IGZsb2F0OiBub25lOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMCAwLjJlbSAwLjVlbSAwLjJlbTt9XHJcbi5zbGlkZTcgLmN1c3RvbVNtYWxsLmMxMDAgPiBzcGFue2NvbG9yOiAjODA3ZTdiOyBmb250LXdlaWdodDogYm9sZDsgdG9wOiAzOSU7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDAuMThlbTt9XHJcbi5zbGlkZTcgLmN1c3RvbVNtYWxsLmMxMDAgLnNsaWNle3dpZHRoOiAwLjcyZW07IGhlaWdodDogMC43MmVtO31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMCAuYmFye3dpZHRoOiAwLjYyZW07IGhlaWdodDogMC42MmVtOyBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDt9XHJcbi5zbGlkZTcgLmN1c3RvbVNtYWxsLmMxMDAgLmZpbGx7Ym9yZGVyLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7IHdpZHRoOiAwLjYyZW07IGhlaWdodDogMC42MmVtO31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMDphZnRlcnt0b3A6IDAuMDJlbTsgbGVmdDogMC4wMmVtOyB3aWR0aDogMC42NmVtOyBoZWlnaHQ6IDAuNjZlbTt9XHJcbi5zbGlkZTcgLmN1c3RvbVNtYWxsLmMxMDAgaDMgeyBmb250LXNpemU6IDAuMTVlbTsgd2lkdGg6IDEyMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDExMCU7IGxlZnQ6LTEwJTsgfVxyXG4uc2xpZGU3IC50aGFua1lvdVdyYXAgLmltZ1RpY2t7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiA1MHB4OyBtYXJnaW46IDFlbSBhdXRvO31cclxuLnNsaWRlNyAudGhhbmtZb3VXcmFwIGg1e2ZvbnQtc2l6ZTogMS40ZW07IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDgwJTsgbWFyZ2luOiAwIGF1dG8gMWVtIGF1dG87IGNvbG9yOiAjNWI1YTVhO31cclxuLnNsaWRlNyAudGhhbmtZb3VXcmFwIC5idG5TdHlsZXt3aWR0aDogMjUwcHg7fVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAvKkNhbWVyYSBNb2R1bGUqL1xyXG4gIC52aWRlby1vdmVybGF5IHtcclxuICAgIHdpZHRoOiAzNzVweDtcclxuXHR3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);









let AppComponent = class AppComponent {
    constructor(_appService, _formBuilder) {
        this._appService = _appService;
        this._formBuilder = _formBuilder;
        this.title = 'cameraModule';
        this.isPlay = false;
        this.reader = new FileReader;
        this.imgFile = undefined;
        /* JITB*/
        this.hideMe = false;
        this.showMe = true;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide6Show = false;
        this.slide7Show = false;
        this.slideLogin = false;
        // inputnumber = 20;
        this.selectedSkin = "Oily Skin";
        this.selectedAge = '01';
        this.selectedGender = "female";
        this.LoginEmail = "";
        this.LoginName = "";
        this.checked = false;
        this.onboardinActiveSlide = 0;
        this.defaultAgeArray = Array.from({ length: 50 }, (_, i) => i < 9 ? '0' + (i + 1) : i + 1);
        /*JITB Ends*/
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = false;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // facingMode: "user"
        // width: 300,
        // height: 480
        };
        this.message = 'Loading...';
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.GetSkinTypes = [];
        /*
        *  ---------------------------------
        *   calling orbo api to check skin
        *  ---------------------------------
        */
        this.dataaa = [];
        /*Carousel*/
        this.onBoardingSlider = {
            autoplay: false,
            center: true,
            loop: false,
            nav: true,
            navText: ['←', '→'],
            dots: true,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
        };
        this.genderSlider = {
            autoplay: false,
            center: true,
            loop: false,
            nav: false,
            dots: false,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 2
                },
                400: {
                    items: 2
                },
                740: {
                    items: 2
                },
                940: {
                    items: 2
                }
            },
        };
        this.ageSlider = {
            autoplay: false,
            center: true,
            loop: true,
            nav: false,
            dots: false,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 2
                },
                400: {
                    items: 2
                },
                740: {
                    items: 2
                },
                940: {
                    items: 2
                }
            },
        };
        this.skinSlider = {
            autoplay: false,
            center: true,
            loop: true,
            nav: false,
            dots: false,
            margin: 10,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 2
                },
                400: {
                    items: 2
                },
                740: {
                    items: 2
                },
                940: {
                    items: 2
                }
            },
        };
        this.resultSlider = {
            autoplay: false,
            center: true,
            loop: false,
            nav: true,
            navText: ["<img src='../assets/prev2.png'>", "<img src='../assets/next2.png'>"],
            dots: false,
            margin: 0,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
        };
    }
    toggleVideo(event) {
        this.videoplayer.nativeElement.play();
    }
    ngAfterViewInit() {
        console.log("afterinit");
    }
    downloadAsPDF() {
        var data = document.getElementById('pdfTable'); //Id of the table
        html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(canvas => {
            // Few necessary setting options 
            let imgWidth = 208;
            let pageHeight = 295;
            let imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__["jsPDF"]('p', 'mm', 'a4'); // A4 size page of PDF  
            let position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
    }
    // plus()
    // {
    //  this.inputnumber = this.inputnumber+1;
    // }
    // minus()
    // {
    //   if(this.inputnumber != 0)
    // {
    //  this.inputnumber = this.inputnumber-1;
    // }
    // }
    // Change(event, ids) {
    //   this.selectedSkin = event.target.value;
    // }
    // ChangeAge(event, ids) {
    //   this.selectedAge = event.target.value;
    // }
    // ChangeGender(event) {
    //   this.selectedGender = event.target.value;
    // }
    PolicyAgree(event) {
        if (this.checked == false) {
            this.checked = true;
        }
        else if (this.checked == true) {
            this.checked = false;
        }
    }
    showSlide3() {
        if (this.checked == true) {
            this.showMe = false;
            this.hideUntilCalled = true;
            this.slide4Show = false;
            this.slide6Show = false;
            this.slide7Show = false;
            this.slideLogin = false;
            this.slide5Show = false;
            return false;
        }
        else {
            alert('Please agree Privacy Policy to go ahead');
        }
    }
    showSlide4() {
        this.showMe = false;
        this.hideUntilCalled = false;
        this.slide7Show = false;
        this.slide6Show = false;
        this.slide5Show = false;
        this.slide4Show = true;
        this.slideLogin = false;
        return false;
    }
    showSlide5() {
        this.showMe = false;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide6Show = false;
        this.slide7Show = false;
        this.slideLogin = false;
        this.slide5Show = true;
        return false;
    }
    showSlide6() {
        this.showMe = false;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide7Show = false;
        this.slideLogin = false;
        this.slide6Show = true;
        this.googleInitialize();
        return false;
    }
    showSlide7() {
        this.showMe = false;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide6Show = false;
        this.slideLogin = false;
        this.slide7Show = true;
        return false;
    }
    showSlideLogin() {
        this.showMe = false;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide6Show = false;
        this.slide7Show = false;
        this.slideLogin = true;
        return false;
    }
    submitLogin() {
        console.log("submit login to facebook");
        // FB.login();
        FB.login((response) => {
            console.log('submitLogin', response);
            if (response.authResponse) {
                this.LoginName = response.name;
                this.LoginEmail = response.email;
                this.SignIn();
            }
            else {
                console.log('User login failed');
            }
        }, { scope: 'email name' });
    }
    SignIn() {
        console.log(this.apiId);
        this._appService.SignInApp(this.apiId, this.selectedAge, this.regForm.get('txtNumber').value, this.selectedSkin, this.selectedGender, this.LoginEmail, this.LoginName)
            .subscribe((res) => {
            this.code = 'SUCCESSFUL';
            console.log(res);
            this.showSlide7();
        }, (err) => {
            console.log(err.error.error.message);
            this.code = err.error.error.code;
            this.message = err.error.error.message;
        });
    }
    googleInitialize() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '385303878640-2peie9oqcfksd6ebejvoj5t566auhup3.apps.googleusercontent.com',
                    cookie_policy: 'single_host_origin',
                    scope: 'profile email'
                });
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    prepareLogin() {
        this.auth2.attachClickHandler(this.loginRef.nativeElement, {}, (googleUser) => {
            let profile = googleUser.getBasicProfile();
            //console.log('Token || ' + googleUser.getAuthResponse().id_token);
            //this.show = true;
            this.LoginName = profile.getName();
            this.LoginEmail = profile.getEmail();
            this.SignIn();
            //console.log('Image URL: ' + profile.getImageUrl());
            //console.log('Email: ' + profile.getEmail());
        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
    }
    ngOnInit() {
        this.regForm = this._formBuilder.group({
            txtNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PushID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cb: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        });
        this.googleInitialize();
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1084146612012271',
                cookie: true,
                xfbml: true,
                version: 'v9.0'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        /*JITB*/
        this._appService.GetSkinTypes().subscribe((data) => this.GetSkinTypes = data);
        this.hideMe = false;
        this.showMe = true;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide6Show = false;
        this.slide7Show = false;
        this.slideLogin = false;
        //   setTimeout(function() {
        //     this.hideMe = false;
        //     this.showMe = true;
        // }.bind(this), 1000);
        const windowSize = window.matchMedia('(max-width: 768px)');
        if (!windowSize.matches) {
            this.videoOptions = {
                width: { ideal: 640 },
                height: { ideal: 480 }
            };
        }
        this.width = (windowSize.matches) ? 300 : 640; // set video element width
        this.height = (windowSize.matches) ? 500 : 480; // set video element height
        ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        // console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        this.url = webcamImage.imageAsDataUrl;
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(webcamImage.imageAsBase64);
        this.imgFile = new File([imageBlob], 'image.jpeg', { type: 'image/jpeg' });
        this.callApi();
        this.isImage = true;
        this.toggleWebcam();
    }
    /*
    *  ---------------------------------
    *     coverting dataURI to blob
    *  ---------------------------------
    */
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
    changeImage(event) {
        if (event.target.files && event.target.files[0]) {
            // const reader = new FileReader();
            this.reader.readAsDataURL(event.target.files[0]); // read file as data url
            this.imgFile = event.target.files[0];
            this.callApi();
            this.reader.onload = (event) => {
                this.url = event.target.result;
            };
            this.isImage = true;
            this.showWebcam = false;
        }
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    callApi() {
        this.code = '';
        this.message = 'Loading...';
        document.getElementById("analysing").style.display = "block";
        this._appService.checkSkin(this.imgFile).subscribe((res) => {
            this.code = 'SUCCESSFUL';
            this.dataaa = res;
            console.log(this.dataaa);
            console.log(res);
            this.apiId = this.dataaa['id'];
            this.message = JSON.stringify(res);
            this.slide6Show = false;
            this.slideLogin = true;
        }, (err) => {
            console.log(err.error.error.message);
            this.code = err.error.error.code;
            this.message = err.error.error.message;
            document.getElementById("analysing").style.display = "none";
        });
    }
    getOnboardingData(data) {
        const { startPosition } = data;
        this.onboardinActiveSlide = startPosition;
    }
    getGenderData(data) {
        const { slides } = data;
        this.selectedGender = slides[0].id;
        console.log(this.selectedGender);
    }
    getAgeData(data) {
        const { slides } = data;
        this.selectedAge = slides[0].id;
        console.log(this.selectedAge);
    }
    getSkinData(data) {
        const { slides } = data;
        this.selectedSkin = slides[0].id;
        console.log(this.selectedSkin);
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfTable', { static: false })
], AppComponent.prototype, "pdfTable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginRef', { static: false })
], AppComponent.prototype, "loginRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer", { static: false })
], AppComponent.prototype, "videoplayer", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppService = class AppService {
    constructor(_http) {
        this._http = _http;
        this.rootUrl = 'https://sandbox.scderma.orbo.tech/api';
        this.clientKey = 'ngpfRN7dJXT2EEmxrVAPXF7a0JKQoOiQxLbdzLfJBIDMu3hoqKKvgrBNO9k53ruv';
    }
    checkSkin(image) {
        const form = new FormData();
        form.append('image', image);
        const options = {
            reportProgress: true
        };
        return this._http.post(this.rootUrl + '/media/skincaredermafiq/upload?clientkey=' + this.clientKey, form, options);
    }
    GetSkinTypes() {
        return this._http.get(this.rootUrl + '/skintypes?clientkey=' + this.clientKey);
    }
    SignInApp(id, age, Mobile, skinType, gender, email, name) {
        const options = {
            reportProgress: true
        };
        return this._http.patch(this.rootUrl + '/memberlogs/' + id + '?clientkey=' + this.clientKey, { start_test: "yes",
            name: name,
            email: email,
            mobile: Mobile,
            gender: gender,
            age: age,
            skin_type: skinType,
            location: "Mumbai" }, options);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akshamalhotra/Development/more/naveed/dermafique-skin-tool/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
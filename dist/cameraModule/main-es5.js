function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!--Slide 1 - Splash Screen -->\r\n<!-- <section class=\"slide1\" *ngIf=\"hideMe\">\r\n\t<owl-carousel-o [options]=\"onBoardingSlider\">\r\n    <ng-template carouselSlide>\r\n      <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"assets/newassets/slide1.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"assets/newassets/slide1.png\">\r\n        <img src=\"assets/newassets/slide1.jpg\" class=\"slide1Img\" alt=\"Dermafique Skin Analysis\">\r\n      </picture>\r\n      <div class=\"\"></div>\r\n    </ng-template>\r\n    <ng-template carouselSlide>\r\n      New Slide\r\n    </ng-template>\r\n\t</owl-carousel-o>\r\n</section> -->\r\n\r\n<!--Slide 2 - Accept & Continue -->\r\n<!-- <section class=\"slide2\" *ngIf=\"showMe\">\r\n    <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"assets/newassets/slide1.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"assets/newassets/slide1.png\">\r\n        <img src=\"assets/newassets/slide1.png\" class=\"logo\" alt=\"Dermafique\">\r\n    </picture>\r\n      <h1>Dermafique Skin Analysis</h1>\r\n      <p>Artificial Intelligence driven diagnosis technology that analyses, detects and ranks your skin against <strong>the 7 pivotal parameters of skin physiology.</strong></p>\r\n    <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"assets/slide2-skinconcerns.jpg\">\r\n        <source media=\"(min-width:961px)\" srcset=\"assets/slide2-skinconcerns.jpg\">\r\n        <img src=\"assets/slide2-skinconcerns.jpg\" class=\"w100\" alt=\"Skin Concerns\">\r\n    </picture>\r\n\r\n    <p>\r\n        <strong>Co-created with expert advice from India’s leading dermatologists</strong>\r\n    </p>\r\n\r\n    <form>\r\n        <label>\r\n            <input type=\"checkbox\" (change)=\"PolicyAgree($event)\" value=\"Please tick here to agree with our Privacy Policy and  Terms &  Conditions\" />\r\n            Please tick here to agree with our Privacy Policy and  Terms &  Conditions\r\n        </label>\r\n        <input type=\"submit\" value=\"Start the Test\" class=\"btnStyle\" (click)=\"showSlide3()\">\r\n    </form>\r\n</section> -->\r\n\r\n<!-- onboarding -->\r\n<section class=\"onboarding\" [class.lastSlide]=\"onboardinActiveSlide === 2\" *ngIf=\"showMe\">\r\n  <owl-carousel-o [options]=\"onBoardingSlider\" class=\"onboardingOwlCarousel\" #owlOnboarding (changed)=\"getOnboardingData($event)\">\r\n    <ng-template carouselSlide [id]=\"0\">\r\n      <div class=\"onboardSlide onboardingSlide1\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"assets/newassets/slide1.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"assets/newassets/slide1.png\">\r\n          <img src=\"assets/newassets/slide1.png\" class=\"w100\" alt=\"slide1\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red text-center\">Hi, Welcome to</h1>\r\n            <picture class=\"my-10\">\r\n              <source media=\"(max-width:960px)\" srcset=\"assets/newassets/smartdermaconsult.png\">\r\n              <source media=\"(min-width:961px)\" srcset=\"assets/newassets/smartdermaconsult.png\">\r\n              <img src=\"assets/newassets/smartdermaconsult.png\" class=\"w100\" alt=\"smartdermaconsult\">\r\n            </picture>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">For your Artificial Intelligence powered Personalized Skin Health Analysis</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template carouselSlide [id]=\"1\">\r\n      <div class=\"onboardSlide onboardingSlide2\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"assets/newassets/slide2.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"assets/newassets/slide2.png\">\r\n          <img src=\"assets/newassets/slide2.png\" class=\"w100\" alt=\"slide2\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red mb-10 text-center\">Share your Selfie !</h1>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">Just upload your image and let Smart Dermaconsult’s\r\n              Artificial Intelligence powered Technology take care\r\n              of the rest to generate your personalized Skin Health Analysis on 7 Skin Health Parameters and overall Skin Health Score\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template carouselSlide [id]=\"2\">\r\n      <div class=\"onboardSlide onboardingSlide3\">\r\n        <picture>\r\n          <source media=\"(max-width:960px)\" srcset=\"assets/newassets/slide3.png\">\r\n          <source media=\"(min-width:961px)\" srcset=\"assets/newassets/slide3.png\">\r\n          <img src=\"assets/newassets/slide3.png\" class=\"w100\" alt=\"slide3\">\r\n        </picture>\r\n        <div class=\"onboardSlideWhiteOverlay\">\r\n          <img src=\"assets/newassets/whitecurve.png\" alt=\"whiteoverlay\" />\r\n          <div class=\"onboardSlideWhiteOverlay-container\">\r\n            <h1 class=\"c-red mb-10 text-center\">Smart DermaConsult’s AI Powered Technology</h1>\r\n            <p class=\"fs-14 lh-18 textcolor text-center\">helps you understand your skin’s unique needs\r\n              & shares personalized skin care recommendations \r\n              for Healthy Skin !</p>\r\n            <form class=\"d-flex df-dir-c\">\r\n              <label class=\"termsprivacy textcolor\">\r\n                  <input type=\"checkbox\" (change)=\"PolicyAgree($event)\" value=\"I agree with your terms and privacy\" />\r\n                  <span></span>\r\n                  I agree with your&nbsp;<a>terms and privacy</a>\r\n              </label>\r\n              <input type=\"submit\" value=\"Let's start\" class=\"btnStyle\" (click)=\"showSlide3()\">\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </owl-carousel-o>\r\n  <ng-container *ngIf=\"onboardinActiveSlide !== 2\">\r\n\t  <a class=\"onboardingSkip\" (click)=\"owlOnboarding.to('2')\">SKIP</a>\r\n\t</ng-container>\r\n</section>\r\n\r\n<!--Slide 3 - Select Gender-->\r\n<section class=\"slide3\" [class.show]=\"hideUntilCalled\" *ngIf=\"hideUntilCalled\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1>Select Gender</h1>\r\n      <div>Structural differences are noticed <br />\r\n        between men's and women's skin.</div>\r\n    </div>\r\n  </div>\r\n\t<div class=\"genderCarousel\">\r\n\t\t<owl-carousel-o [options]=\"genderSlider\" (changed)=\"getGenderData($event)\">\r\n\t\t\t<ng-template carouselSlide id=\"female\">\r\n\t\t\t\t<!-- <input type=\"radio\" id=\"female\" [(ngModel)]=\"genderSelected\" name=\"gender\" value=\"female\" [checked]=\"true\" (change)=\"ChangeGender($event)\"> -->\r\n\t\t\t\t<label for=\"female\">\r\n\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"assets/newassets/Female-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"assets/newassets/Female-image.png\">\r\n\t\t\t\t\t\t<img src=\"assets/newassets/Female-image.png\" class=\"w100\" alt=\"womenface\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>  \r\n\t\t\t<ng-template carouselSlide id=\"male\">\r\n\t\t\t\t<!-- <input type=\"radio\" id=\"male\" [(ngModel)]=\"genderSelected\" name=\"gender\" value=\"male\" (change)=\"ChangeGender($event)\"> -->\r\n\t\t\t\t<label for=\"male\">\r\n\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<img src=\"assets/newassets/Male-image.png\" class=\"w100\" alt=\"Male\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>\r\n\t  </owl-carousel-o>\r\n\t</div>\r\n  <div class=\"bottomcurve\">\r\n      <img src=\"assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\" class=\"selected\">\r\n                    <strong>01</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>02</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>03</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n          <a href=\"\" (click)=\"showSlide4()\" class=\"onboardingSkip\">\r\n            Next →\r\n          </a>\r\n          <div class=\"clear\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Slide 4 - Select Age -->\r\n<section class=\"slide3 slide4\" [class.show]=\"slide4Show\" *ngIf=\"slide4Show\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1>How old are you?</h1>\r\n      <div>Did you know the signs of ageing begin to<br/> show as early as the age of 25\r\n      </div>\r\n    </div>\r\n  </div>\r\n\t<div class=\"genderCarousel\">\r\n\t\t<owl-carousel-o [options]=\"ageSlider\" (changed)=\"getAgeData($event)\" #ageSliderRef>\r\n\t\t\t<ng-template carouselSlide *ngFor=\"let age of defaultAgeArray\" [id]=\"age\">\r\n\t\t\t\t<label for=\"{{age}}\">\r\n          <span>{{age}}</span>\r\n          <picture style=\"visibility: hidden;\">\r\n\t\t\t\t\t\t<source media=\"(max-width:960px)\" srcset=\"assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<source media=\"(min-width:961px)\" srcset=\"assets/newassets/Male-image.png\">\r\n\t\t\t\t\t\t<img src=\"assets/newassets/Male-image.png\" class=\"w100\" alt=\"Male\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</label>\r\n\t\t\t</ng-template>\r\n\t  </owl-carousel-o>\r\n\t</div>\r\n  <div class=\"bottomcurve\">\r\n      <img src=\"assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>01</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>02</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" >\r\n                    <strong>03</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n          <a href=\"javascript:;\" (click)=\"showSlide3()\" class=\"onboardingSkip\">\r\n            ← Previous \r\n          </a>\r\n          <a href=\"\" (click)=\"showSlide5()\" class=\"onboardingSkip\">\r\n            Next →\r\n          </a>\r\n          <div class=\"clear\"></div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Slide 4 - Select Age -->\r\n<!-- <section class=\"slide4\" *ngIf=\"slide4Show\">\r\n    <h1>Enter your Age</h1>\r\n    <div class=\"ageSelector\">\r\n\t\t\t<div class=\"ageSelectorBx\">\r\n\t\t\t  <button class=\"btnStyle\" (click)=\"minus()\"><span>-</span></button>\r\n\t\t\t  <input type=\"text\" class=\"form-control ageTxtBig\" [(ngModel)]=\"inputnumber\" disabled>\r\n\t\t\t  <button class=\"btnStyle\" (click)=\"plus()\"><span>+</span></button>\r\n\t\t\t</div>\r\n\r\n        <h3>Derma Truth</h3>\r\n        <p>Structural differences are noticed between\r\n            men’s skin and women’s skin.</p>\r\n    </div>\r\n    <div class=\"steps1to3\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>1</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>2</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\">\r\n                    <strong>3</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n\t\t\t<a href=\"javascript:;\" (click)=\"showSlide3()\" class=\"btnNext toLeft\"><img src=\"assets/prev.png\"> Previous</a>\r\n        \t<a href=\"javascript:;\" (click)=\"showSlide5()\" class=\"btnNext toRight\">Next <img src=\"assets/next.png\"></a>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n    </div>\r\n</section> -->\r\n\r\n<!--Slide 5 - Select Skin Type -->\r\n<section class=\"slide3 slide5\" [class.show]=\"slide5Show\" *ngIf=\"slide5Show\">\r\n    <div class=\"topcurve\">\r\n      <img src=\"assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n      <div class=\"topcurve-container\">\r\n        <h1>Which skin type<br /> describes you the best? </h1>\r\n        <div>Did you know the signs of ageing begin to<br/> show as early as the age of 25\r\n        </div>\r\n      </div>\r\n    </div>\r\n\t\t<div class=\"genderCarousel skinSlider\">\r\n\t\t\t<div *ngIf=\"GetSkinTypes\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<owl-carousel-o [options]=\"skinSlider\" (changed)=\"getSkinData($event)\">\r\n\t\t\t\t\t\t<ng-template carouselSlide *ngFor=\"let type of GetSkinTypes\" [id]=\"type.code\">\r\n\t\t\t\t\t\t\t<div class=\"{{type.title}}\">\r\n\t\t\t\t\t\t\t\t<!-- <input type=\"radio\" id=\"{{type.id}}\" [(ngModel)]=\"skinSelected\" value=\"{{type.title}}\" #tradio1 name=\"skinType\" value=\"oily\" (change)=\"Change($event, tradio1)\"> -->\r\n\t\t\t\t\t\t\t\t<label for=\"{{type.id}}\">\r\n\t\t\t\t\t\t\t\t\t<picture>\r\n\t\t\t\t\t\t\t\t\t\t<source media=\"(max-width:200px)\" srcset=\"{{type.image_not_selected}}\">\r\n\t\t\t\t\t\t\t\t\t\t<source media=\"(min-width:200px)\" srcset=\"{{type.image_not_selected}}\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{type.image_not_selected}}\" class=\"w100\" alt=\"{{type.title}}\">\r\n\t\t\t\t\t\t\t\t\t</picture>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t  </owl-carousel-o>\r\n\t\t\t</div>\r\n\t\t</div>   \r\n  </div>\r\n    \r\n  <div class=\"bottomcurve\">\r\n    <img src=\"assets/newassets/bottomcurve.png\" alt=\"bottomcurve\" />\r\n    <div class=\"bottomcurve-container\">\r\n      <ul>\r\n        <li>\r\n            <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n              <strong>01</strong>\r\n              <span>Gender</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"javascript:;\" (click)=\"showSlide4()\">\r\n              <strong>02</strong>\r\n              <span>Age</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"javascript:;\" class=\"selected\">\r\n                <strong>03</strong>\r\n                <span>Skin Type</span>\r\n            </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"nextPrevBx mt-20\">\r\n        <a href=\"javascript:;\" (click)=\"showSlide4()\" class=\"onboardingSkip\">\r\n          ← Previous \r\n        </a>\r\n        <a href=\"javascript:;\" (click)=\"showSlide6()\" class=\"onboardingSkip\">\r\n          Next →\r\n        </a>\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <!-- <div class=\"steps1to3\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide3()\">\r\n                    <strong>1</strong>\r\n                    <span>Gender</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" (click)=\"showSlide4()\">\r\n                    <strong>2</strong>\r\n                    <span>Age</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"selected\">\r\n                    <strong>3</strong>\r\n                    <span>Skin Type</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nextPrevBx mt-20\">\r\n\t\t\t<a href=\"javascript:;\" (click)=\"showSlide4()\" class=\"btnNext toLeft\"><img src=\"assets/prev.png\"> Previous</a>\r\n        \t<a href=\"javascript:;\" (click)=\"showSlide6()\" class=\"btnNext toRight\">Next <img src=\"assets/next.png\"></a>\r\n\t\t\t<div class=\"clear\"></div>\r\n\t\t</div>\r\n    </div> -->\r\n</section>\r\n\r\n<!--Section 6 - Upload/Click Image And Analysing Screen -->\r\n<section class=\"slide3 slide6\" [class.show]=\"slide6Show\" *ngIf=\"slide6Show\">\r\n\t<video id=\"analysing\" width=\"100%\" height=\"100%\" style=\"display: none;\" autoplay muted loop>\r\n    <source src=\"assets/newassets/analysing-loader.mp4\" type=\"video/mp4\">\r\n\t</video>\r\n  <!-- <source src=\"https://high-octane.in/analysing-loader.mp4\" type=\"video/mp4\"> -->\r\n\t<div class=\"text-center\">\r\n    <p class=\"toptitle\">It's time for your</p>\r\n\t\t<h1>No Makeup Selfie!</h1>\r\n    <div class=\"webcam\">\r\n      <picture>\r\n        <source media=\"(max-width:960px)\" srcset=\"assets/newassets/facescan.png\">\r\n        <source media=\"(min-width:961px)\" srcset=\"assets/newassets/facescan.png\">\r\n        <img src=\"assets/newassets/facescan.png\" class=\"video-overlay\" alt=\"overlay\">\r\n      </picture>\r\n      <webcam class=\"webcamUnit\" [height]=\"height\" [trigger]=\"triggerObservable\" [allowCameraSwitch]=\"allowCameraSwitch\"\r\n        [videoOptions]=\"videoOptions\" [switchCamera]=\"nextWebcamObservable\" (imageCapture)=\"handleImage($event)\"\r\n        [imageQuality]=\"1\" (initError)=\"handleInitError($event)\">\r\n      </webcam>\r\n    </div>\r\n    <div class=\"bottomcurve slide6bottomcurve\">\r\n      <img src=\"assets/newassets/uploadcurve.png\" alt=\"bottomcurve\" />\r\n      <div class=\"bottomcurve-container\">\r\n        <div class=\"error\" style=\"color: red;\">{{ code }} - {{message}}</div>\r\n        <p class=\"textcolor fs-16 lh-22\">Click the picture in natural light and<br />\r\n          keep a neutral expression</p>\r\n        <div class=\"imageCta\">\r\n          <a href=\"javascript:;\"><img src=\"assets/newassets/uploadicon.png\">\r\n            <input id=\"imgFile\" type=\"file\" (change)=\"changeImage($event)\" accept=\"image/*\">\r\n          </a>\r\n          <a href=\"javascript:;\" (click)=\"triggerSnapshot();\"><img src=\"assets/newassets/cameraicon.png\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Section Login-->\r\n<section class=\"slide3 slideLogin\" [class.show]=\"slideLogin\" *ngIf=\"slideLogin\">\r\n  <div class=\"topcurve\">\r\n    <img src=\"assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n    <div class=\"topcurve-container\">\r\n      <h1 class=\"mt-20\">Your result is ready!</h1>\r\n\t    <p class=\"fs-18 lh-22\">Sign in for your analysis report</p>\r\n    </div>\r\n  </div>\r\n\t<form [formGroup]=\"regForm\"> \r\n    <div *ngIf=\"dataaa\">\r\n      <div class=\"registerBx\">\r\n        <!-- <label formControlName=\"PushID\">{{dataaa.id}}</label> -->\r\n        <input type=\"text\" id=\"PushID\" formControlName=\"PushID\"  value=\"{{dataaa.id}}\">\r\n        <input type=\"text\" id=\"txtNumber\" formControlName=\"txtNumber\" placeholder=\"Enter Email / Mobile Number\">\r\n        <!--<button (click)=\"SignIn()\">Submit</button>-->\r\n        <a (click)=\"SignIn()\" class=\"btnStyle\">Submit</a>\r\n      </div>\r\n\t\t\r\n\t\t  <div class=\"dividerOr\"><span>Or</span></div>\r\n\t\t\r\n\t\t  <div class=\"socialIcons\">\r\n        <!--<a (click)=\"submitLogin()\" class=\"btnStyle\">Facebook Authentication</a>\r\n        <a class=\"btnStyle\" #loginRef>Google Authentication</a>-->\r\n        <a (click)=\"submitLogin()\"><img src=\"assets/fb-icon.png\" alt=\"Facebook Icon\"></a>\r\n        <a (click)=\"prepareLogin()\" id=\"loginRef\" #loginRef><img src=\"assets/google-icon.png\" alt=\"Google Icon\"></a>\r\n        <!-- <img src=\"assets/whatsapp-icon.png\" alt=\"Whatsapp Icon\"> -->\r\n\t\t  </div>\r\n\t\t  <div class=\"dividerOr\"><span>Or</span></div>\r\n      <a href=\"\" (click)=\"showSlide7()\" class=\"btnStyle\">Continue as Guest</a>\r\n    </div>\r\n\t</form>\r\n  <div class=\"bottomcurve slide6bottomcurve\">\r\n    <img src=\"assets/newassets/signupbottomcurve.png\" alt=\"bottomcurve\" />\r\n    <div class=\"bottomcurve-container\">\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"slide3 slide7\" [class.show]=\"slide7Show\" *ngIf=\"slide7Show\">\r\n  <!-- <ng-template *ngIf=\"dataaa !== null\"> -->\r\n    <div class=\"topcurve\">\r\n      <img src=\"assets/newassets/topcurve.png\" alt=\"topcurve\" />\r\n      <div class=\"topcurve-container\">\r\n        <h1 class=\"mt-20\">Let's go through the detailed<br />\r\n          breakdown of your result</h1>\r\n        <section class=\"d-flex\">\r\n          <div class=\"circle-svg large mr-10\">\r\n            <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n              <circle class=\"circle-chart__circle main\" \r\n                stroke-width=\"2\"\r\n                [attr.stroke]=\"colorMap['G']\"\r\n                [attr.stroke-dasharray]=\"dataaa.outputData.skin_health_score + ', 100'\" \r\n                stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n            </svg>\r\n            <div class=\"circle-chart__info\">\r\n              <span class=\"circle-chart__percent\" [style.color]=\"colorMap['G']\">{{dataaa.outputData.skin_health_score}}%</span>\r\n            </div>\r\n          </div>\r\n          <span class=\"fs-18 textcolor\">Skin Health<br>Score</span>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"slide7content\">\r\n      <div class=\"slide7content-wrapper\">\r\n        <div class=\"score-wrapper\">\r\n          <div class=\"sw-photopersent\">\r\n            <img [src]=\"url\" />\r\n            <div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.face_firmness_percentage_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.face_firmness_percentage + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.face_firmness_percentage_color_code]\">{{dataaa.outputData.face_firmness_percentage}}%</span>\r\n                </div>\r\n                <span>Firmness</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.Smoothness_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.Smoothness + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.Smoothness_color_code]\">{{dataaa.outputData.Smoothness}}%</span>\r\n                </div>\r\n                <span>Smoothness</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.hydration_score_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.hydration_score + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.hydration_score_color_code]\">{{dataaa.outputData.hydration_score}}%</span>\r\n                </div>\r\n                <span>Hydration Score</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.skin_dullness_percentage_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.skin_dullness_percentage + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.skin_dullness_percentage_color_code]\">{{dataaa.outputData.skin_dullness_percentage}}%</span>\r\n                </div>\r\n                <span>Dullness</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.uneven_skin_percentage_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.uneven_skin_percentage + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.uneven_skin_percentage_color_code]\">{{dataaa.outputData.uneven_skin_percentage}}%</span>\r\n                </div>\r\n                <span>Uneven<br /> Skin Tone</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.face_wrinkle_percentage_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.face_wrinkle_percentage + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.face_wrinkle_percentage_color_code]\">{{dataaa.outputData.face_wrinkle_percentage}}%</span>\r\n                </div>\r\n                <span>Face Lines<br /> &amp; Wrinkles</span>\r\n              </div>\r\n              <div class=\"circle-svg small\">\r\n                <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                  <circle class=\"circle-chart__circle\" \r\n                    stroke-width=\"2\"\r\n                    [attr.stroke]=\"colorMap[dataaa.outputData.dark_spot_percentage_color_code]\"  \r\n                    [attr.stroke-dasharray]=\"dataaa.outputData.dark_spot_percentage + ', 100'\" \r\n                    stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                <div class=\"circle-chart__info\">\r\n                  <span class=\"circle-chart__percent\" [style.color]=\"colorMap[dataaa.outputData.dark_spot_percentage_color_code]\">{{dataaa.outputData.dark_spot_percentage}}%</span>\r\n                </div>\r\n                <span>Dark Spots</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"sw-colorindicator\">\r\n            <ul>\r\n              <li>\r\n                High<br/>Priority\r\n              </li>\r\n              <li>\r\n                Medium<br/>Priority\r\n              </li>\r\n              <li>\r\n                Low<br/>Priority\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"score-recommendation\" [class.inView]=\"isRecommendationScrolledIntoView || isAnalysisAlreadyRendered\" #scrollRecommendationIntoViewRef>\r\n          <h1>Your key skin concerns &<br /> Dermafique recommendations</h1>\r\n          <ng-container *ngIf=\"{ tp: dataaa.priorityInfo.topPriorities } as topPriorities\">\r\n            <ul class=\"d-flex\">\r\n              <ng-container *ngFor=\"let priority of topPriorities.tp; let i = index;\">\r\n                <ng-container *ngIf=\"i < 3\">\r\n                  <li class=\"sr-wrapper\">\r\n                    <div class=\"sr-circle-wrapper\">\r\n                      <div class=\"circle-svg small\">\r\n                        <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                          <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                          <circle class=\"circle-chart__circle\" \r\n                            stroke-width=\"2\"\r\n                            [attr.stroke]=\"colorMap[priority.priority_color_code]\"  \r\n                            [attr.stroke-dasharray]=\"priority.priority_score + ', 100'\" \r\n                            stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                        <div class=\"circle-chart__info\">\r\n                          <span class=\"circle-chart__percent\" [style.color]=\"colorMap[priority.priority_color_code]\">{{priority.priority_score}}%</span>\r\n                        </div>\r\n                      </div>\r\n                      <span class=\"lh-18\">{{priority.priority_title}}</span>\r\n                    </div>\r\n                    <div class=\"sr-buycard\">\r\n                      <img [src]=\"priority.priority_product_info.product_image_thumbnail\" />\r\n                      <a class=\"btnStyle\" target=\"_blank\" [href]=\"priority.priority_product_info.product_link\">\r\n                        <img src=\"assets/newassets/bagico.png\" alt=\"bagicon\" />&nbsp;Buy Now →\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ng-container>\r\n              </ng-container>\r\n            </ul>\r\n          </ng-container>\r\n        </div>\r\n        <ng-container *ngIf=\"{ data: skinResultSelected } as selectedVal\">\r\n          <div class=\"skin-analysiswrapper\" [class.inView]=\"isAnalysisScrolledIntoView || isAnalysisAlreadyRendered\" #scrollAnalysisIntoViewRef>\r\n            <div class=\"skin-detailanalysis mt-20\">\r\n              <h2>Your Detailed Skin Analysis Report</h2>\r\n                <div class=\"sd-top\">\r\n                  <section class=\"d-flex mt-20 mb-10\">\r\n                    <div class=\"circle-svg medium mr-10\">\r\n                      <svg class=\"circle-chart\" viewBox=\"0 0 33.83098862 33.83098862\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <circle class=\"circle-chart__background\" stroke=\"#959b90\" stroke-width=\".1\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle>\r\n                        <circle class=\"circle-chart__circle\" \r\n                          stroke-width=\"2\"\r\n                          [attr.stroke]=\"colorMap[selectedVal.data.priority_color_code]\"  \r\n                          [attr.stroke-dasharray]=\"selectedVal.data.priority_score + ', 100'\"\r\n                          stroke-linecap=\"round\" fill=\"none\" cx=\"16.91549431\" cy=\"16.91549431\" r=\"15.91549431\"></circle></svg>\r\n                      <div class=\"circle-chart__info\">\r\n                        <span class=\"circle-chart__percent\" [style.color]=\"colorMap[selectedVal.data.priority_color_code]\">\r\n                          {{selectedVal.data.priority_score}}%\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <span class=\"fs-16 lh-22 textcolor\">{{selectedVal.data.priority_product_info.skin_analysis_report}}</span>\r\n                  </section>\r\n                  <div class=\"sd-product mb-20\">\r\n                    <div class=\"sdp-left pr-20\">\r\n                      <img [src]=\"selectedVal.data.priority_product_info.product_image\" />\r\n                    </div>\r\n                    <div class=\"sdp-right\">\r\n                      <div class=\"sdpr-title\">{{selectedVal.data.priority_product_info.product_name}}</div>\r\n                      <div class=\"sdpr-subtitle\">{{selectedVal.data.priority_product_info.product_desc}}</div>\r\n                      <a class=\"btnStyle\" target=\"_blank\" [href]=\"selectedVal.data.priority_product_info.product_link\">\r\n                        <img src=\"assets/newassets/bagico.png\" alt=\"bagicon\" />&nbsp;Buy Now →\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"consolexpert\">\r\n              <div class=\"cse-card mb-20 mt-20\">\r\n                <div class=\"cse-title\">Concern</div>\r\n                <ng-container *ngIf=\"{ c: selectedVal.data.priority_product_info.concerns } as concern\">\r\n                  <ul class=\"cse-content\">\r\n                    <li class=\"d-flex df-a-fs mb-20\">\r\n                      <div class=\"csec-image\">\r\n                        <img [src]=\"concern.c.causes.image\" />\r\n                      </div>\r\n                      <div class=\"csec-text\">\r\n                        <h4>How this is caused:</h4>\r\n                        <p class=\"\">\r\n                          <ng-container *ngFor=\"let point of concern.c.causes.points\">\r\n                            {{point}}\r\n                          </ng-container>\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"d-flex df-a-fs\">\r\n                      <div class=\"csec-image\">\r\n                        <img [src]=\"concern.c.needs.image\" />\r\n                      </div>\r\n                      <div class=\"csec-text\">\r\n                        <h4>What you need:</h4>\r\n                        <p class=\"\">\r\n                          <ng-container *ngFor=\"let point of concern.c.needs.points\">\r\n                            {{point}}\r\n                          </ng-container>\r\n                        </p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <div class=\"cse-card mb-20 mt-20\">\r\n                <div class=\"cse-title\">Solution</div>\r\n                <ng-container *ngIf=\"{ s: selectedVal.data.priority_product_info.solution } as solution\">\r\n                  <ul class=\"cse-content\">\r\n                    <div class=\"csec-text text-center mb-20\">\r\n                      <p class=\"\">{{solution.s.solution_recommends}}</p>\r\n                    </div>\r\n                    <ng-container *ngFor=\"let point of solution.s.points\">\r\n                      <li class=\"d-flex df-a-fs mb-10\">\r\n                        <div class=\"csec-image\">\r\n                          <img [src]=\"point.image\" />\r\n                        </div>\r\n                        <div class=\"csec-text\">\r\n                          <p class=\"\">\r\n                            {{point.point}}\r\n                          </p>\r\n                        </div>\r\n                      </li>\r\n                    </ng-container>\r\n                    <div class=\"csec-text text-center mt-20\">\r\n                      <p class=\"\">{{solution.s.solution_concluding_paragraph}}</p>\r\n                    </div>\r\n                  </ul>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <div class=\"cse-card mb-20 mt-20\">\r\n                <div class=\"cse-title\">Expert Tip</div>\r\n                <ng-container *ngIf=\"{ e: selectedVal.data.priority_product_info.expert } as expert\">\r\n                  <ul class=\"cse-content\">\r\n                    <div class=\"csec-text text-center mb-20\">\r\n                      <h4>How this is caused:</h4>\r\n                      <p class=\"\">{{expert.e.expert_tip}}</p>\r\n                    </div>\r\n                    <ng-container *ngFor=\"let point of expert.e.points\">\r\n                      <li class=\"d-flex df-a-fs mb-10\">\r\n                        <div class=\"csec-image\">\r\n                          <img [src]=\"point.image\" />\r\n                        </div>\r\n                        <div class=\"csec-text\">\r\n                          <p class=\"\">{{point.point}}</p>\r\n                        </div>\r\n                      </li>\r\n                    </ng-container>\r\n                    <div class=\"csec-text text-center mt-20\">\r\n                      <p class=\"\">{{expert.e.expert_tip_concluding_paragraph}}</p>\r\n                    </div>\r\n                  </ul>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"{ dataArr: dataaa.priorityInfo.topPriorities } as topPriorities\">\r\n          <div class=\"skin-healthparameters mb-20 w100\" [class.paramTabsSticky]=\"isAnalysisScrolledIntoView\">\r\n            <h4 class=\"fs-14 text-center mb-10\">Click below to view other Skin Health Parameters</h4>\r\n            <ul>\r\n              <ng-container *ngFor=\"let data of topPriorities.dataArr; let i = index\">\r\n                <!-- <ng-container *ngIf=\"i < 3\"> -->\r\n                  <li [class.d-none]=\"(i > 2 && showRestTabs === false)\" [class.selected]=\"activeResultTab === data.priority_name\" (click)=\"ActiveTab($event, data.priority_name)\">{{data.priority_name}}</li>\r\n                <!-- </ng-container> -->\r\n              </ng-container>\r\n              <li (click)=\"ShowRestTabFn()\" [class.selected]=\"showRestTabs\">&nbsp; + &nbsp;</li>\r\n            </ul>\r\n            <!-- <ng-template [ngIf]=\"showRestTabs\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let data of topPriorities.dataArr; let i = index\">\r\n                  <ng-container *ngIf=\"i > 2\">\r\n                    <li [class.selected]=\"activeResultTab === data.priority_name\" (click)=\"ActiveTab($event, data.priority_name)\">{{data.priority_name}}</li>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </ul>\r\n            </ng-template> -->\r\n          </div>\r\n        </ng-container>\r\n        <!-- <div class=\"thank-form\">\r\n          <img src=\"assets/newassets/thankyoutick.png\" />\r\n          <h1>\r\n            Thank you for taking<br />the skin analysis!\r\n          </h1>\r\n          <p>In case you haven't signed up already, please enter your details below<br /> to recieve the full report on your Phone or Email ID.</p>\r\n          <form [formGroup]=\"regForm\"> \r\n            <div class=\"registerBx\">\r\n              <input type=\"text\" id=\"txtThankYouNumber\" formControlName=\"txtThankYouNumber\" placeholder=\"Mobile Number\">\r\n              <input type=\"email\" id=\"txtThankYouEmail\" formControlName=\"txtThankYouEmail\" placeholder=\"Email ID\">\r\n              <a (click)=\"ThankYou()\" class=\"btnStyle\">Send →</a>\r\n            </div>\r\n          </form>\r\n        </div> -->\r\n        <div class=\"static-banner\">\r\n          <img src=\"assets/newassets/resultbanner.png\" class=\"w100\" alt=\"banner\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*******************************  Reset CSS *******************************/\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}\r\naudio,canvas,video{display:inline-block}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden]{display:none}\r\nhtml{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}\r\nbody{margin:0}\r\na:focus, :focus{outline:none; border: 0;}\r\na:active,a:hover{outline:0;text-decoration:none}\r\nh1{font-size:2em}\r\nabbr[title]{border-bottom:1px dotted}\r\nb,strong{font-weight:700}\r\ndfn{font-style:italic}\r\nmark{background:#ff0;color:#000}\r\ncode,kbd,pre,samp{font-family:monospace,serif;font-size:1em}\r\npre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}\r\nq{quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsup{top:-.5em}\r\nsub{bottom:-.25em}\r\nimg{border:0;outline:none}\r\nsvg:not(:root){overflow:hidden}\r\nfigure{margin:0}\r\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{border:0;padding:0}\r\nbutton,input,select,textarea{font-family:inherit;font-size:100%;margin:0;outline:0}\r\nbutton,input{line-height:normal}\r\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\r\nbutton[disabled],input[disabled]{cursor:default}\r\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\r\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\r\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\r\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\r\ntextarea{overflow:auto;vertical-align:top}\r\ntable{border-collapse:collapse;border-spacing:0}\r\na{text-decoration:none;outline:none;color:#000}\r\nul{margin:0;padding:0;list-style:none}\r\nul li{margin:0;padding:0}\r\n.alignCenter{text-align:center}\r\nbody{background:#fff;font-size:100%;font-family: 'Geogrotesque-Regular';font-weight:400;color:#1b1a1a;height:100%;position:relative;}\r\n.clear,.after{clear:both}\r\n.clear:after,.after:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}\r\n* html .clear,* html .after{zoom:1;clear:both;font-size:1px!important;line-height:1px!important}\r\n:first-child+html .clear,:first-child+html .after{zoom:1;clear:both;font-size:1px!important;line-height:1px!important}\r\nimg{border:0 none}\r\n.toRight{float:right!important}\r\n.toLeft{float:left!important}\r\n.toCenter{float:none!important;display:block;margin:0 auto}\r\n.noPadTop{padding-top:0!important}\r\nhtml,body{min-height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;width:100%;}\r\n*{margin:0;padding:0}\r\n/*******************************  Reset CSS *******************************/\r\n/*Slides*/\r\nsection{\r\n  width: 100%; max-width: 450px; margin: 0 auto;\r\n}\r\n.slide1 img{\r\n  width: 100%; display: block;\r\n}\r\n/*Camera Module*/\r\n.video-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin: 0;\r\n  width: 640px;\r\n}\r\n.upload-button {\r\n  position: relative;\r\n  display: inline-block;\r\n  z-index: 1;\r\n}\r\n.upload-button input[type=\"file\"] {\r\n  -webkit-appearance: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n.slide7 .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.slide7 .faceMesh{\r\n\tposition: absolute; top: 0; left: 0; width: 100%; height: 100%;\r\n}\r\n.slide7 .imageView{\r\n\tposition: relative; width: 46%; margin: 1em auto; border-radius: 10px; overflow: hidden; z-index: 1;\r\n}\r\n/*Global*/\r\n/* section{\r\n\tbackground: url(../assets/bg.jpg) no-repeat bottom center #fff;\r\n\tbackground-size:100%;\r\n} */\r\n/*Slide 1*/\r\n/*Slide 2*/\r\n/* .slide2{padding:0 2em; text-align: center;}\r\n.slide2 .logo{width:50%; margin:0 auto; display: block; padding: 1.5em 0;}\r\n.slide2 h1{font-size: 1.3em; margin-bottom: 0.5em;}\r\n.slide2 p{font-size: 0.8em; line-height: 1.5em; margin-bottom: 0;}\r\n.slide2 img{display: block; width: 95%; margin: 0 auto;}\r\n.slide2 label{color:#5b5a5a; margin-bottom: 1em; margin-top: 0.5em; font-size: 0.8em;}\r\n.slide2 .btnStyle{color:#414141; background: #ffe76b; background: -moz-linear-gradient(top,  #ffe76b 0%, #fff5c5 100%); background: -webkit-linear-gradient(top,  #ffe76b 0%,#fff5c5 100%); background: linear-gradient(to bottom,  #ffe76b 0%,#fff5c5 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe76b', endColorstr='#fff5c5',GradientType=0 ); display: block; border: 0; outline: 0; padding: 10px 3em; font-weight: bold; font-size: 1.1em; border-radius: 50px; margin: 0 auto 0 auto; display: inline-block;} */\r\n/*onboarding*/\r\n.onboarding {\r\n  position: relative;\r\n  height: 100%;\r\n  background-color: #fff3f4;\r\n  overflow: hidden;\r\n}\r\n.onboarding ::ng-deep .owl-carousel .owl-stage-outer {\r\n  overflow: visible;\r\n}\r\n.onboarding.lastSlide ::ng-deep .owl-dots {\r\n  display: none;\r\n}\r\n.onboarding ::ng-deep .owl-theme {\r\n  position: unset;\r\n}\r\n.onboarding ::ng-deep .owl-dots {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 45px;\r\n}\r\n.onboarding ::ng-deep .owl-dots .owl-dot span {\r\n  height: 12px;\r\n  width: 12px;\r\n  margin: 5px;\r\n  background: #f3e5e4;\r\n}\r\n.onboarding ::ng-deep .owl-dots .owl-dot.active span {\r\n  background: var(--red);\r\n}\r\n.onboarding ::ng-deep .owl-nav [class*=owl-] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  background-color: rgba(var(--pink-rgba), .5);\r\n  color: var(--red);\r\n  border-radius: 100px;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-prev {\r\n  left: 0;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-next {\r\n  right: 0;\r\n}\r\n.onboarding ::ng-deep .owl-nav .owl-next.disabled {\r\n  display: none;\r\n}\r\n.onboardingSkip {\r\n  color: var(--pink);\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  z-index: 1;\r\n  text-decoration: underline;\r\n  text-underline-offset: 2px;\r\n  cursor: pointer;\r\n}\r\n.onboarding .onboardingSkip {\r\n  position: absolute;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.onboardSlideWhiteOverlay {\r\n  /* background: url(./../assets/newassets/whitecurve.png) no-repeat 0 ;\r\n  background-size: 100%;\r\n  height: 340px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  text-align: center; */\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.onboardSlideWhiteOverlay > img {\r\n  width: 100%;\r\n  /* height: 48vh; */\r\n}\r\n.onboardSlideWhiteOverlay-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 120px 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.onboardSlideWhiteOverlay-container img {\r\n  max-width: 140px\r\n}\r\n.onboardSlide {\r\n  /* height: 100vh; */\r\n}\r\n.onboardingSlide1 .onboardSlideWhiteOverlay {\r\n  /* padding: 110px 80px 0; */\r\n}\r\n.onboardingSlide2 .onboardSlideWhiteOverlay, .onboardingSlide3 .onboardSlideWhiteOverlay {\r\n  /* padding: 110px 30px 0; */\r\n}\r\n.onboardingSlide1 .onboardSlideWhiteOverlay img {\r\n  /* max-width: 160px; */\r\n}\r\nlabel.termsprivacy input {\r\n  display: none;\r\n}\r\nlabel.termsprivacy span {\r\n  height: 12px;\r\n  width: 12px;\r\n  margin-right: 6px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  border: 1px solid;\r\n}\r\nlabel.termsprivacy {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n}\r\nlabel.termsprivacy input:checked + span:before {\r\n  content: \"✔️\";\r\n  font-size: 10px;\r\n}\r\n.slide3 {\r\n  display: none;\r\n}\r\n.slide3.show {\r\n  display: flex;\r\n  -webkit-animation: .5s linear showAnimate;\r\n          animation: .5s linear showAnimate;\r\n}\r\n@-webkit-keyframes showAnimate {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: translateX(40px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes showAnimate {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: translateX(40px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n/*Slide 3*/\r\n.slide3 {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.slide3 h1 {\r\n  text-align: center; \r\n  color: var(--red);\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n  white-space: nowrap;\r\n}\r\n.slide3 h2 {\r\n  text-align: center; \r\n  color: var(--red);\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n  white-space: nowrap;\r\n}\r\n.slide3 .owl-item{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide3 .owl-item img{width: 100%;}\r\n.slide3 .owl-item h3{font-size: 1em; text-align: center; font-style: italic; padding-top: 3em;}\r\n.slide3 .owl-item p{font-size: 1em; text-align: center; padding-top: 0.5em;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.steps1to3{position: absolute; bottom: 0; left: 0; width: 100%; padding: 1em; background: #fff0e9; text-align: center; padding-top: 2em; padding-bottom: 1em; border-radius: 60px 60px 0 0; border-top: 1.5px solid #ffc4ae;}\r\n.steps1to3 li{display: inline-block; width: 32%;}\r\n.steps1to3 li a{color: #a47660; display: block; position: relative; height: 10vh; width: 10vh; margin: 0 auto; opacity: 0.6;}\r\n.steps1to3 li a:after{content: \" \"; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 100px; border: 1px solid #a47660;}\r\n.steps1to3 li a.selected{opacity: 1;}\r\n.steps1to3 li a.selected:after{border-width: 2px;}\r\n.steps1to3 li strong{display: block; font-size: 2em; height: 10vh; line-height: 10vh;}\r\n.steps1to3 li span{display: block; font-size: 0.7em; position: absolute; bottom: 0; text-align: center; width: 100%; background: #fff0e9; z-index: 1;}\r\n.btnNext{font-weight: bold; padding: 1em 0; display: block;}\r\n.slide3 input[type=\"radio\"]{position: absolute; width: 1px; height: 1px; visibility: hidden;}\r\n/* .slide3 .genderCarousel{padding: 2em 0 1em 0;} */\r\n.slide3 .genderCarousel h3{font-size: 1em; text-align: center; margin-top: 2em; font-style: italic;}\r\n.slide3 .genderCarousel p{font-size: 0.9em; text-align: center; font-style: italic;}\r\n.slide3 .btnNext{text-align: center; width: 100%;}\r\n/* .slide3 .nextPrevBx{background: none;} */\r\n/* .slide3 ::ng-deep .owl-item {\r\n  background-color: #f3e3e2;\r\n  border-radius: 100%;\r\n  box-shadow: 0 0 48px 6px rgba(200, 149, 155, 0.43);\r\n} */\r\n.slide3 ::ng-deep .owl-item {\r\n  transform: scale(.6);\r\n  transition: .5s ease;\r\n  background-color: #f3e3e2;\r\n  border-radius: 100%;\r\n  box-shadow: 0 0 48px 6px rgba(200, 149, 155, 0.43);\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n}\r\n.slide3 ::ng-deep .owl-item:not(.active.center) {\r\n  filter: grayscale(.6);\r\n}\r\n.slide3 ::ng-deep .owl-item.active.center {\r\n  transform: scale(1.0);\r\n}\r\n.slide3 ::ng-deep .owl-carousel .owl-stage-outer {\r\n  overflow: visible;\r\n}\r\n/*Gender Slide*/\r\n.topcurve, .bottomcurve {\r\n  position: relative;\r\n}\r\n.topcurve img, .bottomcurve img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.topcurve .topcurve-container, .bottomcurve .bottomcurve-container {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\nsection.slide3 {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  background: url('gender-bg.png') 0 no-repeat;\r\n  background-size: cover;\r\n  height: 100%;\r\n  min-height: 100%;\r\n}\r\nsection.slide7 {\r\n  background: url('responsepagebg.png') 0 no-repeat;\r\n  background-position: 100% 0;\r\n  background-size: 150%;\r\n  height: unset;\r\n}\r\n.bottomcurve .bottomcurve-container {\r\n  padding: 120px 40px 0;\r\n}\r\nsection.slide3 > * {\r\n  flex: 1;\r\n}\r\nsection.slide3 .bottomcurve-container ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.topcurve-container > div {\r\n  background: var(--red);\r\n  color: var(--white);\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  padding: 2px 10px;\r\n  display: inline-block;\r\n  border-top-left-radius: 12px;\r\n  border-bottom-right-radius: 12px;\r\n  white-space: nowrap;\r\n}\r\n.topcurve-container {\r\n  padding: 20px 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n/* section.slide3 .bottomcurve-container li {\r\n  background: var(--pink);\r\n  padding: 10px !important;\r\n  border-radius: 100px;\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n} */\r\nsection.slide3 .bottomcurve-container li a {\r\n  background: var(--pink);\r\n  padding: 10px !important;\r\n  border-radius: 100px;\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--red);\r\n}\r\nsection.slide3 .bottomcurve-container li a strong {\r\n  font-size: 30px;\r\n  line-height: 30px;\r\n  font-weight: lighter;\r\n}\r\nsection.slide3 .bottomcurve-container li a.selected {\r\n  color: var(--white);\r\n  background: var(--red);\r\n}\r\nsection.slide3 .bottomcurve-container li a.selected strong {\r\n  font-weight: bold;\r\n}\r\n/*Slide 4 Age Slider */\r\n/* .slide4 h1{text-align: center; font-size: 1.5em; color: #5b5a5a;} */\r\n/* .slide4 { display: none !important; }\r\n.slide4.show { display: flex !important; } */\r\n.slide4 ul.genderSlider li{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide4 ul.genderSlider li img{width: 100%;}\r\n.slide4 h3{font-size: 1em; text-align: center; margin-top: 2em; font-style: italic;}\r\n.slide4 p{font-size: 0.9em; text-align: center; font-style: italic;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.slide4 .ageSelector{padding: 2em 0; text-align: center;}\r\n.slide4 .ageSelector .ageInput{padding: 0; border: 0; font-size: 3em; text-align: center; margin: 0; width: 100%; font-weight: bold; margin-bottom: 3em;}\r\n.glyphicon{width: 20px; height: 20px;}\r\n.slide4 .ageSelectorBx{padding: 2em 0;}\r\n.slide4 .ageSelectorBx button{width: 50px; height: 50px; padding: 0; font-style: normal; display: inline-block;}\r\n.slide4 .ageSelectorBx .ageTxtBig{background: none; border: 0; font-size: 3em; text-align: center; display: inline-block; width: 150px; vertical-align: middle;}\r\n.btnNext{font-weight: bold; padding: 1em 0; display: block; width: 44%; text-align: right; text-transform: uppercase; font-size: 0.9em;}\r\n.btnNext.toRight{text-align: left;}\r\n/* .nextPrevBx{background: url(../assets/pagination-border.png) no-repeat center center; background-size: auto 70%; margin-top: 2em;} */\r\n/* .nextPrevBx img{margin: 0 10px; width: 25px;} */\r\n.nextPrevBx { text-align: center; }\r\n.nextPrevBx .onboardingSkip:nth-child(2) {\r\n  padding-left: 10px;\r\n  margin-left: 9px;\r\n  position: relative;\r\n}\r\n.nextPrevBx .onboardingSkip:nth-child(2):before {\r\n  content: \"\";\r\n  height: 12px;\r\n  width: 1px;\r\n  background: var(--pink);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 4px;\r\n}\r\n/* .slide4 ::ng-deep .owl-item {\r\n  min-height: 220px;\r\n} */\r\n.slide4 ::ng-deep .owl-item label {\r\n  font-size: 70px;\r\n  /* display: flex;\r\n  place-content: center; */\r\n}\r\n.slide4 ::ng-deep .owl-item label span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: var(--red);\r\n}\r\n/*Slide 5*/\r\n/* .slide5{padding: 2em 0;} */\r\n/* .slide5 h1{text-align: center; font-size: 1.5em; color: #5b5a5a; padding: 0 2em;} */\r\n.slide5 ul.genderSlider li{display: inline-block; width: 48%; margin: 1em auto; text-align: center;}\r\n.slide5 ul.genderSlider li img{width: 100%;}\r\n.slide5 ul.genderSlider li h3{font-size: 1.2em;}\r\n/*.slide3 input[type=\"radio\"]{width: 1px; height: 1px; overflow: hidden; visibility: hidden;}*/\r\n.slide5 .btnNext{font-weight: bold; padding: 1em 0; display: block;}\r\n/* .slide5 .skinSlider{padding: 4em 0 2em 0; overflow: hidden;} */\r\n/*Slide 6*/\r\n.slide6{padding: 3em 0;};\r\n/* .slide6 h1{text-align: center; font-size: 1.5em; color: #5b5a5a; padding-top: 1em;} */\r\n.webcamUnit video, .mirrored{display: block; width: 100%;}\r\n.webcam{overflow: hidden; width: 80%; position: relative; margin: 1em auto; width: 288px; height: 384px;}\r\n.webcam .video-overlay{width: 100%;}\r\n.slide6 .imageCta{text-align: center; padding: 1em 0;}\r\n.slide6 .imageCta a{position: relative; display: inline-block;}\r\n.slide6 .imageCta img{width: 100px; padding: 0 10px;}\r\n.slide6 .imageCta input{position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 1;}\r\n/* .slide6 p{padding: 0 2em;} */\r\n#analysing{width: 100%; position: absolute; top: 0; left: 0; z-index: 9; background: #fff6db; background: linear-gradient(to bottom,  #fff6db 0%,#fcdad1 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff6db', endColorstr='#fcdad1',GradientType=0 );}\r\np.toptitle {\r\n  font-size: 16px;\r\n  color: var(--textcolor);\r\n}\r\np.bottomdesc {\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n  font-weight: 500;\r\n  color: var(--textcolor);\r\n}\r\n.bottomcurve.slide6bottomcurve {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.bottomcurve.slide6bottomcurve > img {\r\n  max-height: 300px;\r\n}\r\n/*Slide 7*/\r\n/* .slide7 {\r\n    padding: 2em 0;\r\n} */\r\n/* .slide7 h1 {\r\n    font-size: 1.5em;\r\n    margin-bottom: 2em;\r\n\tcolor:#5b5a5a;\r\n\ttext-align: center;\r\n} */\r\n.slide7.show {\r\n  height: unset;\r\n}\r\n.slide7.show > * {\r\n  flex: unset;\r\n}\r\n.slide7 .top3Priorities {\r\n  padding: 2em 0; \r\n  width: 100%; \r\n  text-align: center;\r\n}\r\n.slide7 .top3Priorities h2 {\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n\tcolor: #5b5a5a;\r\n\tmargin-bottom: 1em;\r\n}\r\n.slide7 .circleUnit1 {\r\n  display: inline-block;\r\n  width: 30%;\r\n  text-align: center;\r\n  padding: 2em 0;\r\n}\r\n.slide7 .circleUnit1 h3 {\r\n  font-size: 0.8em;\r\n\tcolor: #807e7b;\r\n\tpadding: 0.5em 0;\r\n\twidth: 75%;\r\n\tmargin: 0 auto;\r\n}\r\n.slide7 .circleUnit1 span {\r\n\tfont-weight: bold; border-radius: 100px; border: 1px solid #807e7b; width: 40px; height: 40px; display: inline-block; line-height: 38px; text-align: center; color: #807e7b; font-size: 0.8em;\r\n}\r\n.slide7 .yourSkinAnlaysis{width: 100%; overflow: hidden;}\r\n.slide7 .yourSkinAnlaysis h2{\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n  color: #5b5a5a;\r\n  margin-bottom: 0.2em;\r\n}\r\nul.cse-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n.slide7 .yourSkinAnlaysis p{\r\n\tfont-size: 1em; text-align: center;\r\n}\r\n.slide7 .yourSkinAnlaysis ul li{\r\n\ttext-align: center;\r\n}\r\n.slide7 .yourSkinAnlaysis ul .circleUnit1 {\r\n\tdisplay: block; margin: 0 auto;\r\n}\r\n.slide7 .yourSkinAnlaysis .prodImg {\r\n\twidth: 90%; margin: 0 auto; padding: 2em 0; display: block;\r\n}\r\n.slide7 .yourSkinAnlaysis .buyNowLinks {\r\n\twidth: 40%;\r\n\tdisplay: inline-block;\r\n}\r\n.slide7 .tab {\r\n\tbackground: #d7e6f4; margin-bottom: 2em; padding: 2em; text-align: center;\r\n}\r\n.slide7 .circleUnit1.bigCircleUnit {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.slide7 .circleUnit1.bigCircleUnit span {\r\n  width: 150px; \r\n\theight: 150px; \r\n\tline-height: 100px; \r\n\tfont-size: 45px; \r\n\tborder: 5px solid transparent; \r\n\tposition: relative;\r\n}\r\n.slide7 .topcurve > img {\r\n  height: 400px;\r\n}\r\n.sw-photopersent {\r\n  /* width: 90%; */\r\n  width: 351px;\r\n  padding: 80px;\r\n  border: 3px solid var(--white);\r\n  border-radius: 100%;\r\n  margin-left: -60px;\r\n  margin-top: -190px;\r\n  position: relative;\r\n}\r\n.sw-photopersent .circle-svg {\r\n  position: absolute;\r\n  top: 50px;\r\n  right: 15px;\r\n  background: white;\r\n  border-radius: 100px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(2) {\r\n  top: 110px;\r\n  right: -15px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(3) {\r\n  top: 180px;\r\n  right: -20px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(4) {\r\n  top: 245px;\r\n  right: 5px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(5) {\r\n  top: 290px;\r\n  right: 48px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(6) {\r\n  top: 315px;\r\n  right: 105px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(7) {\r\n  top: 327px;\r\n  right: 170px;\r\n}\r\n.sw-photopersent > div .circle-svg:nth-child(5) > span, .sw-photopersent > div .circle-svg:nth-child(6) > span {\r\n  bottom: -35px;\r\n}\r\n.sw-photopersent img {\r\n  width: 100%;\r\n  background: #f6dbdd;\r\n  border-radius: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  aspect-ratio: 1/1;\r\n}\r\n.sw-colorindicator {\r\n  margin-top: 100px;\r\n}\r\n.sw-colorindicator ul {\r\n  margin-top: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.sw-colorindicator ul li {\r\n  width: 70px;\r\n  text-align: center;\r\n  line-height: 17px;\r\n}\r\n.sw-colorindicator ul li:before {\r\n  content: \"\";\r\n  height: 5px;\r\n  width: 100%;\r\n  background: #fc5656;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  border-radius: 100px;\r\n}\r\n.sw-colorindicator ul li:nth-child(2):before {\r\n  background: #fdee8b;\r\n}\r\n.sw-colorindicator ul li:last-child {\r\n  z-index: 1;\r\n}\r\n.sw-colorindicator ul li:last-child:before {\r\n  background: #acfc8f\r\n}\r\n.sr-circle-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.score-recommendation {\r\n  margin: 30px 0;\r\n  opacity: 0;\r\n}\r\n.score-recommendation ul li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  flex: 1;\r\n}\r\n.score-recommendation ul {\r\n  display: flex;\r\n  align-items: stretch;\r\n  justify-content: space-around;\r\n}\r\n.sr-buycard {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.sr-buycard a {\r\n  margin-top: 15px;\r\n}\r\n.sr-circle-wrapper > span {\r\n  margin-top: 10px;\r\n}\r\n.sr-buycard > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 100%;\r\n  overflow: visible;\r\n  aspect-ratio: 1/1;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n.sr-buycard .btnStyle {\r\n  padding: 10px;\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n.slide7content {\r\n  padding: 0 10px;\r\n}\r\n.sd-product {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n}\r\n.sd-product > div {\r\n  flex: 1;\r\n  max-width: 50%;\r\n}\r\n.sdp-left img {\r\n  width: 100%;\r\n}\r\n.sdp-right > * {\r\n  margin-bottom: 12px;\r\n}\r\n.sdp-right a {\r\n  margin: 0;\r\n  display: inline-block;\r\n}\r\n.sdpr-title {\r\n  font-weight: bold;\r\n}\r\n.cse-card {\r\n  padding: 55px 25px 40px;\r\n  background: #fcf1ef;\r\n  border-radius: 40px;\r\n  position: relative;\r\n  box-shadow: inset 0 0 27px 0 rgb(255 165 143 / 80%);\r\n}\r\n.consolexpert {\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.cse-title {\r\n  position: absolute;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding: 10px 55px;\r\n  color:var(--white);\r\n  background: var(--red);\r\n  border-radius: 100px;\r\n  white-space: nowrap;\r\n  top: -21px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  font-family: 'poppins';\r\n}\r\n.csec-image img {\r\n  padding: 8px;\r\n  max-width: 65px;\r\n  border: 1px solid var(--red);\r\n  border-radius: 10px;\r\n  margin-right: 15px;\r\n}\r\n.csec-text h4 {\r\n  font-size: 14px;\r\n  margin-bottom: 5px;\r\n}\r\n.skin-analysiswrapper {\r\n  opacity: 0;\r\n}\r\n.skin-healthparameters ul {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 -2px;\r\n}\r\n.skin-healthparameters li {\r\n  padding: 6px 12px !important;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n  border: 1px solid #5b5a5a;\r\n  border-radius: 100px;\r\n  color: var(--red);\r\n  font-weight: bold;\r\n  margin: 0 2px 10px !important;\r\n}\r\n.skin-healthparameters li.selected {\r\n  border-color: var(--red);\r\n  background-color: var(--red);\r\n  color: var(--white);\r\n}\r\n.skin-healthparameters.paramTabsSticky {\r\n  position: fixed;\r\n  background: var(--white);\r\n  padding: 10px 0;\r\n  margin: 0 !important;\r\n  -webkit-animation: .5s fadeSticky linear;\r\n          animation: .5s fadeSticky linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n.inView {\r\n  -webkit-animation: .5s fadeIn linear;\r\n          animation: .5s fadeIn linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@-webkit-keyframes fadeSticky {\r\n  0% {\r\n    opacity: 0;\r\n    bottom: -200px;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    bottom: 0;\r\n  }\r\n}\r\n@keyframes fadeSticky {\r\n  0% {\r\n    opacity: 0;\r\n    bottom: -200px;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    bottom: 0;\r\n  }\r\n}\r\n.static-banner {\r\n  padding-bottom: 140px;\r\n  margin-left: -10px;\r\n  margin-right: -10px;\r\n}\r\n.clear, .after {\r\n  clear: both;\r\n}\r\n.clear:after, .after:after {\r\n  visibility: hidden;\r\n  display: block;\r\n  font-size: 0;\r\n  content: \" \";\r\n  clear: both;\r\n  height: 0;\r\n}\r\n.w100{width: 100%; display: block;}\r\n/****************************************************************\r\n *\r\n * CSS Percentage Circle\r\n * Author: Andre Firchow\r\n *\r\n*****************************************************************/\r\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\r\n  clip: rect(auto, auto, auto, auto);\r\n}\r\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\r\n  position: absolute;\r\n  border: 0.04em solid #ade499;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n  clip: rect(0em, 0.5em, 1em, 0em);\r\n  border-radius: 50%;\r\n  transform: rotate(0deg);\r\n}\r\n.fillbar {\r\n  position: absolute;\r\n  border: 0.01em solid rgb(128 128 128 / 25%);\r\n  width: 0.95em;\r\n  height: 0.95em;\r\n  transform: translate(-50%, -50%) rotate(360deg);\r\n  border-radius: 50%;\r\n  left: 50%;\r\n  top: 50%;\r\n}\r\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\r\n  transform: rotate(180deg);\r\n}\r\n.c100 {\r\n  position: relative;\r\n  font-size: 120px;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 0.1em 0.1em 0;\r\n  background-color: #f8fdf6;\r\n}\r\n.c100 *, .c100 *:before, .c100 *:after {\r\n  box-sizing: content-box;\r\n}\r\n.c100.center {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n.c100.big {\r\n  font-size: 240px;\r\n}\r\n.c100.small {\r\n  font-size: 80px;\r\n}\r\n.c100 > span {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 5em;\r\n  line-height: 5em;\r\n  font-size: 0.2em;\r\n  color: #ade499;\r\n  display: block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  transition-property: all;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-out;\r\n\ttop: 30%; line-height: 1em;\r\n}\r\n.c100 > span strong{\r\n\tdisplay: block; font-size: 20px; color: #5b5a5a;\r\n}\r\n.c100:after {\r\n  position: absolute;\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  transition-property: all;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n.c100 .slice {\r\n  position: absolute;\r\n  width: 1em;\r\n  height: 1em;\r\n  clip: rect(0em, 1em, 1em, 0.5em);\r\n}\r\n.c100.p1 .bar {\r\n  transform: rotate(3.6deg);\r\n}\r\n.c100.p2 .bar {\r\n  transform: rotate(7.2deg);\r\n}\r\n.c100.p3 .bar {\r\n  transform: rotate(10.8deg);\r\n}\r\n.c100.p4 .bar {\r\n  transform: rotate(14.4deg);\r\n}\r\n.c100.p5 .bar {\r\n  transform: rotate(18deg);\r\n}\r\n.c100.p6 .bar {\r\n  transform: rotate(21.6deg);\r\n}\r\n.c100.p7 .bar {\r\n  transform: rotate(25.2deg);\r\n}\r\n.c100.p8 .bar {\r\n  transform: rotate(28.8deg);\r\n}\r\n.c100.p9 .bar {\r\n  transform: rotate(32.4deg);\r\n}\r\n.c100.p10 .bar {\r\n  transform: rotate(36deg);\r\n}\r\n.c100.p11 .bar {\r\n  transform: rotate(39.6deg);\r\n}\r\n.c100.p12 .bar {\r\n  transform: rotate(43.2deg);\r\n}\r\n.c100.p13 .bar {\r\n  transform: rotate(46.8deg);\r\n}\r\n.c100.p14 .bar {\r\n  transform: rotate(50.4deg);\r\n}\r\n.c100.p15 .bar {\r\n  transform: rotate(54deg);\r\n}\r\n.c100.p16 .bar {\r\n  transform: rotate(57.6deg);\r\n}\r\n.c100.p17 .bar {\r\n  transform: rotate(61.2deg);\r\n}\r\n.c100.p18 .bar {\r\n  transform: rotate(64.8deg);\r\n}\r\n.c100.p19 .bar {\r\n  transform: rotate(68.4deg);\r\n}\r\n.c100.p20 .bar {\r\n  transform: rotate(72deg);\r\n}\r\n.c100.p21 .bar {\r\n  transform: rotate(75.6deg);\r\n}\r\n.c100.p22 .bar {\r\n  transform: rotate(79.2deg);\r\n}\r\n.c100.p23 .bar {\r\n  transform: rotate(82.8deg);\r\n}\r\n.c100.p24 .bar {\r\n  transform: rotate(86.4deg);\r\n}\r\n.c100.p25 .bar {\r\n  transform: rotate(90deg);\r\n}\r\n.c100.p26 .bar {\r\n  transform: rotate(93.6deg);\r\n}\r\n.c100.p27 .bar {\r\n  transform: rotate(97.2deg);\r\n}\r\n.c100.p28 .bar {\r\n  transform: rotate(100.8deg);\r\n}\r\n.c100.p29 .bar {\r\n  transform: rotate(104.4deg);\r\n}\r\n.c100.p30 .bar {\r\n  transform: rotate(108deg);\r\n}\r\n.c100.p31 .bar {\r\n  transform: rotate(111.6deg);\r\n}\r\n.c100.p32 .bar {\r\n  transform: rotate(115.2deg);\r\n}\r\n.c100.p33 .bar {\r\n  transform: rotate(118.8deg);\r\n}\r\n.c100.p34 .bar {\r\n  transform: rotate(122.4deg);\r\n}\r\n.c100.p35 .bar {\r\n  transform: rotate(126deg);\r\n}\r\n.c100.p36 .bar {\r\n  transform: rotate(129.6deg);\r\n}\r\n.c100.p37 .bar {\r\n  transform: rotate(133.2deg);\r\n}\r\n.c100.p38 .bar {\r\n  transform: rotate(136.8deg);\r\n}\r\n.c100.p39 .bar {\r\n  transform: rotate(140.4deg);\r\n}\r\n.c100.p40 .bar {\r\n  transform: rotate(144deg);\r\n}\r\n.c100.p41 .bar {\r\n  transform: rotate(147.6deg);\r\n}\r\n.c100.p42 .bar {\r\n  transform: rotate(151.2deg);\r\n}\r\n.c100.p43 .bar {\r\n  transform: rotate(154.8deg);\r\n}\r\n.c100.p44 .bar {\r\n  transform: rotate(158.4deg);\r\n}\r\n.c100.p45 .bar {\r\n  transform: rotate(162deg);\r\n}\r\n.c100.p46 .bar {\r\n  transform: rotate(165.6deg);\r\n}\r\n.c100.p47 .bar {\r\n  transform: rotate(169.2deg);\r\n}\r\n.c100.p48 .bar {\r\n  transform: rotate(172.8deg);\r\n}\r\n.c100.p49 .bar {\r\n  transform: rotate(176.4deg);\r\n}\r\n.c100.p50 .bar {\r\n  transform: rotate(180deg);\r\n}\r\n.c100.p51 .bar {\r\n  transform: rotate(183.6deg);\r\n}\r\n.c100.p52 .bar {\r\n  transform: rotate(187.2deg);\r\n}\r\n.c100.p53 .bar {\r\n  transform: rotate(190.8deg);\r\n}\r\n.c100.p54 .bar {\r\n  transform: rotate(194.4deg);\r\n}\r\n.c100.p55 .bar {\r\n  transform: rotate(198deg);\r\n}\r\n.c100.p56 .bar {\r\n  transform: rotate(201.6deg);\r\n}\r\n.c100.p57 .bar {\r\n  transform: rotate(205.2deg);\r\n}\r\n.c100.p58 .bar {\r\n  transform: rotate(208.8deg);\r\n}\r\n.c100.p59 .bar {\r\n  transform: rotate(212.4deg);\r\n}\r\n.c100.p60 .bar {\r\n  transform: rotate(216deg);\r\n}\r\n.c100.p61 .bar {\r\n  transform: rotate(219.6deg);\r\n}\r\n.c100.p62 .bar {\r\n  transform: rotate(223.2deg);\r\n}\r\n.c100.p63 .bar {\r\n  transform: rotate(226.8deg);\r\n}\r\n.c100.p64 .bar {\r\n  transform: rotate(230.4deg);\r\n}\r\n.c100.p65 .bar {\r\n  transform: rotate(234deg);\r\n}\r\n.c100.p66 .bar {\r\n  transform: rotate(237.6deg);\r\n}\r\n.c100.p67 .bar {\r\n  transform: rotate(241.2deg);\r\n}\r\n.c100.p68 .bar {\r\n  transform: rotate(244.8deg);\r\n}\r\n.c100.p69 .bar {\r\n  transform: rotate(248.4deg);\r\n}\r\n.c100.p70 .bar {\r\n  transform: rotate(252deg);\r\n}\r\n.c100.p71 .bar {\r\n  transform: rotate(255.6deg);\r\n}\r\n.c100.p72 .bar {\r\n  transform: rotate(259.2deg);\r\n}\r\n.c100.p73 .bar {\r\n  transform: rotate(262.8deg);\r\n}\r\n.c100.p74 .bar {\r\n  transform: rotate(266.4deg);\r\n}\r\n.c100.p75 .bar {\r\n  transform: rotate(270deg);\r\n}\r\n.c100.p76 .bar {\r\n  transform: rotate(273.6deg);\r\n}\r\n.c100.p77 .bar {\r\n  transform: rotate(277.2deg);\r\n}\r\n.c100.p78 .bar {\r\n  transform: rotate(280.8deg);\r\n}\r\n.c100.p79 .bar {\r\n  transform: rotate(284.4deg);\r\n}\r\n.c100.p80 .bar {\r\n  transform: rotate(288deg);\r\n}\r\n.c100.p81 .bar {\r\n  transform: rotate(291.6deg);\r\n}\r\n.c100.p82 .bar {\r\n  transform: rotate(295.2deg);\r\n}\r\n.c100.p83 .bar {\r\n  transform: rotate(298.8deg);\r\n}\r\n.c100.p84 .bar {\r\n  transform: rotate(302.4deg);\r\n}\r\n.c100.p85 .bar {\r\n  transform: rotate(306deg);\r\n}\r\n.c100.p86 .bar {\r\n  transform: rotate(309.6deg);\r\n}\r\n.c100.p87 .bar {\r\n  transform: rotate(313.2deg);\r\n}\r\n.c100.p88 .bar {\r\n  transform: rotate(316.8deg);\r\n}\r\n.c100.p89 .bar {\r\n  transform: rotate(320.4deg);\r\n}\r\n.c100.p90 .bar {\r\n  transform: rotate(324deg);\r\n}\r\n.c100.p91 .bar {\r\n  transform: rotate(327.6deg);\r\n}\r\n.c100.p92 .bar {\r\n  transform: rotate(331.2deg);\r\n}\r\n.c100.p93 .bar {\r\n  transform: rotate(334.8deg);\r\n}\r\n.c100.p94 .bar {\r\n  transform: rotate(338.4deg);\r\n}\r\n.c100.p95 .bar {\r\n  transform: rotate(342deg);\r\n}\r\n.c100.p96 .bar {\r\n  transform: rotate(345.6deg);\r\n}\r\n.c100.p97 .bar {\r\n  transform: rotate(349.2deg);\r\n}\r\n.c100.p98 .bar {\r\n  transform: rotate(352.8deg);\r\n}\r\n.c100.p99 .bar {\r\n  transform: rotate(356.4deg);\r\n}\r\n.c100.p100 .bar {\r\n  transform: rotate(360deg);\r\n}\r\n.c100:hover {\r\n  cursor: default;\r\n}\r\n.c100:hover > span {\r\n  width: 3.33em;\r\n  line-height: 3.33em;\r\n  font-size: 0.3em;\r\n  color: #307bbb;\r\n}\r\n.c100:hover:after {\r\n  top: 0.04em;\r\n  left: 0.04em;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n}\r\n.c100.dark {\r\n  background-color: #777777;\r\n}\r\n.c100.dark .bar,\r\n.c100.dark .fill {\r\n  border-color: #c6ff00 !important;\r\n}\r\n.c100.dark > span {\r\n  color: #777777;\r\n}\r\n.c100.dark:after {\r\n  background-color: #666666;\r\n}\r\n.c100.dark:hover > span {\r\n  color: #c6ff00;\r\n}\r\n.c100.green .bar, .c100.green .fill {\r\n  border-color: #ade499 !important;\r\n}\r\n.c100.green:hover > span {\r\n  color: #ade499;\r\n}\r\n.c100.green.dark .bar, .c100.green.dark .fill {\r\n  border-color: #5fd400 !important;\r\n}\r\n.c100.green.dark:hover > span {\r\n  color: #5fd400;\r\n}\r\n.c100.orange .bar, .c100.orange .fill {\r\n  border-color: #dd9d22 !important;\r\n}\r\n.c100.orange:hover > span {\r\n  color: #dd9d22;\r\n}\r\n.c100.orange.dark .bar, .c100.orange.dark .fill {\r\n  border-color: #e08833 !important;\r\n}\r\n.c100.orange.dark:hover > span {\r\n  color: #e08833;\r\n}\r\n/*Circle CSS Ends*/\r\n.circle-svg {\r\n  position: relative;\r\n}\r\n.circle-svg.large svg {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.circle-svg.large .circle-chart__percent {\r\n  font-size: 30px;\r\n}\r\n.circle-svg.medium svg {\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.circle-svg.medium .circle-chart__percent {\r\n  font-size: 22px;\r\n}\r\n.circle-svg.small svg {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.circle-svg.small > span {\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n}\r\n.circle-svg.small .circle-chart__percent {\r\n  font-size: 13px;\r\n}\r\n.circle-chart__info {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center\r\n}\r\n.circle-chart__circle {\r\n  animation: circle-chart-fill 2s reverse;\r\n  transform: rotate(-90deg);\r\n  transform-origin: center\r\n}\r\n@-webkit-keyframes circle-chart-fill {\r\n  to {\r\n    stroke-dasharray: 0 100\r\n  }\r\n}\r\n@keyframes circle-chart-fill {\r\n  to {\r\n    stroke-dasharray: 0 100\r\n  }\r\n}\r\n/*Slide Login*/\r\nsection.slideLogin{\r\n  display: flex;           /* establish flex container */\r\n  flex-direction: column;  /* make main axis vertical */\r\n  justify-content: center; /* center items vertically, in this case */\r\n  align-items: center;\r\n  /* padding: 0 2em; */\r\n}\r\n/* .slideLogin h1{text-align: center; font-size: 1.5em; color: #5b5a5a;} */\r\n.slideLogin #PushID{width: 0; padding: 0; border: 0; height: 0; position: relative; z-index: -1;}\r\n#txtNumber{border-radius: 100px; border: 1px solid #ccc; margin-bottom: 1em; display: block; width: 100%;}\r\n.slideLogin .btnStyle{ margin-bottom: 0; text-align: center; }\r\n.slideLogin .btnStyle, .slideLogin input {\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.slide3.slideLogin {\r\n  display: block;\r\n}\r\n.slideLogin form {\r\n  position: absolute;\r\n  padding: 0 4em;\r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.registerBx {\r\n\tpadding: 2em 0 1em 0;\r\n\ttext-align: center;\r\n}\r\n.registerBx input, .registerBx button {\r\n\tpadding: 1em;\r\n  display: inline-block;\r\n}\r\n.socialIcons {\r\n\t/* padding-bottom: 2em; */\r\n\ttext-align: center;\r\n}\r\n.socialIcons img {\r\n\twidth: 70px; padding: 1em 0.5em;\r\n}\r\n.dividerOr {\r\n\tpadding: 1em 0; \r\n  /* border-bottom: 1px solid #ccc;  */\r\n  height: 1px; margin-bottom: 2em; position: relative; text-align: center; line-height: 2em;\r\n}\r\n.dividerOr span{\r\n\t/* background: #fff; */\r\n    padding: 1em;\r\n    position: relative;\r\n}\r\n.dividerOr span:before, .dividerOr span:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  width: 110px;\r\n  position: absolute;\r\n  background: var(--red);\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.dividerOr span:before {\r\n  left: -120px;\r\n}\r\n.dividerOr span:after {\r\n  right: -120px;\r\n}\r\n/* .btnStyle {\r\n\tcolor:#414141; background: #ffe76b; background: -moz-linear-gradient(top,  #ffe76b 0%, #fff5c5 100%); background: -webkit-linear-gradient(top,  #ffe76b 0%,#fff5c5 100%); background: linear-gradient(to bottom,  #ffe76b 0%,#fff5c5 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe76b', endColorstr='#fff5c5',GradientType=0 ); display: block; border: 0; outline: 0; padding: 10px 3em; font-weight: bold; font-size: 1.1em; border-radius: 50px; margin: 0 auto 2em auto;\r\n} */\r\n.btnStyle {\r\n  color: var(--white);\r\n  background: var(--red);\r\n  border: none;\r\n  display: flex;\r\n  padding: 14px 44px;\r\n  border-radius: 20px;\r\n  font-family: 'poppins';\r\n  white-space: nowrap;\r\n}\r\n.btnStyle > img {\r\n  max-width: 18px;\r\n  margin-right: 4px;\r\n  margin-top: -3px;\r\n}\r\n.slide7 .c100 strong{\r\n\tdisplay: block; font-size: 23px; color: #5b5a5a; line-height: 25px; padding-top: 10px; font-weight: normal;\r\n}\r\n.slide7 .c100 span em{\r\n\tfont-style: normal; font-size: 1.4em;\r\n}\r\n.slide7 .sevenParamsBx{\r\n\tposition: relative; margin-top: 2em;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1 {\r\n\tposition: absolute; left: 0; top: 0; padding: 0 !important; \r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u1{\r\n\ttop: 0;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u2{\r\n\ttop: 25%;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u3{\r\n\ttop: 51%;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u4{\r\n\ttop: 0;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u5{\r\n\ttop: 25%;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u6{\r\n\ttop: 51%;\r\n\tright: 0;\r\n\tleft: inherit;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u7{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1:after { \r\n\tcontent: \"\"; \r\n  position: absolute; \r\n  right: 0; \r\n  top: 33%; \r\n  border-top: 2px dashed #807e7b; \r\n  width: 30%; \r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u4:after, .slide7 .sevenParamsBx .circleUnit1.u5:after, .slide7 .sevenParamsBx .circleUnit1.u6:after { \r\n\tright: inherit; left: 0;\r\n}\r\n.slide7 .sevenParamsBx .circleUnit1.u7:after{\r\n\tcontent: none;\r\n}\r\n.c100.big:before { content: ''; width: 30px; height: 30px; border-radius: 50%; background: #ade499; position: absolute; top: -9px; left: 50%; margin-left: -5px; z-index: 1; transform: rotate( 180deg ); box-shadow: 2px 2px 10px rgb(173 228 153 / 50%); }\r\n.slide7 .customSmall.c100{width: 0.7em; height: 0.7em; background-color: #dad6cf; float: none; display: inline-block; margin: 0 0.2em 0.5em 0.2em;}\r\n.slide7 .customSmall.c100 > span{color: #807e7b; font-weight: bold; top: 39%; width: 100%; font-size: 0.18em;}\r\n.slide7 .customSmall.c100 .slice{width: 0.72em; height: 0.72em;}\r\n.slide7 .customSmall.c100 .bar{width: 0.62em; height: 0.62em; border-color: #ff5722 !important;}\r\n.slide7 .customSmall.c100 .fill{border-color: #ff5722 !important; width: 0.62em; height: 0.62em;}\r\n.slide7 .customSmall.c100:after{top: 0.02em; left: 0.02em; width: 0.66em; height: 0.66em;}\r\n.slide7 .customSmall.c100 h3 { font-size: 0.15em; width: 120%; text-align: center; position: absolute; top: 110%; left:-10%; }\r\n.slide7 .thankYouWrap .imgTick{display: block; width: 50px; margin: 1em auto;}\r\n.slide7 .thankYouWrap h5{font-size: 1.4em; text-align: center; width: 80%; margin: 0 auto 1em auto; color: #5b5a5a;}\r\n.slide7 .thankYouWrap .btnStyle{width: 250px;}\r\n.thank-form {\r\n  padding: 40px 50px;\r\n  margin: 0 -10px;\r\n  background-color: var(--white);\r\n  text-align: center;\r\n}\r\n.thank-form > img {\r\n  max-width: 50px;\r\n  margin: 0 auto;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n.thank-form input {\r\n  border-radius: 100px;\r\n  border: 1px solid var(--red) !important;\r\n  background: transparent;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  width: 70%;\r\n}\r\n.thank-form a {\r\n  display: inline-block !important;\r\n}\r\n.thank-form ::-moz-placeholder {\r\n  color: var(--red);\r\n}\r\n.thank-form ::placeholder {\r\n  color: var(--red);\r\n}\r\n/* section.slide7 {\r\n  background: url(./../assets/newassets/resultpagebg.png) 0 no-repeat;\r\n  background-size: cover;\r\n} */\r\n.slide7 .topcurve {\r\n  z-index: 1;\r\n}\r\n@media screen and (max-width: 960px) {\r\n  /*Camera Module*/\r\n  .video-overlay {\r\n    width: 375px;\r\n\t  width: 100%;\r\n  }\r\n}\r\n@media screen and (max-width: 420px) {\r\n  .btnStyle > img {\r\n    max-width: 14px;\r\n    margin-right: 2px;\r\n  }\r\n\r\n  .sr-buycard .btnStyle {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .btnStyle {\r\n    padding: 10px 34px;\r\n  }\r\n\r\n  section.slide3 .bottomcurve-container li a {\r\n    height: 70px;\r\n    width: 70px;\r\n  }\r\n}\r\n@media screen and (max-height: 700px) {\r\n  .onboardSlideWhiteOverlay-container {\r\n    padding: 90px 25px 0;\r\n  }\r\n  .bottomcurve .bottomcurve-container {\r\n    padding: 90px 25px 0;\r\n  }\r\n  .bottomcurve .bottomcurve-container .nextPrevBx {\r\n    margin-top: 10px !important;\r\n  }\r\n  section.slide3 > div:nth-child(2) {\r\n    flex: .5;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQuY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UsaUZBQWlGLGFBQWE7QUFDOUYsbUJBQW1CLG9CQUFvQjtBQUN2QyxzQkFBc0IsWUFBWSxDQUFDLFFBQVE7QUFDM0MsU0FBUyxZQUFZO0FBQ3JCLEtBQUssc0JBQXNCLENBQUMsNkJBQTZCLENBQUMseUJBQXlCO0FBQ25GLEtBQUssUUFBUTtBQUNiLGdCQUFnQixZQUFZLEVBQUUsU0FBUyxDQUFDO0FBQ3hDLGlCQUFpQixTQUFTLENBQUMsb0JBQW9CO0FBQy9DLEdBQUcsYUFBYTtBQUNoQixZQUFZLHdCQUF3QjtBQUNwQyxTQUFTLGVBQWU7QUFDeEIsSUFBSSxpQkFBaUI7QUFDckIsS0FBSyxlQUFlLENBQUMsVUFBVTtBQUMvQixrQkFBa0IsMkJBQTJCLENBQUMsYUFBYTtBQUMzRCxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0I7QUFDN0QsRUFBRSxzQ0FBc0M7QUFDeEMsTUFBTSxhQUFhO0FBQ25CLFFBQVEsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUI7QUFDN0UsSUFBSSxTQUFTO0FBQ2IsSUFBSSxhQUFhO0FBQ2pCLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDekIsZUFBZSxlQUFlO0FBQzlCLE9BQU8sUUFBUTtBQUNmLFNBQVMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLDBCQUEwQjtBQUN4RSxPQUFPLFFBQVEsQ0FBQyxTQUFTO0FBQ3pCLDZCQUE2QixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVM7QUFDbEYsYUFBYSxrQkFBa0I7QUFDL0IsMEVBQTBFLHlCQUF5QixDQUFDLGNBQWM7QUFDbEgsaUNBQWlDLGNBQWM7QUFDL0MsMkNBQTJDLHFCQUFxQixDQUFDLFNBQVM7QUFDMUUscUJBQXFCLDRCQUE0QixDQUE0RCxzQkFBc0I7QUFDbkksbUdB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QUFDNUI7QUFDQTtFQUtFLHdCQUF3QjtBQUMxQjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLDJCQUEyQjtBQUM3QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUtFLHlCQUF5QjtBQUMzQjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7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aUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICBSZXNldCBDU1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuYXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja31cclxuYXVkaW8sY2FudmFzLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfVxyXG5baGlkZGVuXXtkaXNwbGF5Om5vbmV9XHJcbmh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlfVxyXG5ib2R5e21hcmdpbjowfVxyXG5hOmZvY3VzLCA6Zm9jdXN7b3V0bGluZTpub25lOyBib3JkZXI6IDA7fVxyXG5hOmFjdGl2ZSxhOmhvdmVye291dGxpbmU6MDt0ZXh0LWRlY29yYXRpb246bm9uZX1cclxuaDF7Zm9udC1zaXplOjJlbX1cclxuYWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkfVxyXG5iLHN0cm9uZ3tmb250LXdlaWdodDo3MDB9XHJcbmRmbntmb250LXN0eWxlOml0YWxpY31cclxubWFya3tiYWNrZ3JvdW5kOiNmZjA7Y29sb3I6IzAwMH1cclxuY29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLHNlcmlmO2ZvbnQtc2l6ZToxZW19XHJcbnByZXt3aGl0ZS1zcGFjZTpwcmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmR9XHJcbnF7cXVvdGVzOlwiXFwyMDFDXCIgXCJcXDIwMURcIiBcIlxcMjAxOFwiIFwiXFwyMDE5XCJ9XHJcbnNtYWxse2ZvbnQtc2l6ZTo4MCV9XHJcbnN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVxyXG5zdXB7dG9wOi0uNWVtfVxyXG5zdWJ7Ym90dG9tOi0uMjVlbX1cclxuaW1ne2JvcmRlcjowO291dGxpbmU6bm9uZX1cclxuc3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufVxyXG5maWd1cmV7bWFyZ2luOjB9XHJcbmZpZWxkc2V0e2JvcmRlcjoxcHggc29saWQgc2lsdmVyO21hcmdpbjowIDJweDtwYWRkaW5nOi4zNWVtIC42MjVlbSAuNzVlbX1cclxubGVnZW5ke2JvcmRlcjowO3BhZGRpbmc6MH1cclxuYnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO21hcmdpbjowO291dGxpbmU6MH1cclxuYnV0dG9uLGlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1cclxuYnV0dG9uLGh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxpbnB1dFt0eXBlPVwicmVzZXRcIl0saW5wdXRbdHlwZT1cInN1Ym1pdFwiXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2N1cnNvcjpwb2ludGVyfVxyXG5idXR0b25bZGlzYWJsZWRdLGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLGlucHV0W3R5cGU9XCJyYWRpb1wiXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fVxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9XHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDtwYWRkaW5nOjB9XHJcbnRleHRhcmVhe292ZXJmbG93OmF1dG87dmVydGljYWwtYWxpZ246dG9wfVxyXG50YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH1cclxuYXt0ZXh0LWRlY29yYXRpb246bm9uZTtvdXRsaW5lOm5vbmU7Y29sb3I6IzAwMH1cclxudWx7bWFyZ2luOjA7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZX1cclxudWwgbGl7bWFyZ2luOjA7cGFkZGluZzowfVxyXG4uYWxpZ25DZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9XHJcbmJvZHl7YmFja2dyb3VuZDojZmZmO2ZvbnQtc2l6ZToxMDAlO2ZvbnQtZmFtaWx5OiAnR2VvZ3JvdGVzcXVlLVJlZ3VsYXInO2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMWIxYTFhO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO31cclxuLmNsZWFyLC5hZnRlcntjbGVhcjpib3RofVxyXG4uY2xlYXI6YWZ0ZXIsLmFmdGVyOmFmdGVye3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29udGVudDpcIiBcIjtjbGVhcjpib3RoO2hlaWdodDowfVxyXG4qIGh0bWwgLmNsZWFyLCogaHRtbCAuYWZ0ZXJ7em9vbToxO2NsZWFyOmJvdGg7Zm9udC1zaXplOjFweCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MXB4IWltcG9ydGFudH1cclxuOmZpcnN0LWNoaWxkK2h0bWwgLmNsZWFyLDpmaXJzdC1jaGlsZCtodG1sIC5hZnRlcnt6b29tOjE7Y2xlYXI6Ym90aDtmb250LXNpemU6MXB4IWltcG9ydGFudDtsaW5lLWhlaWdodDoxcHghaW1wb3J0YW50fVxyXG5pbWd7Ym9yZGVyOjAgbm9uZX1cclxuLnRvUmlnaHR7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fVxyXG4udG9MZWZ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50fVxyXG4udG9DZW50ZXJ7ZmxvYXQ6bm9uZSFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvfVxyXG4ubm9QYWRUb3B7cGFkZGluZy10b3A6MCFpbXBvcnRhbnR9XHJcbmh0bWwsYm9keXttaW4taGVpZ2h0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTt3aWR0aDoxMDAlO31cclxuKnttYXJnaW46MDtwYWRkaW5nOjB9XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICBSZXNldCBDU1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiIsIkBpbXBvcnQgJ3Jlc2V0LmNzcyc7XHJcblxyXG4vKlNsaWRlcyovXHJcbnNlY3Rpb257XHJcbiAgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDUwcHg7IG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGUxIGltZ3tcclxuICB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qQ2FtZXJhIE1vZHVsZSovXHJcbi52aWRlby1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA2NDBweDtcclxufVxyXG5cclxuLnVwbG9hZC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVwbG9hZC1idXR0b24gaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGU3IC5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGU3IC5mYWNlTWVzaHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlNyAuaW1hZ2VWaWV3e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDQ2JTsgbWFyZ2luOiAxZW0gYXV0bzsgYm9yZGVyLXJhZGl1czogMTBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogMTtcclxufVxyXG5cclxuLypHbG9iYWwqL1xyXG4vKiBzZWN0aW9ue1xyXG5cdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvYmcuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjZmZmO1xyXG5cdGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG59ICovXHJcblxyXG4vKlNsaWRlIDEqL1xyXG5cclxuLypTbGlkZSAyKi9cclxuLyogLnNsaWRlMntwYWRkaW5nOjAgMmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc2xpZGUyIC5sb2dve3dpZHRoOjUwJTsgbWFyZ2luOjAgYXV0bzsgZGlzcGxheTogYmxvY2s7IHBhZGRpbmc6IDEuNWVtIDA7fVxyXG4uc2xpZGUyIGgxe2ZvbnQtc2l6ZTogMS4zZW07IG1hcmdpbi1ib3R0b206IDAuNWVtO31cclxuLnNsaWRlMiBwe2ZvbnQtc2l6ZTogMC44ZW07IGxpbmUtaGVpZ2h0OiAxLjVlbTsgbWFyZ2luLWJvdHRvbTogMDt9XHJcbi5zbGlkZTIgaW1ne2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogOTUlOyBtYXJnaW46IDAgYXV0bzt9XHJcbi5zbGlkZTIgbGFiZWx7Y29sb3I6IzViNWE1YTsgbWFyZ2luLWJvdHRvbTogMWVtOyBtYXJnaW4tdG9wOiAwLjVlbTsgZm9udC1zaXplOiAwLjhlbTt9XHJcbi5zbGlkZTIgLmJ0blN0eWxle2NvbG9yOiM0MTQxNDE7IGJhY2tncm91bmQ6ICNmZmU3NmI7IGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZmU3NmIgMCUsICNmZmY1YzUgMTAwJSk7IGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZmU3NmIgMCUsI2ZmZjVjNSAxMDAlKTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICNmZmU3NmIgMCUsI2ZmZjVjNSAxMDAlKTsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmU3NmInLCBlbmRDb2xvcnN0cj0nI2ZmZjVjNScsR3JhZGllbnRUeXBlPTAgKTsgZGlzcGxheTogYmxvY2s7IGJvcmRlcjogMDsgb3V0bGluZTogMDsgcGFkZGluZzogMTBweCAzZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDEuMWVtOyBib3JkZXItcmFkaXVzOiA1MHB4OyBtYXJnaW46IDAgYXV0byAwIGF1dG87IGRpc3BsYXk6IGlubGluZS1ibG9jazt9ICovXHJcblxyXG4vKm9uYm9hcmRpbmcqL1xyXG4ub25ib2FyZGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2Y0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Utb3V0ZXIge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ub25ib2FyZGluZy5sYXN0U2xpZGUgOjpuZy1kZWVwIC5vd2wtZG90cyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9uYm9hcmRpbmcgOjpuZy1kZWVwIC5vd2wtdGhlbWUge1xyXG4gIHBvc2l0aW9uOiB1bnNldDtcclxufVxyXG5cclxuLm9uYm9hcmRpbmcgOjpuZy1kZWVwIC5vd2wtZG90cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZjNlNWU0O1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1uYXYgW2NsYXNzKj1vd2wtXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBpbmstcmdiYSksIC41KTtcclxuICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLW5hdiAub3dsLXByZXYge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIDo6bmctZGVlcCAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyA6Om5nLWRlZXAgLm93bC1uYXYgLm93bC1uZXh0LmRpc2FibGVkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub25ib2FyZGluZ1NraXAge1xyXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nIC5vbmJvYXJkaW5nU2tpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4ub25ib2FyZFNsaWRlV2hpdGVPdmVybGF5IHtcclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoLi8uLi9hc3NldHMvbmV3YXNzZXRzL3doaXRlY3VydmUucG5nKSBuby1yZXBlYXQgMCA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGhlaWdodDogMzQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm9uYm9hcmRTbGlkZVdoaXRlT3ZlcmxheSA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiA0OHZoOyAqL1xyXG59XHJcblxyXG4ub25ib2FyZFNsaWRlV2hpdGVPdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiAxMjBweCA0MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXktY29udGFpbmVyIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNDBweFxyXG59XHJcblxyXG4ub25ib2FyZFNsaWRlIHtcclxuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xyXG59XHJcblxyXG4ub25ib2FyZGluZ1NsaWRlMSAub25ib2FyZFNsaWRlV2hpdGVPdmVybGF5IHtcclxuICAvKiBwYWRkaW5nOiAxMTBweCA4MHB4IDA7ICovXHJcbn1cclxuXHJcbi5vbmJvYXJkaW5nU2xpZGUyIC5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXksIC5vbmJvYXJkaW5nU2xpZGUzIC5vbmJvYXJkU2xpZGVXaGl0ZU92ZXJsYXkge1xyXG4gIC8qIHBhZGRpbmc6IDExMHB4IDMwcHggMDsgKi9cclxufVxyXG5cclxuLm9uYm9hcmRpbmdTbGlkZTEgLm9uYm9hcmRTbGlkZVdoaXRlT3ZlcmxheSBpbWcge1xyXG4gIC8qIG1heC13aWR0aDogMTYwcHg7ICovXHJcbn1cclxuXHJcbmxhYmVsLnRlcm1zcHJpdmFjeSBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubGFiZWwudGVybXNwcml2YWN5IHNwYW4ge1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG5sYWJlbC50ZXJtc3ByaXZhY3kge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxubGFiZWwudGVybXNwcml2YWN5IGlucHV0OmNoZWNrZWQgKyBzcGFuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinJTvuI9cIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5zbGlkZTMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZTMuc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbmltYXRpb246IC41cyBsaW5lYXIgc2hvd0FuaW1hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd0FuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlNsaWRlIDMqL1xyXG4uc2xpZGUzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2xpZGUzIGgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc2xpZGUzIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNsaWRlMyAub3dsLWl0ZW17ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNDglOyBtYXJnaW46IDFlbSBhdXRvOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc2xpZGUzIC5vd2wtaXRlbSBpbWd7d2lkdGg6IDEwMCU7fVxyXG4uc2xpZGUzIC5vd2wtaXRlbSBoM3tmb250LXNpemU6IDFlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXN0eWxlOiBpdGFsaWM7IHBhZGRpbmctdG9wOiAzZW07fVxyXG4uc2xpZGUzIC5vd2wtaXRlbSBwe2ZvbnQtc2l6ZTogMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAwLjVlbTt9XHJcbi8qLnNsaWRlMyBpbnB1dFt0eXBlPVwicmFkaW9cIl17d2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IG92ZXJmbG93OiBoaWRkZW47IHZpc2liaWxpdHk6IGhpZGRlbjt9Ki9cclxuLnN0ZXBzMXRvM3twb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDFlbTsgYmFja2dyb3VuZDogI2ZmZjBlOTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMmVtOyBwYWRkaW5nLWJvdHRvbTogMWVtOyBib3JkZXItcmFkaXVzOiA2MHB4IDYwcHggMCAwOyBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjZmZjNGFlO31cclxuLnN0ZXBzMXRvMyBsaXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAzMiU7fVxyXG4uc3RlcHMxdG8zIGxpIGF7Y29sb3I6ICNhNDc2NjA7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMTB2aDsgd2lkdGg6IDEwdmg7IG1hcmdpbjogMCBhdXRvOyBvcGFjaXR5OiAwLjY7fVxyXG4uc3RlcHMxdG8zIGxpIGE6YWZ0ZXJ7Y29udGVudDogXCIgXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAxMDBweDsgYm9yZGVyOiAxcHggc29saWQgI2E0NzY2MDt9XHJcbi5zdGVwczF0bzMgbGkgYS5zZWxlY3RlZHtvcGFjaXR5OiAxO31cclxuLnN0ZXBzMXRvMyBsaSBhLnNlbGVjdGVkOmFmdGVye2JvcmRlci13aWR0aDogMnB4O31cclxuLnN0ZXBzMXRvMyBsaSBzdHJvbmd7ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMmVtOyBoZWlnaHQ6IDEwdmg7IGxpbmUtaGVpZ2h0OiAxMHZoO31cclxuLnN0ZXBzMXRvMyBsaSBzcGFue2Rpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDAuN2VtOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogI2ZmZjBlOTsgei1pbmRleDogMTt9XHJcbi5idG5OZXh0e2ZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiAxZW0gMDsgZGlzcGxheTogYmxvY2s7fVxyXG4uc2xpZGUzIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyB2aXNpYmlsaXR5OiBoaWRkZW47fVxyXG4vKiAuc2xpZGUzIC5nZW5kZXJDYXJvdXNlbHtwYWRkaW5nOiAyZW0gMCAxZW0gMDt9ICovXHJcbi5zbGlkZTMgLmdlbmRlckNhcm91c2VsIGgze2ZvbnQtc2l6ZTogMWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDJlbTsgZm9udC1zdHlsZTogaXRhbGljO31cclxuLnNsaWRlMyAuZ2VuZGVyQ2Fyb3VzZWwgcHtmb250LXNpemU6IDAuOWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc3R5bGU6IGl0YWxpYzt9XHJcbi5zbGlkZTMgLmJ0bk5leHR7dGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTt9XHJcbi8qIC5zbGlkZTMgLm5leHRQcmV2Qnh7YmFja2dyb3VuZDogbm9uZTt9ICovXHJcbi8qIC5zbGlkZTMgOjpuZy1kZWVwIC5vd2wtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZTNlMjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0OHB4IDZweCByZ2JhKDIwMCwgMTQ5LCAxNTUsIDAuNDMpO1xyXG59ICovXHJcbi5zbGlkZTMgOjpuZy1kZWVwIC5vd2wtaXRlbSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZTNlMjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0OHB4IDZweCByZ2JhKDIwMCwgMTQ5LCAxNTUsIDAuNDMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNsaWRlMyA6Om5nLWRlZXAgLm93bC1pdGVtOm5vdCguYWN0aXZlLmNlbnRlcikge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKC42KTtcclxufVxyXG4uc2xpZGUzIDo6bmctZGVlcCAub3dsLWl0ZW0uYWN0aXZlLmNlbnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG59XHJcbi5zbGlkZTMgOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qR2VuZGVyIFNsaWRlKi9cclxuXHJcbi50b3BjdXJ2ZSwgLmJvdHRvbWN1cnZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50b3BjdXJ2ZSBpbWcsIC5ib3R0b21jdXJ2ZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvcGN1cnZlIC50b3BjdXJ2ZS1jb250YWluZXIsIC5ib3R0b21jdXJ2ZSAuYm90dG9tY3VydmUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vYXNzZXRzL25ld2Fzc2V0cy9nZW5kZXItYmcucG5nKSAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlNyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vYXNzZXRzL25ld2Fzc2V0cy9yZXNwb25zZXBhZ2ViZy5wbmcpIDAgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE1MCU7XHJcbiAgaGVpZ2h0OiB1bnNldDtcclxufVxyXG5cclxuLmJvdHRvbWN1cnZlIC5ib3R0b21jdXJ2ZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEyMHB4IDQwcHggMDtcclxufVxyXG5cclxuc2VjdGlvbi5zbGlkZTMgPiAqIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3BjdXJ2ZS1jb250YWluZXIgPiBkaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50b3BjdXJ2ZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIHNlY3Rpb24uc2xpZGUzIC5ib3R0b21jdXJ2ZS1jb250YWluZXIgbGkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcblxyXG5zZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIGxpIGEge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIGxpIGEgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24uc2xpZGUzIC5ib3R0b21jdXJ2ZS1jb250YWluZXIgbGkgYS5zZWxlY3RlZCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG5zZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIGxpIGEuc2VsZWN0ZWQgc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qU2xpZGUgNCBBZ2UgU2xpZGVyICovXHJcbi8qIC5zbGlkZTQgaDF7dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEuNWVtOyBjb2xvcjogIzViNWE1YTt9ICovXHJcbi8qIC5zbGlkZTQgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuLnNsaWRlNC5zaG93IHsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9ICovXHJcbi5zbGlkZTQgdWwuZ2VuZGVyU2xpZGVyIGxpe2Rpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDQ4JTsgbWFyZ2luOiAxZW0gYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLnNsaWRlNCB1bC5nZW5kZXJTbGlkZXIgbGkgaW1ne3dpZHRoOiAxMDAlO31cclxuLnNsaWRlNCBoM3tmb250LXNpemU6IDFlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAyZW07IGZvbnQtc3R5bGU6IGl0YWxpYzt9XHJcbi5zbGlkZTQgcHtmb250LXNpemU6IDAuOWVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc3R5bGU6IGl0YWxpYzt9XHJcbi8qLnNsaWRlMyBpbnB1dFt0eXBlPVwicmFkaW9cIl17d2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IG92ZXJmbG93OiBoaWRkZW47IHZpc2liaWxpdHk6IGhpZGRlbjt9Ki9cclxuLnNsaWRlNCAuYWdlU2VsZWN0b3J7cGFkZGluZzogMmVtIDA7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5zbGlkZTQgLmFnZVNlbGVjdG9yIC5hZ2VJbnB1dHtwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGZvbnQtc2l6ZTogM2VtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMDsgd2lkdGg6IDEwMCU7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tYm90dG9tOiAzZW07fVxyXG4uZ2x5cGhpY29ue3dpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7fVxyXG4uc2xpZGU0IC5hZ2VTZWxlY3RvckJ4e3BhZGRpbmc6IDJlbSAwO31cclxuLnNsaWRlNCAuYWdlU2VsZWN0b3JCeCBidXR0b257d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgcGFkZGluZzogMDsgZm9udC1zdHlsZTogbm9ybWFsOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uc2xpZGU0IC5hZ2VTZWxlY3RvckJ4IC5hZ2VUeHRCaWd7YmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiAwOyBmb250LXNpemU6IDNlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxNTBweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcbi5idG5OZXh0e2ZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiAxZW0gMDsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiA0NCU7IHRleHQtYWxpZ246IHJpZ2h0OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXNpemU6IDAuOWVtO31cclxuLmJ0bk5leHQudG9SaWdodHt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLyogLm5leHRQcmV2Qnh7YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9wYWdpbmF0aW9uLWJvcmRlci5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNzAlOyBtYXJnaW4tdG9wOiAyZW07fSAqL1xyXG4vKiAubmV4dFByZXZCeCBpbWd7bWFyZ2luOiAwIDEwcHg7IHdpZHRoOiAyNXB4O30gKi9cclxuXHJcbi5uZXh0UHJldkJ4IHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbi5uZXh0UHJldkJ4IC5vbmJvYXJkaW5nU2tpcDpudGgtY2hpbGQoMikge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubmV4dFByZXZCeCAub25ib2FyZGluZ1NraXA6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDRweDtcclxufVxyXG5cclxuLyogLnNsaWRlNCA6Om5nLWRlZXAgLm93bC1pdGVtIHtcclxuICBtaW4taGVpZ2h0OiAyMjBweDtcclxufSAqL1xyXG5cclxuLnNsaWRlNCA6Om5nLWRlZXAgLm93bC1pdGVtIGxhYmVsIHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7ICovXHJcbn1cclxuXHJcblxyXG4uc2xpZGU0IDo6bmctZGVlcCAub3dsLWl0ZW0gbGFiZWwgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogdmFyKC0tcmVkKTtcclxufVxyXG5cclxuXHJcbi8qU2xpZGUgNSovXHJcbi8qIC5zbGlkZTV7cGFkZGluZzogMmVtIDA7fSAqL1xyXG4vKiAuc2xpZGU1IGgxe3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxLjVlbTsgY29sb3I6ICM1YjVhNWE7IHBhZGRpbmc6IDAgMmVtO30gKi9cclxuLnNsaWRlNSB1bC5nZW5kZXJTbGlkZXIgbGl7ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNDglOyBtYXJnaW46IDFlbSBhdXRvOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc2xpZGU1IHVsLmdlbmRlclNsaWRlciBsaSBpbWd7d2lkdGg6IDEwMCU7fVxyXG4uc2xpZGU1IHVsLmdlbmRlclNsaWRlciBsaSBoM3tmb250LXNpemU6IDEuMmVtO31cclxuLyouc2xpZGUzIGlucHV0W3R5cGU9XCJyYWRpb1wiXXt3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgb3ZlcmZsb3c6IGhpZGRlbjsgdmlzaWJpbGl0eTogaGlkZGVuO30qL1xyXG4uc2xpZGU1IC5idG5OZXh0e2ZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiAxZW0gMDsgZGlzcGxheTogYmxvY2s7fVxyXG4vKiAuc2xpZGU1IC5za2luU2xpZGVye3BhZGRpbmc6IDRlbSAwIDJlbSAwOyBvdmVyZmxvdzogaGlkZGVuO30gKi9cclxuXHJcbi8qU2xpZGUgNiovXHJcbi5zbGlkZTZ7cGFkZGluZzogM2VtIDA7fTtcclxuLyogLnNsaWRlNiBoMXt0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMS41ZW07IGNvbG9yOiAjNWI1YTVhOyBwYWRkaW5nLXRvcDogMWVtO30gKi9cclxuLndlYmNhbVVuaXQgdmlkZW8sIC5taXJyb3JlZHtkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7fVxyXG4ud2ViY2Fte292ZXJmbG93OiBoaWRkZW47IHdpZHRoOiA4MCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luOiAxZW0gYXV0bzsgd2lkdGg6IDI4OHB4OyBoZWlnaHQ6IDM4NHB4O31cclxuLndlYmNhbSAudmlkZW8tb3ZlcmxheXt3aWR0aDogMTAwJTt9XHJcbi5zbGlkZTYgLmltYWdlQ3Rhe3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMWVtIDA7fVxyXG4uc2xpZGU2IC5pbWFnZUN0YSBhe3Bvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnNsaWRlNiAuaW1hZ2VDdGEgaW1ne3dpZHRoOiAxMDBweDsgcGFkZGluZzogMCAxMHB4O31cclxuLnNsaWRlNiAuaW1hZ2VDdGEgaW5wdXR7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG9wYWNpdHk6IDA7IHotaW5kZXg6IDE7fVxyXG4vKiAuc2xpZGU2IHB7cGFkZGluZzogMCAyZW07fSAqL1xyXG4jYW5hbHlzaW5ne3dpZHRoOiAxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgei1pbmRleDogOTsgYmFja2dyb3VuZDogI2ZmZjZkYjsgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZjZkYiAwJSwgI2ZjZGFkMSAxMDAlKTsgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZjZkYiAwJSwjZmNkYWQxIDEwMCUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgI2ZmZjZkYiAwJSwjZmNkYWQxIDEwMCUpOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZjZkYicsIGVuZENvbG9yc3RyPScjZmNkYWQxJyxHcmFkaWVudFR5cGU9MCApO31cclxucC50b3B0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Y29sb3IpO1xyXG59XHJcbnAuYm90dG9tZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbn1cclxuLmJvdHRvbWN1cnZlLnNsaWRlNmJvdHRvbWN1cnZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ib3R0b21jdXJ2ZS5zbGlkZTZib3R0b21jdXJ2ZSA+IGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi8qU2xpZGUgNyovXHJcbi8qIC5zbGlkZTcge1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbn0gKi9cclxuXHJcbi8qIC5zbGlkZTcgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuXHRjb2xvcjojNWI1YTVhO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG5cclxuLnNsaWRlNy5zaG93IHtcclxuICBoZWlnaHQ6IHVuc2V0O1xyXG59XHJcblxyXG4uc2xpZGU3LnNob3cgPiAqIHtcclxuICBmbGV4OiB1bnNldDtcclxufVxyXG5cclxuLnNsaWRlNyAudG9wM1ByaW9yaXRpZXMge1xyXG4gIHBhZGRpbmc6IDJlbSAwOyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGU3IC50b3AzUHJpb3JpdGllcyBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICM1YjVhNWE7XHJcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uc2xpZGU3IC5jaXJjbGVVbml0MSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG59XHJcblxyXG4uc2xpZGU3IC5jaXJjbGVVbml0MSBoMyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuXHRjb2xvcjogIzgwN2U3YjtcclxuXHRwYWRkaW5nOiAwLjVlbSAwO1xyXG5cdHdpZHRoOiA3NSU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZTcgLmNpcmNsZVVuaXQxIHNwYW4ge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkOyBib3JkZXItcmFkaXVzOiAxMDBweDsgYm9yZGVyOiAxcHggc29saWQgIzgwN2U3Yjsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBsaW5lLWhlaWdodDogMzhweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzgwN2U3YjsgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLnNsaWRlNyAueW91clNraW5BbmxheXNpc3t3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9XHJcblxyXG4uc2xpZGU3IC55b3VyU2tpbkFubGF5c2lzIGgye1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNWI1YTVhO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG59XHJcblxyXG51bC5jc2UtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc2xpZGU3IC55b3VyU2tpbkFubGF5c2lzIHB7XHJcblx0Zm9udC1zaXplOiAxZW07IHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlNyAueW91clNraW5BbmxheXNpcyB1bCBsaXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnlvdXJTa2luQW5sYXlzaXMgdWwgLmNpcmNsZVVuaXQxIHtcclxuXHRkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZTcgLnlvdXJTa2luQW5sYXlzaXMgLnByb2RJbWcge1xyXG5cdHdpZHRoOiA5MCU7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAyZW0gMDsgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnlvdXJTa2luQW5sYXlzaXMgLmJ1eU5vd0xpbmtzIHtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNsaWRlNyAudGFiIHtcclxuXHRiYWNrZ3JvdW5kOiAjZDdlNmY0OyBtYXJnaW4tYm90dG9tOiAyZW07IHBhZGRpbmc6IDJlbTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGU3IC5jaXJjbGVVbml0MS5iaWdDaXJjbGVVbml0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zbGlkZTcgLmNpcmNsZVVuaXQxLmJpZ0NpcmNsZVVuaXQgc3BhbiB7XHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuXHRoZWlnaHQ6IDE1MHB4OyBcclxuXHRsaW5lLWhlaWdodDogMTAwcHg7IFxyXG5cdGZvbnQtc2l6ZTogNDVweDsgXHJcblx0Ym9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlNyAudG9wY3VydmUgPiBpbWcge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5zdy1waG90b3BlcnNlbnQge1xyXG4gIC8qIHdpZHRoOiA5MCU7ICovXHJcbiAgd2lkdGg6IDM1MXB4O1xyXG4gIHBhZGRpbmc6IDgwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xOTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdy1waG90b3BlcnNlbnQgLmNpcmNsZS1zdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5zdy1waG90b3BlcnNlbnQgPiBkaXYgLmNpcmNsZS1zdmc6bnRoLWNoaWxkKDIpIHtcclxuICB0b3A6IDExMHB4O1xyXG4gIHJpZ2h0OiAtMTVweDtcclxufVxyXG5cclxuLnN3LXBob3RvcGVyc2VudCA+IGRpdiAuY2lyY2xlLXN2ZzpudGgtY2hpbGQoMykge1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uc3ctcGhvdG9wZXJzZW50ID4gZGl2IC5jaXJjbGUtc3ZnOm50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiAyNDVweDtcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG4uc3ctcGhvdG9wZXJzZW50ID4gZGl2IC5jaXJjbGUtc3ZnOm50aC1jaGlsZCg1KSB7XHJcbiAgdG9wOiAyOTBweDtcclxuICByaWdodDogNDhweDtcclxufVxyXG5cclxuLnN3LXBob3RvcGVyc2VudCA+IGRpdiAuY2lyY2xlLXN2ZzpudGgtY2hpbGQoNikge1xyXG4gIHRvcDogMzE1cHg7XHJcbiAgcmlnaHQ6IDEwNXB4O1xyXG59XHJcblxyXG4uc3ctcGhvdG9wZXJzZW50ID4gZGl2IC5jaXJjbGUtc3ZnOm50aC1jaGlsZCg3KSB7XHJcbiAgdG9wOiAzMjdweDtcclxuICByaWdodDogMTcwcHg7XHJcbn1cclxuXHJcbi5zdy1waG90b3BlcnNlbnQgPiBkaXYgLmNpcmNsZS1zdmc6bnRoLWNoaWxkKDUpID4gc3BhbiwgLnN3LXBob3RvcGVyc2VudCA+IGRpdiAuY2lyY2xlLXN2ZzpudGgtY2hpbGQoNikgPiBzcGFuIHtcclxuICBib3R0b206IC0zNXB4O1xyXG59XHJcblxyXG4uc3ctcGhvdG9wZXJzZW50IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZGJkZDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xyXG59XHJcblxyXG4uc3ctY29sb3JpbmRpY2F0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uc3ctY29sb3JpbmRpY2F0b3IgdWwge1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ctY29sb3JpbmRpY2F0b3IgdWwgbGkge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG5cclxuLnN3LWNvbG9yaW5kaWNhdG9yIHVsIGxpOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmM1NjU2O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5zdy1jb2xvcmluZGljYXRvciB1bCBsaTpudGgtY2hpbGQoMik6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmRlZThiO1xyXG59XHJcblxyXG4uc3ctY29sb3JpbmRpY2F0b3IgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnN3LWNvbG9yaW5kaWNhdG9yIHVsIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjYWNmYzhmXHJcbn1cclxuXHJcbi5zci1jaXJjbGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1yZWNvbW1lbmRhdGlvbiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNjb3JlLXJlY29tbWVuZGF0aW9uIHVsIGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zY29yZS1yZWNvbW1lbmRhdGlvbiB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnNyLWJ1eWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3ItYnV5Y2FyZCBhIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc3ItY2lyY2xlLXdyYXBwZXIgPiBzcGFuIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnNyLWJ1eWNhcmQgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnNyLWJ1eWNhcmQgLmJ0blN0eWxlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2xpZGU3Y29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uc2QtcHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnNkLXByb2R1Y3QgPiBkaXYge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zZHAtbGVmdCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2RwLXJpZ2h0ID4gKiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnNkcC1yaWdodCBhIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2Rwci10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jc2UtY2FyZCB7XHJcbiAgcGFkZGluZzogNTVweCAyNXB4IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZjFlZjtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjdweCAwIHJnYigyNTUgMTY1IDE0MyAvIDgwJSk7XHJcbn1cclxuXHJcbi5jb25zb2xleHBlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY3NlLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHggNTVweDtcclxuICBjb2xvcjp2YXIoLS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRvcDogLTIxcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xyXG59XHJcblxyXG4uY3NlYy1pbWFnZSBpbWcge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXgtd2lkdGg6IDY1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmNzZWMtdGV4dCBoNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNraW4tYW5hbHlzaXN3cmFwcGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc2tpbi1oZWFsdGhwYXJhbWV0ZXJzIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDAgLTJweDtcclxufVxyXG5cclxuLnNraW4taGVhbHRocGFyYW1ldGVycyBsaSB7XHJcbiAgcGFkZGluZzogNnB4IDEycHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNWI1YTVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMCAycHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2tpbi1oZWFsdGhwYXJhbWV0ZXJzIGxpLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4uc2tpbi1oZWFsdGhwYXJhbWV0ZXJzLnBhcmFtVGFic1N0aWNreSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uOiAuNXMgZmFkZVN0aWNreSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5pblZpZXcge1xyXG4gIGFuaW1hdGlvbjogLjVzIGZhZGVJbiBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlU3RpY2t5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm90dG9tOiAtMjAwcHg7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnN0YXRpYy1iYW5uZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNsZWFyLCAuYWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2xlYXI6YWZ0ZXIsIC5hZnRlcjphZnRlciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi53MTAwe3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBibG9jazt9XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqXHJcbiAqIENTUyBQZXJjZW50YWdlIENpcmNsZVxyXG4gKiBBdXRob3I6IEFuZHJlIEZpcmNob3dcclxuICpcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5yZWN0LWF1dG8sIC5jMTAwLnA1MSAuc2xpY2UsIC5jMTAwLnA1MiAuc2xpY2UsIC5jMTAwLnA1MyAuc2xpY2UsIC5jMTAwLnA1NCAuc2xpY2UsIC5jMTAwLnA1NSAuc2xpY2UsIC5jMTAwLnA1NiAuc2xpY2UsIC5jMTAwLnA1NyAuc2xpY2UsIC5jMTAwLnA1OCAuc2xpY2UsIC5jMTAwLnA1OSAuc2xpY2UsIC5jMTAwLnA2MCAuc2xpY2UsIC5jMTAwLnA2MSAuc2xpY2UsIC5jMTAwLnA2MiAuc2xpY2UsIC5jMTAwLnA2MyAuc2xpY2UsIC5jMTAwLnA2NCAuc2xpY2UsIC5jMTAwLnA2NSAuc2xpY2UsIC5jMTAwLnA2NiAuc2xpY2UsIC5jMTAwLnA2NyAuc2xpY2UsIC5jMTAwLnA2OCAuc2xpY2UsIC5jMTAwLnA2OSAuc2xpY2UsIC5jMTAwLnA3MCAuc2xpY2UsIC5jMTAwLnA3MSAuc2xpY2UsIC5jMTAwLnA3MiAuc2xpY2UsIC5jMTAwLnA3MyAuc2xpY2UsIC5jMTAwLnA3NCAuc2xpY2UsIC5jMTAwLnA3NSAuc2xpY2UsIC5jMTAwLnA3NiAuc2xpY2UsIC5jMTAwLnA3NyAuc2xpY2UsIC5jMTAwLnA3OCAuc2xpY2UsIC5jMTAwLnA3OSAuc2xpY2UsIC5jMTAwLnA4MCAuc2xpY2UsIC5jMTAwLnA4MSAuc2xpY2UsIC5jMTAwLnA4MiAuc2xpY2UsIC5jMTAwLnA4MyAuc2xpY2UsIC5jMTAwLnA4NCAuc2xpY2UsIC5jMTAwLnA4NSAuc2xpY2UsIC5jMTAwLnA4NiAuc2xpY2UsIC5jMTAwLnA4NyAuc2xpY2UsIC5jMTAwLnA4OCAuc2xpY2UsIC5jMTAwLnA4OSAuc2xpY2UsIC5jMTAwLnA5MCAuc2xpY2UsIC5jMTAwLnA5MSAuc2xpY2UsIC5jMTAwLnA5MiAuc2xpY2UsIC5jMTAwLnA5MyAuc2xpY2UsIC5jMTAwLnA5NCAuc2xpY2UsIC5jMTAwLnA5NSAuc2xpY2UsIC5jMTAwLnA5NiAuc2xpY2UsIC5jMTAwLnA5NyAuc2xpY2UsIC5jMTAwLnA5OCAuc2xpY2UsIC5jMTAwLnA5OSAuc2xpY2UsIC5jMTAwLnAxMDAgLnNsaWNlIHtcclxuICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xyXG59XHJcblxyXG4ucGllLCAuYzEwMCAuYmFyLCAuYzEwMC5wNTEgLmZpbGwsIC5jMTAwLnA1MiAuZmlsbCwgLmMxMDAucDUzIC5maWxsLCAuYzEwMC5wNTQgLmZpbGwsIC5jMTAwLnA1NSAuZmlsbCwgLmMxMDAucDU2IC5maWxsLCAuYzEwMC5wNTcgLmZpbGwsIC5jMTAwLnA1OCAuZmlsbCwgLmMxMDAucDU5IC5maWxsLCAuYzEwMC5wNjAgLmZpbGwsIC5jMTAwLnA2MSAuZmlsbCwgLmMxMDAucDYyIC5maWxsLCAuYzEwMC5wNjMgLmZpbGwsIC5jMTAwLnA2NCAuZmlsbCwgLmMxMDAucDY1IC5maWxsLCAuYzEwMC5wNjYgLmZpbGwsIC5jMTAwLnA2NyAuZmlsbCwgLmMxMDAucDY4IC5maWxsLCAuYzEwMC5wNjkgLmZpbGwsIC5jMTAwLnA3MCAuZmlsbCwgLmMxMDAucDcxIC5maWxsLCAuYzEwMC5wNzIgLmZpbGwsIC5jMTAwLnA3MyAuZmlsbCwgLmMxMDAucDc0IC5maWxsLCAuYzEwMC5wNzUgLmZpbGwsIC5jMTAwLnA3NiAuZmlsbCwgLmMxMDAucDc3IC5maWxsLCAuYzEwMC5wNzggLmZpbGwsIC5jMTAwLnA3OSAuZmlsbCwgLmMxMDAucDgwIC5maWxsLCAuYzEwMC5wODEgLmZpbGwsIC5jMTAwLnA4MiAuZmlsbCwgLmMxMDAucDgzIC5maWxsLCAuYzEwMC5wODQgLmZpbGwsIC5jMTAwLnA4NSAuZmlsbCwgLmMxMDAucDg2IC5maWxsLCAuYzEwMC5wODcgLmZpbGwsIC5jMTAwLnA4OCAuZmlsbCwgLmMxMDAucDg5IC5maWxsLCAuYzEwMC5wOTAgLmZpbGwsIC5jMTAwLnA5MSAuZmlsbCwgLmMxMDAucDkyIC5maWxsLCAuYzEwMC5wOTMgLmZpbGwsIC5jMTAwLnA5NCAuZmlsbCwgLmMxMDAucDk1IC5maWxsLCAuYzEwMC5wOTYgLmZpbGwsIC5jMTAwLnA5NyAuZmlsbCwgLmMxMDAucDk4IC5maWxsLCAuYzEwMC5wOTkgLmZpbGwsIC5jMTAwLnAxMDAgLmZpbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDAuMDRlbSBzb2xpZCAjYWRlNDk5O1xyXG4gIHdpZHRoOiAwLjkyZW07XHJcbiAgaGVpZ2h0OiAwLjkyZW07XHJcbiAgY2xpcDogcmVjdCgwZW0sIDAuNWVtLCAxZW0sIDBlbSk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuXHJcbi5maWxsYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAwLjAxZW0gc29saWQgcmdiKDEyOCAxMjggMTI4IC8gMjUlKTtcclxuICB3aWR0aDogMC45NWVtO1xyXG4gIGhlaWdodDogMC45NWVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5waWUtZmlsbCwgLmMxMDAucDUxIC5iYXI6YWZ0ZXIsIC5jMTAwLnA1MSAuZmlsbCwgLmMxMDAucDUyIC5iYXI6YWZ0ZXIsIC5jMTAwLnA1MiAuZmlsbCwgLmMxMDAucDUzIC5iYXI6YWZ0ZXIsIC5jMTAwLnA1MyAuZmlsbCwgLmMxMDAucDU0IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1NCAuZmlsbCwgLmMxMDAucDU1IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1NSAuZmlsbCwgLmMxMDAucDU2IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1NiAuZmlsbCwgLmMxMDAucDU3IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1NyAuZmlsbCwgLmMxMDAucDU4IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1OCAuZmlsbCwgLmMxMDAucDU5IC5iYXI6YWZ0ZXIsIC5jMTAwLnA1OSAuZmlsbCwgLmMxMDAucDYwIC5iYXI6YWZ0ZXIsIC5jMTAwLnA2MCAuZmlsbCwgLmMxMDAucDYxIC5iYXI6YWZ0ZXIsIC5jMTAwLnA2MSAuZmlsbCwgLmMxMDAucDYyIC5iYXI6YWZ0ZXIsIC5jMTAwLnA2MiAuZmlsbCwgLmMxMDAucDYzIC5iYXI6YWZ0ZXIsIC5jMTAwLnA2MyAuZmlsbCwgLmMxMDAucDY0IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2NCAuZmlsbCwgLmMxMDAucDY1IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2NSAuZmlsbCwgLmMxMDAucDY2IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2NiAuZmlsbCwgLmMxMDAucDY3IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2NyAuZmlsbCwgLmMxMDAucDY4IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2OCAuZmlsbCwgLmMxMDAucDY5IC5iYXI6YWZ0ZXIsIC5jMTAwLnA2OSAuZmlsbCwgLmMxMDAucDcwIC5iYXI6YWZ0ZXIsIC5jMTAwLnA3MCAuZmlsbCwgLmMxMDAucDcxIC5iYXI6YWZ0ZXIsIC5jMTAwLnA3MSAuZmlsbCwgLmMxMDAucDcyIC5iYXI6YWZ0ZXIsIC5jMTAwLnA3MiAuZmlsbCwgLmMxMDAucDczIC5iYXI6YWZ0ZXIsIC5jMTAwLnA3MyAuZmlsbCwgLmMxMDAucDc0IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3NCAuZmlsbCwgLmMxMDAucDc1IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3NSAuZmlsbCwgLmMxMDAucDc2IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3NiAuZmlsbCwgLmMxMDAucDc3IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3NyAuZmlsbCwgLmMxMDAucDc4IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3OCAuZmlsbCwgLmMxMDAucDc5IC5iYXI6YWZ0ZXIsIC5jMTAwLnA3OSAuZmlsbCwgLmMxMDAucDgwIC5iYXI6YWZ0ZXIsIC5jMTAwLnA4MCAuZmlsbCwgLmMxMDAucDgxIC5iYXI6YWZ0ZXIsIC5jMTAwLnA4MSAuZmlsbCwgLmMxMDAucDgyIC5iYXI6YWZ0ZXIsIC5jMTAwLnA4MiAuZmlsbCwgLmMxMDAucDgzIC5iYXI6YWZ0ZXIsIC5jMTAwLnA4MyAuZmlsbCwgLmMxMDAucDg0IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4NCAuZmlsbCwgLmMxMDAucDg1IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4NSAuZmlsbCwgLmMxMDAucDg2IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4NiAuZmlsbCwgLmMxMDAucDg3IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4NyAuZmlsbCwgLmMxMDAucDg4IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4OCAuZmlsbCwgLmMxMDAucDg5IC5iYXI6YWZ0ZXIsIC5jMTAwLnA4OSAuZmlsbCwgLmMxMDAucDkwIC5iYXI6YWZ0ZXIsIC5jMTAwLnA5MCAuZmlsbCwgLmMxMDAucDkxIC5iYXI6YWZ0ZXIsIC5jMTAwLnA5MSAuZmlsbCwgLmMxMDAucDkyIC5iYXI6YWZ0ZXIsIC5jMTAwLnA5MiAuZmlsbCwgLmMxMDAucDkzIC5iYXI6YWZ0ZXIsIC5jMTAwLnA5MyAuZmlsbCwgLmMxMDAucDk0IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5NCAuZmlsbCwgLmMxMDAucDk1IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5NSAuZmlsbCwgLmMxMDAucDk2IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5NiAuZmlsbCwgLmMxMDAucDk3IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5NyAuZmlsbCwgLmMxMDAucDk4IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5OCAuZmlsbCwgLmMxMDAucDk5IC5iYXI6YWZ0ZXIsIC5jMTAwLnA5OSAuZmlsbCwgLmMxMDAucDEwMCAuYmFyOmFmdGVyLCAuYzEwMC5wMTAwIC5maWxsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmMxMDAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEyMHB4O1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAwLjFlbSAwLjFlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZkZjY7XHJcbn1cclxuXHJcbi5jMTAwICosIC5jMTAwICo6YmVmb3JlLCAuYzEwMCAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLmMxMDAuY2VudGVyIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYzEwMC5iaWcge1xyXG4gIGZvbnQtc2l6ZTogMjQwcHg7XHJcbn1cclxuLmMxMDAuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxufVxyXG4uYzEwMCA+IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDVlbTtcclxuICBmb250LXNpemU6IDAuMmVtO1xyXG4gIGNvbG9yOiAjYWRlNDk5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuXHR0b3A6IDMwJTsgbGluZS1oZWlnaHQ6IDFlbTtcclxufVxyXG4uYzEwMCA+IHNwYW4gc3Ryb25ne1xyXG5cdGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjNWI1YTVhO1xyXG59XHJcbi5jMTAwOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjA4ZW07XHJcbiAgbGVmdDogMC4wOGVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAwLjg0ZW07XHJcbiAgaGVpZ2h0OiAwLjg0ZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbn1cclxuLmMxMDAgLnNsaWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBjbGlwOiByZWN0KDBlbSwgMWVtLCAxZW0sIDAuNWVtKTtcclxufVxyXG4uYzEwMC5wMSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMy42ZGVnKTtcclxufVxyXG4uYzEwMC5wMiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuMmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy4yZGVnKTtcclxufVxyXG4uYzEwMC5wMyAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDUgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xyXG59XHJcbi5jMTAwLnA2IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDcgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDEwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcclxufVxyXG4uYzEwMC5wMTEgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM5LjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcclxufVxyXG4uYzEwMC5wMTIgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcclxufVxyXG4uYzEwMC5wMTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ2LjhkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcclxufVxyXG4uYzEwMC5wMTQgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUwLjRkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcclxufVxyXG4uYzEwMC5wMTUgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDU0ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xyXG59XHJcbi5jMTAwLnAxNiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNTcuNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xyXG59XHJcbi5jMTAwLnAxNyAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjEuMmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xyXG59XHJcbi5jMTAwLnAxOCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAxOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjguNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xyXG59XHJcbi5jMTAwLnAyMCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XHJcbn1cclxuLmMxMDAucDIxIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDIyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3OS4yZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XHJcbn1cclxuLmMxMDAucDIzIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4Mi44ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XHJcbn1cclxuLmMxMDAucDI0IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDI1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4uYzEwMC5wMjYgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkzLjZkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcclxufVxyXG4uYzEwMC5wMjcgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDk3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wMjggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwMC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTAwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnAyOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTA0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDMwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xyXG59XHJcbi5jMTAwLnAzMSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTExLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDMyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMTUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDExNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wMzMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDExOC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTE4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAzNCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDM1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xyXG59XHJcbi5jMTAwLnAzNiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTI5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDM3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wMzggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnAzOSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDQwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xyXG59XHJcbi5jMTAwLnA0MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTQ3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDQyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNDMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1NC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTU4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTguNGRlZyk7XHJcbn1cclxuLmMxMDAucDQ1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTYyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTYyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xyXG59XHJcbi5jMTAwLnA0NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTY1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDQ3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNjkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE2OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNDggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE3Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTcyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA0OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTc2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDUwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5jMTAwLnA1MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgzLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODMuNmRlZyk7XHJcbn1cclxuLmMxMDAucDUyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODcuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wNTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE5MC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTkwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA1NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTk0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDU1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xyXG59XHJcbi5jMTAwLnA1NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjAxLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDU3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMDUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwNS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNTggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIwOC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjA4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA1OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDYwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG59XHJcbi5jMTAwLnA2MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjE5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDYyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wNjMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA2NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjMwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDY1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzRkZWcpO1xyXG59XHJcbi5jMTAwLnA2NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjM3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDY3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNjggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0NC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQ0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA2OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQ4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDguNGRlZyk7XHJcbn1cclxuLmMxMDAucDcwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xyXG59XHJcbi5jMTAwLnA3MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjU1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDcyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNTkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI1OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wNzMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI2Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjYyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA3NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjY2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDc1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG59XHJcbi5jMTAwLnA3NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjczLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzMuNmRlZyk7XHJcbn1cclxuLmMxMDAucDc3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzcuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3Ny4yZGVnKTtcclxufVxyXG4uYzEwMC5wNzggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4MC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjgwLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA3OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjg0LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODQuNGRlZyk7XHJcbn1cclxuLmMxMDAucDgwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODhkZWcpO1xyXG59XHJcbi5jMTAwLnA4MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjkxLjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTEuNmRlZyk7XHJcbn1cclxuLmMxMDAucDgyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyOTUuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI5NS4yZGVnKTtcclxufVxyXG4uYzEwMC5wODMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI5OC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk4LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA4NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAyLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDIuNGRlZyk7XHJcbn1cclxuLmMxMDAucDg1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xyXG59XHJcbi5jMTAwLnA4NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzA5LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDkuNmRlZyk7XHJcbn1cclxuLmMxMDAucDg3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMTMuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxMy4yZGVnKTtcclxufVxyXG4uYzEwMC5wODggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMxNi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE2LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA4OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzIwLjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjAuNGRlZyk7XHJcbn1cclxuLmMxMDAucDkwIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xyXG59XHJcbi5jMTAwLnA5MSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzI3LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjcuNmRlZyk7XHJcbn1cclxuLmMxMDAucDkyIC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzEuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOTMgLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzNC44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzM0LjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5NCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzM4LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzguNGRlZyk7XHJcbn1cclxuLmMxMDAucDk1IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDJkZWcpO1xyXG59XHJcbi5jMTAwLnA5NiAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzQ1LjZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDUuNmRlZyk7XHJcbn1cclxuLmMxMDAucDk3IC5iYXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNDkuMmRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM0OS4yZGVnKTtcclxufVxyXG4uYzEwMC5wOTggLmJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1Mi44ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzUyLjhkZWcpO1xyXG59XHJcbi5jMTAwLnA5OSAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzU2LjRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTYuNGRlZyk7XHJcbn1cclxuLmMxMDAucDEwMCAuYmFyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG4uYzEwMDpob3ZlciB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5jMTAwOmhvdmVyID4gc3BhbiB7XHJcbiAgd2lkdGg6IDMuMzNlbTtcclxuICBsaW5lLWhlaWdodDogMy4zM2VtO1xyXG4gIGZvbnQtc2l6ZTogMC4zZW07XHJcbiAgY29sb3I6ICMzMDdiYmI7XHJcbn1cclxuLmMxMDA6aG92ZXI6YWZ0ZXIge1xyXG4gIHRvcDogMC4wNGVtO1xyXG4gIGxlZnQ6IDAuMDRlbTtcclxuICB3aWR0aDogMC45MmVtO1xyXG4gIGhlaWdodDogMC45MmVtO1xyXG59XHJcbi5jMTAwLmRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmMxMDAuZGFyayAuYmFyLFxyXG4uYzEwMC5kYXJrIC5maWxsIHtcclxuICBib3JkZXItY29sb3I6ICNjNmZmMDAgIWltcG9ydGFudDtcclxufVxyXG4uYzEwMC5kYXJrID4gc3BhbiB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmMxMDAuZGFyazphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxufVxyXG4uYzEwMC5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNjNmZmMDA7XHJcbn1cclxuLmMxMDAuZ3JlZW4gLmJhciwgLmMxMDAuZ3JlZW4gLmZpbGwge1xyXG4gIGJvcmRlci1jb2xvcjogI2FkZTQ5OSAhaW1wb3J0YW50O1xyXG59XHJcbi5jMTAwLmdyZWVuOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNhZGU0OTk7XHJcbn1cclxuLmMxMDAuZ3JlZW4uZGFyayAuYmFyLCAuYzEwMC5ncmVlbi5kYXJrIC5maWxsIHtcclxuICBib3JkZXItY29sb3I6ICM1ZmQ0MDAgIWltcG9ydGFudDtcclxufVxyXG4uYzEwMC5ncmVlbi5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICM1ZmQ0MDA7XHJcbn1cclxuLmMxMDAub3JhbmdlIC5iYXIsIC5jMTAwLm9yYW5nZSAuZmlsbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGQ5ZDIyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmMxMDAub3JhbmdlOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNkZDlkMjI7XHJcbn1cclxuLmMxMDAub3JhbmdlLmRhcmsgLmJhciwgLmMxMDAub3JhbmdlLmRhcmsgLmZpbGwge1xyXG4gIGJvcmRlci1jb2xvcjogI2UwODgzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5jMTAwLm9yYW5nZS5kYXJrOmhvdmVyID4gc3BhbiB7XHJcbiAgY29sb3I6ICNlMDg4MzM7XHJcbn1cclxuXHJcbi8qQ2lyY2xlIENTUyBFbmRzKi9cclxuXHJcbi5jaXJjbGUtc3ZnIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaXJjbGUtc3ZnLmxhcmdlIHN2ZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtc3ZnLmxhcmdlIC5jaXJjbGUtY2hhcnRfX3BlcmNlbnQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNpcmNsZS1zdmcubWVkaXVtIHN2ZyB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2lyY2xlLXN2Zy5tZWRpdW0gLmNpcmNsZS1jaGFydF9fcGVyY2VudCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY2lyY2xlLXN2Zy5zbWFsbCBzdmcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNpcmNsZS1zdmcuc21hbGwgPiBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY2lyY2xlLXN2Zy5zbWFsbCAuY2lyY2xlLWNoYXJ0X19wZXJjZW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtY2hhcnRfX2luZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcblxyXG4uY2lyY2xlLWNoYXJ0X19jaXJjbGUge1xyXG4gIGFuaW1hdGlvbjogY2lyY2xlLWNoYXJ0LWZpbGwgMnMgcmV2ZXJzZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlclxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNpcmNsZS1jaGFydC1maWxsIHtcclxuICB0byB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMFxyXG4gIH1cclxufVxyXG5cclxuLypTbGlkZSBMb2dpbiovXHJcblxyXG5zZWN0aW9uLnNsaWRlTG9naW57XHJcbiAgZGlzcGxheTogZmxleDsgICAgICAgICAgIC8qIGVzdGFibGlzaCBmbGV4IGNvbnRhaW5lciAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKiBtYWtlIG1haW4gYXhpcyB2ZXJ0aWNhbCAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBjZW50ZXIgaXRlbXMgdmVydGljYWxseSwgaW4gdGhpcyBjYXNlICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBwYWRkaW5nOiAwIDJlbTsgKi9cclxufVxyXG5cclxuLyogLnNsaWRlTG9naW4gaDF7dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEuNWVtOyBjb2xvcjogIzViNWE1YTt9ICovXHJcbi5zbGlkZUxvZ2luICNQdXNoSUR7d2lkdGg6IDA7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgaGVpZ2h0OiAwOyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IC0xO31cclxuI3R4dE51bWJlcntib3JkZXItcmFkaXVzOiAxMDBweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luLWJvdHRvbTogMWVtOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7fVxyXG4uc2xpZGVMb2dpbiAuYnRuU3R5bGV7IG1hcmdpbi1ib3R0b206IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uc2xpZGVMb2dpbiAuYnRuU3R5bGUsIC5zbGlkZUxvZ2luIGlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZTMuc2xpZGVMb2dpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNsaWRlTG9naW4gZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDAgNGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJCeCB7XHJcblx0cGFkZGluZzogMmVtIDAgMWVtIDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJCeCBpbnB1dCwgLnJlZ2lzdGVyQnggYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc29jaWFsSWNvbnMge1xyXG5cdC8qIHBhZGRpbmctYm90dG9tOiAyZW07ICovXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsSWNvbnMgaW1nIHtcclxuXHR3aWR0aDogNzBweDsgcGFkZGluZzogMWVtIDAuNWVtO1xyXG59IFxyXG5cclxuLmRpdmlkZXJPciB7XHJcblx0cGFkZGluZzogMWVtIDA7IFxyXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyAgKi9cclxuICBoZWlnaHQ6IDFweDsgbWFyZ2luLWJvdHRvbTogMmVtOyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmRpdmlkZXJPciBzcGFue1xyXG5cdC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaXZpZGVyT3Igc3BhbjpiZWZvcmUsIC5kaXZpZGVyT3Igc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uZGl2aWRlck9yIHNwYW46YmVmb3JlIHtcclxuICBsZWZ0OiAtMTIwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyT3Igc3BhbjphZnRlciB7XHJcbiAgcmlnaHQ6IC0xMjBweDtcclxufVxyXG5cclxuXHJcbi8qIC5idG5TdHlsZSB7XHJcblx0Y29sb3I6IzQxNDE0MTsgYmFja2dyb3VuZDogI2ZmZTc2YjsgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZTc2YiAwJSwgI2ZmZjVjNSAxMDAlKTsgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZTc2YiAwJSwjZmZmNWM1IDEwMCUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgI2ZmZTc2YiAwJSwjZmZmNWM1IDEwMCUpOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZTc2YicsIGVuZENvbG9yc3RyPScjZmZmNWM1JyxHcmFkaWVudFR5cGU9MCApOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyOiAwOyBvdXRsaW5lOiAwOyBwYWRkaW5nOiAxMHB4IDNlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMS4xZW07IGJvcmRlci1yYWRpdXM6IDUwcHg7IG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG59ICovXHJcblxyXG4uYnRuU3R5bGUge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNHB4IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5idG5TdHlsZSA+IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5zbGlkZTcgLmMxMDAgc3Ryb25ne1xyXG5cdGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDIzcHg7IGNvbG9yOiAjNWI1YTVhOyBsaW5lLWhlaWdodDogMjVweDsgcGFkZGluZy10b3A6IDEwcHg7IGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zbGlkZTcgLmMxMDAgc3BhbiBlbXtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnh7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTF7XHJcblx0dG9wOiAwO1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51MntcclxuXHR0b3A6IDI1JTtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTN7XHJcblx0dG9wOiA1MSU7XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnU0e1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51NXtcclxuXHR0b3A6IDI1JTtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51NntcclxuXHR0b3A6IDUxJTtcclxuXHRyaWdodDogMDtcclxuXHRsZWZ0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51N3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxOmFmdGVyIHsgXHJcblx0Y29udGVudDogXCJcIjsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICByaWdodDogMDsgXHJcbiAgdG9wOiAzMyU7IFxyXG4gIGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzgwN2U3YjsgXHJcbiAgd2lkdGg6IDMwJTsgXHJcbn1cclxuXHJcbi5zbGlkZTcgLnNldmVuUGFyYW1zQnggLmNpcmNsZVVuaXQxLnU0OmFmdGVyLCAuc2xpZGU3IC5zZXZlblBhcmFtc0J4IC5jaXJjbGVVbml0MS51NTphZnRlciwgLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTY6YWZ0ZXIgeyBcclxuXHRyaWdodDogaW5oZXJpdDsgbGVmdDogMDtcclxufVxyXG5cclxuLnNsaWRlNyAuc2V2ZW5QYXJhbXNCeCAuY2lyY2xlVW5pdDEudTc6YWZ0ZXJ7XHJcblx0Y29udGVudDogbm9uZTtcclxufVxyXG5cclxuLmMxMDAuYmlnOmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICNhZGU0OTk7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOXB4OyBsZWZ0OiA1MCU7IG1hcmdpbi1sZWZ0OiAtNXB4OyB6LWluZGV4OiAxOyB0cmFuc2Zvcm06IHJvdGF0ZSggMTgwZGVnICk7IGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoMTczIDIyOCAxNTMgLyA1MCUpOyB9XHJcblxyXG4uc2xpZGU3IC5jdXN0b21TbWFsbC5jMTAwe3dpZHRoOiAwLjdlbTsgaGVpZ2h0OiAwLjdlbTsgYmFja2dyb3VuZC1jb2xvcjogI2RhZDZjZjsgZmxvYXQ6IG5vbmU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwIDAuMmVtIDAuNWVtIDAuMmVtO31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMCA+IHNwYW57Y29sb3I6ICM4MDdlN2I7IGZvbnQtd2VpZ2h0OiBib2xkOyB0b3A6IDM5JTsgd2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMC4xOGVtO31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMCAuc2xpY2V7d2lkdGg6IDAuNzJlbTsgaGVpZ2h0OiAwLjcyZW07fVxyXG4uc2xpZGU3IC5jdXN0b21TbWFsbC5jMTAwIC5iYXJ7d2lkdGg6IDAuNjJlbTsgaGVpZ2h0OiAwLjYyZW07IGJvcmRlci1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMCAuZmlsbHtib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDsgd2lkdGg6IDAuNjJlbTsgaGVpZ2h0OiAwLjYyZW07fVxyXG4uc2xpZGU3IC5jdXN0b21TbWFsbC5jMTAwOmFmdGVye3RvcDogMC4wMmVtOyBsZWZ0OiAwLjAyZW07IHdpZHRoOiAwLjY2ZW07IGhlaWdodDogMC42NmVtO31cclxuLnNsaWRlNyAuY3VzdG9tU21hbGwuYzEwMCBoMyB7IGZvbnQtc2l6ZTogMC4xNWVtOyB3aWR0aDogMTIwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTEwJTsgbGVmdDotMTAlOyB9XHJcbi5zbGlkZTcgLnRoYW5rWW91V3JhcCAuaW1nVGlja3tkaXNwbGF5OiBibG9jazsgd2lkdGg6IDUwcHg7IG1hcmdpbjogMWVtIGF1dG87fVxyXG4uc2xpZGU3IC50aGFua1lvdVdyYXAgaDV7Zm9udC1zaXplOiAxLjRlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogODAlOyBtYXJnaW46IDAgYXV0byAxZW0gYXV0bzsgY29sb3I6ICM1YjVhNWE7fVxyXG4uc2xpZGU3IC50aGFua1lvdVdyYXAgLmJ0blN0eWxle3dpZHRoOiAyNTBweDt9XHJcbi50aGFuay1mb3JtIHtcclxuICBwYWRkaW5nOiA0MHB4IDUwcHg7XHJcbiAgbWFyZ2luOiAwIC0xMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRoYW5rLWZvcm0gPiBpbWcge1xyXG4gIG1heC13aWR0aDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi50aGFuay1mb3JtIGlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4udGhhbmstZm9ybSBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udGhhbmstZm9ybSA6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tcmVkKTtcclxufVxyXG4vKiBzZWN0aW9uLnNsaWRlNyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vYXNzZXRzL25ld2Fzc2V0cy9yZXN1bHRwYWdlYmcucG5nKSAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovXHJcbi5zbGlkZTcgLnRvcGN1cnZlIHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC8qQ2FtZXJhIE1vZHVsZSovXHJcbiAgLnZpZGVvLW92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDM3NXB4O1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5idG5TdHlsZSA+IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICB9XHJcblxyXG4gIC5zci1idXljYXJkIC5idG5TdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM0cHg7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uLnNsaWRlMyAuYm90dG9tY3VydmUtY29udGFpbmVyIGxpIGEge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzAwcHgpIHtcclxuICAub25ib2FyZFNsaWRlV2hpdGVPdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDI1cHggMDtcclxuICB9XHJcbiAgLmJvdHRvbWN1cnZlIC5ib3R0b21jdXJ2ZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogOTBweCAyNXB4IDA7XHJcbiAgfVxyXG4gIC5ib3R0b21jdXJ2ZSAuYm90dG9tY3VydmUtY29udGFpbmVyIC5uZXh0UHJldkJ4IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgc2VjdGlvbi5zbGlkZTMgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZsZXg6IC41O1xyXG4gIH1cclxufSJdfQ== */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_appService, _formBuilder, changeDetector, elementRef) {
        _classCallCheck(this, AppComponent);

        this._appService = _appService;
        this._formBuilder = _formBuilder;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.title = 'cameraModule';

        this.isElementXPercentInViewport = function (el, percentVisible) {
          var rect = el.getBoundingClientRect(),
              windowHeight = window.innerHeight || document.documentElement.clientHeight;
          return !(Math.floor(100 - (rect.top >= 0 ? 0 : rect.top) / +-rect.height * 100) < percentVisible || Math.floor(100 - (rect.bottom - windowHeight) / rect.height * 100) < percentVisible);
        };

        this.isRecommendationScrolledIntoView = false;
        this.isRecommendationAlreadyRendered = false;
        this.isAnalysisScrolledIntoView = false;
        this.isAnalysisAlreadyRendered = false;
        this.isPlay = false;
        this.reader = new FileReader();
        this.imgFile = undefined;
        /* JITB*/

        this.hideMe = false;
        this.showMe = true;
        this.hideUntilCalled = false;
        this.slide4Show = false;
        this.slide5Show = false;
        this.slide6Show = false;
        this.slide7Show = false;
        this.slideLogin = false; // inputnumber = 20;

        this.selectedSkin = "os";
        this.selectedAge = '25';
        this.selectedGender = "female";
        this.LoginEmail = "";
        this.LoginName = "";
        this.checked = false;
        this.onboardinActiveSlide = 0; // defaultAgeArray = Array.from({length: 50}, (_, i) => i < 9 ? '0' + (i + 1) : i + 1);

        this.defaultAgeArray = Array.from({
          length: 75 - 12 + 1
        }, function (_, i) {
          return 12 + i;
        });
        /*JITB Ends*/
        // toggle webcam on/off

        this.showWebcam = true;
        this.allowCameraSwitch = false;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {// facingMode: "user"
          // width: 300,
          // height: 480
        };
        this.message = 'Loading...';
        this.errors = []; // latest snapshot

        this.webcamImage = null; // webcam snapshot trigger

        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId

        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.GetSkinTypes = [];
        /*
        *  ---------------------------------
        *   calling orbo api to check skin
        *  ---------------------------------
        */

        this.colorMap = {
          "G": '#abfb8f',
          "Y": '#fded8b',
          "R": '#fc5858'
        };
        this.showRestTabs = false;
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
          startPosition: 1,
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
          }
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
          }
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
          }
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
          }
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
          }
        };
      }

      _createClass(AppComponent, [{
        key: "isScrolledIntoView",
        value: function isScrolledIntoView() {
          if (this.scrollRecommendationIntoViewRef) {
            var el = this.scrollRecommendationIntoViewRef.nativeElement; // .getBoundingClientRect();

            this.isRecommendationScrolledIntoView = this.isElementXPercentInViewport(el, 10);

            if (this.isRecommendationScrolledIntoView && !this.isRecommendationAlreadyRendered) {
              this.isRecommendationAlreadyRendered = true;
            } // const topShown = rect.top >= 0;
            // const bottomShown = rect.bottom <= window.innerHeight;
            // this.isRecommendationScrolledIntoView = topShown && bottomShown;
            // console.log(this.isRecommendationScrolledIntoView);

          }

          if (this.scrollAnalysisIntoViewRef) {
            var _el = this.scrollAnalysisIntoViewRef.nativeElement; // .getBoundingClientRect();

            this.isAnalysisScrolledIntoView = this.isElementXPercentInViewport(_el, 10);

            if (this.isAnalysisScrolledIntoView && !this.isAnalysisAlreadyRendered) {
              this.isAnalysisAlreadyRendered = true;
            } // const topShown = rect.top >= 0;
            // const bottomShown = rect.bottom <= window.innerHeight;
            // this.isAnalysisScrolledIntoView = topShown && bottomShown;
            // console.log(this.isAnalysisScrolledIntoView);

          }
        }
      }, {
        key: "toggleVideo",
        value: function toggleVideo(event) {
          this.videoplayer.nativeElement.play();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log("afterinit");
        }
      }, {
        key: "downloadAsPDF",
        value: function downloadAsPDF() {
          var data = document.getElementById('pdfTable'); //Id of the table

          html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(function (canvas) {
            // Few necessary setting options 
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__["jsPDF"]('p', 'mm', 'a4'); // A4 size page of PDF  

            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF   
          });
        } // plus()
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

      }, {
        key: "PolicyAgree",
        value: function PolicyAgree(event) {
          if (this.checked == false) {
            this.checked = true;
          } else if (this.checked == true) {
            this.checked = false;
          }
        }
      }, {
        key: "showSlide3",
        value: function showSlide3() {
          if (this.checked == true) {
            this.showMe = false;
            this.hideUntilCalled = true;
            this.slide4Show = false;
            this.slide6Show = false;
            this.slide7Show = false;
            this.slideLogin = false;
            this.slide5Show = false;
            return false;
          } else {
            alert('Please agree Privacy Policy to go ahead');
          }
        }
      }, {
        key: "showSlide4",
        value: function showSlide4() {
          this.showMe = false;
          this.hideUntilCalled = false;
          this.slide7Show = false;
          this.slide6Show = false;
          this.slide5Show = false;
          this.slide4Show = true;
          this.slideLogin = false;
          this.changeDetector.detectChanges();
          var anyService = this.ageSliderRef;
          var carouselService = anyService.carouselService;
          carouselService.to(13, 0);
          return false;
        }
      }, {
        key: "showSlide5",
        value: function showSlide5() {
          this.showMe = false;
          this.hideUntilCalled = false;
          this.slide4Show = false;
          this.slide6Show = false;
          this.slide7Show = false;
          this.slideLogin = false;
          this.slide5Show = true;
          return false;
        }
      }, {
        key: "showSlide6",
        value: function showSlide6() {
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
      }, {
        key: "scrollRecommendation",
        value: function scrollRecommendation(event) {
          console.log(event);
        }
      }, {
        key: "showSlide7",
        value: function showSlide7() {
          this.showMe = false;
          this.hideUntilCalled = false;
          this.slide4Show = false;
          this.slide5Show = false;
          this.slide6Show = false;
          this.slideLogin = false;
          this.slide7Show = true; // this.changeDetector.detectChanges();
          // setTimeout(() => {
          //   this.elementRef.nativeElement.querySelector('.score-recommendation').addEventListener('scroll', this.scoreRecommendationFn, true);
          // }, 100);

          return false;
        }
      }, {
        key: "showSlideLogin",
        value: function showSlideLogin() {
          this.showMe = false;
          this.hideUntilCalled = false;
          this.slide4Show = false;
          this.slide5Show = false;
          this.slide6Show = false;
          this.slide7Show = false;
          this.slideLogin = true;
          return false;
        }
      }, {
        key: "submitLogin",
        value: function submitLogin() {
          var _this = this;

          console.log("submit login to facebook"); // FB.login();

          FB.login(function (response) {
            console.log('submitLogin', response);

            if (response.authResponse) {
              _this.LoginName = response.name;
              _this.LoginEmail = response.email;

              _this.SignIn();
            } else {
              console.log('User login failed');
            }
          }, {
            scope: 'email name'
          });
        }
      }, {
        key: "SignIn",
        value: function SignIn() {
          var _this2 = this;

          console.log(this.apiId);

          this._appService.SignInApp(this.apiId, this.selectedAge, this.regForm.get('txtNumber').value, this.selectedSkin, this.selectedGender, this.LoginEmail, this.LoginName).subscribe(function (res) {
            _this2.code = 'SUCCESSFUL';
            console.log(res);

            _this2.showSlide7();
          }, function (err) {
            console.log(err.error.error.message);
            _this2.code = err.error.error.code;
            _this2.message = err.error.error.message;
          });
        }
      }, {
        key: "ThankYou",
        value: function ThankYou() {
          var _this3 = this;

          this._appService.SignInApp(this.apiId, this.selectedAge, this.thankYouForm.get('txtThankYouNumber').value, this.selectedSkin, this.selectedGender, this.thankYouForm.get('txtThankYouEmail').value, this.LoginName).subscribe(function (res) {
            _this3.code = 'SUCCESSFUL';
            console.log(res);
          }, function (err) {
            console.log(err.error.error.message);
            _this3.code = err.error.error.code;
            _this3.message = err.error.error.message;
          });
        }
      }, {
        key: "googleInitialize",
        value: function googleInitialize() {
          var _this4 = this;

          window['googleSDKLoaded'] = function () {
            window['gapi'].load('auth2', function () {
              _this4.auth2 = window['gapi'].auth2.init({
                client_id: '385303878640-2peie9oqcfksd6ebejvoj5t566auhup3.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin',
                scope: 'profile email'
              });
            });
          };

          (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'google-jssdk');
        }
      }, {
        key: "prepareLogin",
        value: function prepareLogin() {
          var _this5 = this;

          this.auth2.attachClickHandler(this.loginRef.nativeElement, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile(); //console.log('Token || ' + googleUser.getAuthResponse().id_token);
            //this.show = true;

            _this5.LoginName = profile.getName();
            _this5.LoginEmail = profile.getEmail();

            _this5.SignIn(); //console.log('Image URL: ' + profile.getImageUrl());
            //console.log('Email: ' + profile.getEmail());

          }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.regForm = this._formBuilder.group({
            txtNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PushID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cb: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
          });
          this.regForm = this._formBuilder.group({
            txtThankYouNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            txtThankYouEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'facebook-jssdk');
          /*JITB*/


          this._appService.GetSkinTypes().subscribe(function (data) {
            return _this6.GetSkinTypes = data;
          });

          this.hideMe = false;
          this.showMe = true;
          this.hideUntilCalled = false;
          this.slide4Show = false;
          this.slide5Show = false;
          this.slide6Show = false;
          this.slide7Show = false;
          this.slideLogin = false; //   setTimeout(function() {
          //     this.hideMe = false;
          //     this.showMe = true;
          // }.bind(this), 1000);

          var windowSize = window.matchMedia('(max-width: 768px)');

          if (!windowSize.matches) {
            this.videoOptions = {
              width: {
                ideal: 640
              },
              height: {
                ideal: 480
              }
            };
          }

          this.width = windowSize.matches ? 300 : 640; // set video element width

          this.height = windowSize.matches ? 500 : 480; // set video element height

          ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamUtil"].getAvailableVideoInputs().then(function (mediaDevices) {
            _this6.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
          });
        }
      }, {
        key: "triggerSnapshot",
        value: function triggerSnapshot() {
          this.trigger.next();
        }
      }, {
        key: "toggleWebcam",
        value: function toggleWebcam() {
          this.showWebcam = !this.showWebcam;
        }
      }, {
        key: "handleInitError",
        value: function handleInitError(error) {
          this.errors.push(error);
        }
      }, {
        key: "showNextWebcam",
        value: function showNextWebcam(directionOrDeviceId) {
          // true => move forward through devices
          // false => move backwards through devices
          // string => move to device with given deviceId
          this.nextWebcam.next(directionOrDeviceId);
        }
      }, {
        key: "handleImage",
        value: function handleImage(webcamImage) {
          // console.info('received webcam image', webcamImage);
          this.webcamImage = webcamImage;
          this.url = webcamImage.imageAsDataUrl; // call method that creates a blob from dataUri

          var imageBlob = this.dataURItoBlob(webcamImage.imageAsBase64);
          this.imgFile = new File([imageBlob], 'image.jpeg', {
            type: 'image/jpeg'
          });
          this.callApi();
          this.isImage = true;
          this.toggleWebcam();
        }
        /*
        *  ---------------------------------
        *     coverting dataURI to blob
        *  ---------------------------------
        */

      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var byteString = window.atob(dataURI);
          var arrayBuffer = new ArrayBuffer(byteString.length);
          var int8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
          }

          var blob = new Blob([int8Array], {
            type: 'image/jpeg'
          });
          return blob;
        }
      }, {
        key: "changeImage",
        value: function changeImage(event) {
          var _this7 = this;

          if (event.target.files && event.target.files[0]) {
            // const reader = new FileReader();
            this.reader.readAsDataURL(event.target.files[0]); // read file as data url

            this.imgFile = event.target.files[0];
            this.callApi();

            this.reader.onload = function (event) {
              _this7.url = event.target.result;
            };

            this.isImage = true;
            this.showWebcam = false;
          }
        }
      }, {
        key: "triggerObservable",
        get: function get() {
          return this.trigger.asObservable();
        }
      }, {
        key: "nextWebcamObservable",
        get: function get() {
          return this.nextWebcam.asObservable();
        }
      }, {
        key: "ActiveTab",
        value: function ActiveTab(event, activeTabText) {
          var topPriorities = this.dataaa.priorityInfo.topPriorities;

          if (this.activeResultTab !== activeTabText) {
            this.skinResultSelected = topPriorities.find(function (tp) {
              return tp.priority_name === activeTabText;
            });
            this.activeResultTab = activeTabText;
          }
        }
      }, {
        key: "ShowRestTabFn",
        value: function ShowRestTabFn() {
          this.showRestTabs = !this.showRestTabs;
        }
      }, {
        key: "callApi",
        value: function callApi() {
          var _this8 = this;

          this.code = '';
          this.message = 'Loading...';
          document.getElementById("analysing").style.display = "block";

          this._appService.checkSkin(this.imgFile, this.selectedSkin, this.selectedAge).subscribe(function (res) {
            _this8.code = 'SUCCESSFUL';
            _this8.dataaa = res;
            _this8.apiId = _this8.dataaa.id;
            _this8.skinResultSelected = _this8.dataaa.priorityInfo.topPriorities[0];
            _this8.activeResultTab = _this8.skinResultSelected.priority_name;
            _this8.message = JSON.stringify(res);

            _this8.showSlide7();
          }, function (err) {
            console.log(err.error && err.error.error && err.error.error.message);
            _this8.code = err.error && err.error.error && err.error.error.code;
            _this8.message = err.error && err.error.error && err.error.error.message;
            document.getElementById("analysing").style.display = "none";
          });
        }
      }, {
        key: "getOnboardingData",
        value: function getOnboardingData(data) {
          var startPosition = data.startPosition;
          this.onboardinActiveSlide = startPosition;
        }
      }, {
        key: "getGenderData",
        value: function getGenderData(data) {
          var slides = data.slides;
          if (slides.length > 0) this.selectedGender = slides[0].id;
          console.log(this.selectedGender);
        }
      }, {
        key: "getAgeData",
        value: function getAgeData(data) {
          var slides = data.slides;
          if (slides.length > 0) this.selectedAge = slides[0].id;
          console.log(this.selectedAge);
        }
      }, {
        key: "getSkinData",
        value: function getSkinData(data) {
          var slides = data.slides;
          if (slides.length > 0) this.selectedSkin = slides[0].id;
          console.log(this.selectedSkin);
        }
      }, {
        key: "isInViewport",
        value: function isInViewport(el) {
          var rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginRef', {
      "static": false
    })], AppComponent.prototype, "loginRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer", {
      "static": false
    })], AppComponent.prototype, "videoplayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ageSliderRef', {
      "static": false
    })], AppComponent.prototype, "ageSliderRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollRecommendationIntoViewRef', {
      "static": false
    })], AppComponent.prototype, "scrollRecommendationIntoViewRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollAnalysisIntoViewRef', {
      "static": false
    })], AppComponent.prototype, "scrollAnalysisIntoViewRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])], AppComponent.prototype, "isScrolledIntoView", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      // readonly rootUrl = 'https://smartskinadvisor.orbo.tech/api';
      // readonly clientKey = 'IOS9B6E7369D7D0CCE2002101AA32CD5EA4078A182CF491C7452487195B801D63E7';
      function AppService(_http) {
        _classCallCheck(this, AppService);

        this._http = _http; // readonly rootUrl = 'https://sandbox.scderma.orbo.tech/api';
        // readonly clientKey = 'ngpfRN7dJXT2EEmxrVAPXF7a0JKQoOiQxLbdzLfJBIDMu3hoqKKvgrBNO9k53ruv';

        this.rootUrl = 'https://skincaredemo.orbo.ai/api';
        this.clientKey = 'IOS9B6E7369D7D0CCE2002101AA32CD5EA4078A182CF491C7452487195B801D63E7';
      }

      _createClass(AppService, [{
        key: "checkSkin",
        value: function checkSkin(image, skinType, age) {
          var form = new FormData();
          form.append('image', image, image.name);
          form.append('skinType', skinType);
          form.append('age', age);
          var options = {
            reportProgress: true
          }; // return this._http.post<IGetResult[]>(this.rootUrl + '/media/skincaredermafiq/upload?clientkey=' + this.clientKey, form, options);

          return this._http.post(this.rootUrl + '/media/skinanalysis/upload?clientkey=' + this.clientKey, form, options);
        }
      }, {
        key: "GetSkinTypes",
        value: function GetSkinTypes() {
          return this._http.get(this.rootUrl + '/skintypes?clientkey=' + this.clientKey);
        }
      }, {
        key: "SignInApp",
        value: function SignInApp(id, age, Mobile, skinType, gender, email, name) {
          var options = {
            reportProgress: true
          };
          return this._http.patch(this.rootUrl + '/memberlogs/' + id + '?clientkey=' + this.clientKey, {
            start_test: "yes",
            name: name,
            email: email,
            mobile: Mobile,
            gender: gender,
            age: age,
            skin_type: skinType,
            location: ""
          }, options);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! /Users/akshamalhotra/Development/more/dermafique-skin-tool-git/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
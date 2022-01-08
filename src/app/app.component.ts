import { Component, OnInit, AfterViewInit, OnChanges, ChangeDetectorRef, HostListener, ViewChildren, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Subject, Observable, interval } from 'rxjs';
import { AppService } from './app.service';
import { IGetResult } from './GetResult';
import { IGetResultNew } from './GetResultNew';
import { IGetSkinTypes } from './GetSkinTypes';
import { ViewChild, ElementRef } from '@angular/core'
import { KeyValuePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { NgxCaptureService } from 'ngx-capture';
import { DomSanitizer } from '@angular/platform-browser';
import * as html2pdf from 'html2pdf.js';
// import domtoimage from 'dom-to-image';

declare var FB: any;
declare var xepOnline: any;
// declare var loginRef: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private _appService: AppService,
    private _formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    private captureService: NgxCaptureService,
    private _sanitizer: DomSanitizer,
    private renderer: Renderer2,
  ) { }

  
  title = 'cameraModule';
  downloadPDF = false;
  base64Converted = false;
  showLoader = false;
  img = '';
  auth2:any;
  isPlay: boolean = false;
  reader: FileReader = new FileReader;
  url: string;
  pdfSent = false;
  imgFile = undefined;
  isImage: boolean;
  height: number;
  width: number;

  /* JITB*/
  public hideMe = false;
  public showMe = true;
  public hideUntilCalled = false;
  public slide4Show = false;
  public slide5Show = false;
  public slide6Show = false;
  public slide7Show = false;
  public slideLogin = false;
  // inputnumber = 20;
  selectedSkin = "os";
  selectedAge: string = '35';
  selectedGender = "female";
  apiId:any;
  LoginMobile = "";
  LoginEmail = "";
  LoginName = "";
  checked=false;
  onboardinActiveSlide = 0;
  // defaultAgeArray = Array.from({length: 50}, (_, i) => i < 9 ? '0' + (i + 1) : i + 1);
  defaultAgeArray = Array.from({ length: 75 - 12 + 1 }, (_, i) => 12 + i);
  guestResult = false;
  /*JITB Ends*/
  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = false;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // facingMode: "user"
    // width: 300,
    // height: 480
  };
  code: any;
  message = <any>'Loading...';
  public errors: WebcamInitError[] = [];
  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  public regForm: FormGroup;
  public txtNumber: FormControl;
  public PushID: FormControl;
  public thankYouForm: FormGroup;
  public txtThankYouNumber: FormControl;
  public txtThankYouEmail: FormControl;
  public GetSkinTypes = [] as any;
  public colorMap = {
    "G": '#b3d936', //abfb8f
    "Y": '#f4bc1c', //fded8b
    "R": '#fc5858',
  }

  // public dataaa:any = {
  //   "id": "61d6fca0ee03a100251670a7",
  //   "outputData": {
  //       "dark_spot_percentage": 11,
  //       "uneven_skin_percentage": 65,
  //       "skin_dullness_percentage": 22,
  //       "face_wrinkle_percentage": 12,
  //       "face_firmness_percentage": 88,
  //       "Smoothness": 68,
  //       "hydration_score": 78,
  //       "skin_health_score": 70,
  //       "dark_spot_percentage_color_code": "Y",
  //       "uneven_skin_percentage_color_code": "R",
  //       "skin_dullness_percentage_color_code": "Y",
  //       "face_wrinkle_percentage_color_code": "Y",
  //       "face_firmness_percentage_color_code": "Y",
  //       "Smoothness_color_code": "R",
  //       "hydration_score_color_code": "Y"
  //   },
  //   "outputImages": {
  //       "strength_image": "https://skincaredemo.orbo.ai/api/media/skincareresult/download/085d462a-f219-4aee-b80e-81067abed7b3sm-strength.jpg"
  //   },
  //   "priorityInfo": {
  //       "topPriorities": [
  //           {
  //               "priority_number": 1,
  //               "priority_name": "Uneven Skin Tone",
  //               "priority_score": 65,
  //               "priority_color_code": "R",
  //               "priority_title": "Uneven Skin Tone",
  //               "priority_prod_title": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is uneven skin tone.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque-thumb.png",
  //                   "product_name": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //                   "product_desc": "Bio cellulose mask that continually soaks in the formulation that helps reduce uneven skin tone.",
  //                   "product_link": "https://www.nykaa.com/dermafique-bio-cellulose-tone-perfecting-face-mask/p/958791?productId=958791&pps=7?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is uneven skin tone. This appears as patchiness on skin and lack of lustre.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/uneven-skin-tone.png",
  //                           "points": [
  //                               "Increased melanin synthesis caused by prolonged exposure to sun rays.",
  //                               "A compromised skin barrier caused by lack of hydration, especially in the case of dry skin.",
  //                               "High levels of stress, pollutants, as well as aging contribute to an uneven skin tone as well.",
  //                               "Oily, acne-prone skin is also prone to hyperpigmentation caused by acne."
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //                           "points": [
  //                               "To help reduce uneven skin tone, you need a skincare solution that contains an active ingredient like Vitamin B3, which helps brighten skin and fade spots, along with potent plant extracts that replenish antioxidants and hydrate your skin."
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "The Dermafique Tone Perfecting Bio Cellulose Face Masque that helps reduce your skin concern of uneven skin tone and hydrates your dry skin. Crafted with biodegradable bio cellulose fibers, derived from 100% natural coconut water using patented technology, the Tone Perfecting Masque: ",
  //                       "solution_recommends_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //                               "point": "Has powerful ingredients like Vitamin B3, well known for reducing hyperpigmentation and providing even skin tone."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/hyaluronic-acid.png",
  //                               "point": "Contains Hyaluronic acid, known to have a unique water retaining capacity, and is an effective hydrator for dry skin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/plant-extracts.png",
  //                               "point": "Is infused with potent plant extracts like Chamomile flower, Grapefruit seed, Bamboo stem, Pine and aloe leaf extracts."
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": "The thin gel-like masque adheres to every curve and contour of your face like a second skin to help it soak in the goodness of the natural extracts for longer."
  //                   },
  //                   "expert": {
  //                       "expert_tip": "Hormonal imbalances can contribute to uneven skin tone.",
  //                       "expert_tip_desc": "To combat uneven skin tone: ",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                               "point": "Make lifestyle changes, such as ensuring a healthy diet and adequate hydration."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                               "point": "Limit your daily sun exposure and use sunscreen regularly."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": "Visit a dermatologist / Gynaecologist if you also have irregular periods or accompanying hair loss."
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 2,
  //               "priority_name": "Smoothness",
  //               "priority_score": 68,
  //               "priority_color_code": "R",
  //               "priority_title": "Smoothness",
  //               "priority_prod_title": "Dermafique All Important Skin Toner",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is reduced smoothness.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-all-important-skin-toner.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-all-important-skin-toner-thumb.png",
  //                   "product_name": "Dermafique All Important Skin Toner",
  //                   "product_desc": "A clarifying skin toner that cleanses pores, restores and balances the pH level of your skin.",
  //                   "product_link": "https://www.nykaa.com/dermafique-all-important-skin-toner-150ml/p/305497?productId=305497&pps=5?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is reduced smoothness. Smooth skin indicates healthy skin that feels soft to touch.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/lack-of-smoothness.png",
  //                           "points": [
  //                               "Clogged pores that are not deep cleansed to remove the micro-impurities.",
  //                               "A layer of dead skin cells on the skin can also make it appear rough.",
  //                               "Skin lacking effective hydration can often seem rough and lack smoothness. "
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/skin's-ph.png",
  //                           "points": [
  //                               "To restore your skin's smooth, supple texture, you need a skincare solution that deep cleanses pores, exfoliates the skin gently to remove dead skin cells and restores the skin's pH for optimal hydration. ",
  //                               "It must also contain skin-quenching ingredients that restore skin's precious moisture."
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "The Dermafique All Important Skin Toner that helps address your skin concern of reduced smoothness by cleansing pores and removing dirt particles trapped inside, restoring skin's pH balance and preparing the skin for hydration. ",
  //                       "solution_recommends_desc": "The non-drying, alcohol and paraben-free All Important Skin Toner: ",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/cleanses-pores.png",
  //                               "point": "Cleanses pores and purifies skin to make it smooth and radiant."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/glycolic-acid.png",
  //                               "point": "Is powered with Glycolic acid which is well known to exfoliate the skin to remove the dead skin cells gently."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                               "point": "Is enriched with Vitamin E and Hyaluronic Acid that are known to effectively hydrate dry skin to give it a smooth texture. "
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": null
  //                   },
  //                   "expert": {
  //                       "expert_tip": "To achieve smooth and healthy skin: ",
  //                       "expert_tip_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/anti-oxidant.png",
  //                               "point": "Eat food rich in antioxidants."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/exercise-and-sleep.png",
  //                               "point": "Get adqueate exercise and sleep."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                               "point": "Protect your skin with a sunscreen against the effects of the sun."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/pollution.png",
  //                               "point": "Protect your skin from pollution"
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 3,
  //               "priority_name": "Hydration Score",
  //               "priority_score": 78,
  //               "priority_color_code": "Y",
  //               "priority_title": "Hydration Score",
  //               "priority_prod_title": "Dermafique Hydra Tonique Gel Fluid",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is lack of hydraton.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-hydra-tonique-gel-fluid.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-hydra-tonique-gel-fluid-thumb.png",
  //                   "product_name": "Dermafique Hydra Tonique Gel Fluid",
  //                   "product_desc": "Gel-based facial hydrator that provides long-lasting hydration.",
  //                   "product_link": "https://www.nykaa.com/dermafique-hydratonique-gel-fluid/p/512912?productId=512912&pps=17?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is low hydration. Lack of hydration leads to reduced moisture in the skin, causing it to be less supple and plump.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/skin-lacks-water.png",
  //                           "points": [
  //                               "Oily skin should not be mistaken to be adequately hydrated because of its appearance. When skin lacks water content, it overproduces oil to compensate for the lack of moisture. ",
  //                               "Constant cleansing to remove excess sebum and oil also strips the skin of its precious moisture.",
  //                               "This leads to a compromised skin barrier over time, which results in transepidermal moisture loss (when water passively evaporates from the skin). ",
  //                               "As we grow older, naturally produced moisturising factors start depleting, and hence need to be supplemented. "
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                           "points": [
  //                               "For hydrated and plump skin, you need humectant-rich skincare solutions that contain Vitamin E-  a potent antioxidant and hydrating ingredients, to deeply moisturise and nourish your skin."
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "The Dermafique Hydra Tonique Gel Crème, a lightweight daily cream to take care of your skin concern of lack of hydration. A deeply hydrating cream, it prevents transepirdermal water loss, boosts moisture to nourish skin and maintains the skin barrier function.",
  //                       "solution_recommends_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/shea-butter.png",
  //                               "point": "It is enriched with Shea butter, along with humectants like glycerin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/seaweed.png",
  //                               "point": "Powered with seaweed extract, a skin superfood rich in vitamins and minerals known for excellent hydrating properties. "
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                               "point": "Infused with Vitamin E known for providing hydration and preserving the skin barrier function."
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": null
  //                   },
  //                   "expert": {
  //                       "expert_tip": "To restore moisture to your skin:",
  //                       "expert_tip_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/drink-plenty-of-water.png",
  //                               "point": "Drink plenty of water."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/limit-coffee-alcohol.png",
  //                               "point": "Limit your consumption of coffee and alcohol."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                               "point": "Maintain a healthy diet that includes fruits and vegetables with high water content such as cucumber, watermelon, zucchini and gourds."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/limit-coffee-alcohol.png",
  //                               "point": "Use sun protection daily."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/meditative-techniques.png",
  //                               "point": "Try to reduce stress by adopting some meditative techniques."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 4,
  //               "priority_name": "Dullness",
  //               "priority_score": 22,
  //               "priority_color_code": "Y",
  //               "priority_title": "Dullness",
  //               "priority_prod_title": "Aqua Cloud Hydrating Crème",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is dullness.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/aqua-cloud-hydrating-creme.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-aqua-cloud-hydrating-creme-thumb.png",
  //                   "product_name": "Aqua Cloud Hydrating Crème",
  //                   "product_desc": "Hydrating crème that nourishes and repairs environmentally-stressed skin.",
  //                   "product_link": "https://www.nykaa.com/dermafique-aqua-cloud-hydrating-cr-me/p/512911?productId=512911&pps=2?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is dullness, which indicates that your skin lacks radiance.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/skin-dullness.png",
  //                           "points": [
  //                               "A buildup of dead skin cells.",
  //                               "Reduced luminosity due to skin dryness and a slow turnover rate of new cells.",
  //                               "Skin dryness that causes reduced ability to bind and retain water."
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/antioxidants.png",
  //                           "points": [
  //                               "To revive your skin's radiance, you need a skincare solution that deeply hydrates your skin, and contains potent ingredients like antioxidants, which can repair cellular damage and restore the glow."
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "Dermafique's Smart Skin Advisor Recommends: Dermafique Aqua Cloud Hydrating Crème that helps address your skin concern of dullness by hydrating, nourishing & giving your skin a glow.",
  //                       "solution_recommends_desc": "This lightweight yet deeply hydrating cream:",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/seaweed.png",
  //                               "point": "Is infused with Sea Weed Extracts, which are a rich source of vitamins, & minerals known for hydrating & brightening the skin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e-and-vitamin-b5.png",
  //                               "point": "Powered with antioxidants like Vitamin E and Vitamin B5 that are well known to repair skin damage and reduce skin dullness. "
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/prevents-water-loss.png",
  //                               "point": "Fortifies the skin barrier and prevents transepidermal water loss from the skin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/whipped-texture.png",
  //                               "point": "Is an absolute delight to apply as its whipped texture melts into your skin to give you a weightless & velvety experience. "
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": null
  //                   },
  //                   "expert": {
  //                       "expert_tip": "To prevent and reduce dullness:",
  //                       "expert_tip_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                               "point": "Ensure a healthy diet, rich in antioxidants and vitamins."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/hydration.png",
  //                               "point": "Have ample hydration through the day to boost the glow on your skin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/facial-self-massages.png",
  //                               "point": "Do regular facial self massages, yoga and exercises to improve blood circulation."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sleep.png",
  //                               "point": "Get adequate sleep to help cell renewal."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 5,
  //               "priority_name": "Firmness",
  //               "priority_score": 88,
  //               "priority_color_code": "Y",
  //               "priority_title": "Firmness",
  //               "priority_prod_title": "Dermafique Age Defying Nuit ",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is lack of firmness.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-nuit.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-nuit-thumb.png",
  //                   "product_name": "Dermafique Age Defying Nuit ",
  //                   "product_desc": "Anti-aging Night Cream that boosts cell renewal and regeneration of collagen.",
  //                   "product_link": "https://www.nykaa.com/dermafique-age-defying-nuit-50gm/p/305502?productId=305502&pps=15?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is lack of firmness. This means that your skin is losing elasticity, and is craving hydration in order to maintain suppleness. ",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/lack-of-firmness.png",
  //                           "points": [
  //                               "As we age, skin cell processes begin to slow down, along with a decrease in the production of collagen and elastin.",
  //                               "Gradual decrease in skin's natural oils makes your skin feel less plump and supple."
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/firm-healthy-skin.png",
  //                           "points": [
  //                               "To help improve the firmness of your skin, you need a skincare solution that contains actives like plant stem cell extracts, antioxidants and humectants that enhance the regenerative ability of your skin, along with preventing collagen breakdown and preserving essential moisture. "
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "The Dermafique Age Defying Nuit helps addresses your skin concern of lack of firmness. It restores resilience, corrects pigmentation for a firmer skin post just 4 weeks of use, basis consumer study.",
  //                       "solution_recommends_desc": "Age Defying Nuit is: ",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/plant-stem-cell-extract.png",
  //                               "point": "Formulated with PhytoCellTecTM technology containing plant stem cell extracts, which are known to boost cellular activity and help regenerate skin cells."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                               "point": "It also contains Vitamin E, a powerful antioxidant that boosts the skin's ability of staying supple and nourished. "
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": "It is clinically proven to visibly reduce wrinkles, pigmentation, for even-toned, younger-looking skin, basis a consumer study."
  //                   },
  //                   "expert": {
  //                       "expert_tip": "For firm, healthy skin:",
  //                       "expert_tip_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/diet-rich-fruits-vegetables.png",
  //                               "point": "Ensure diet rich in green, red and orange fruits & vegetables to get a plethora of antioxidants."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/protein.png",
  //                               "point": "Have adequate protein to repair the skin and keep aging processes at bay."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sleep.png",
  //                               "point": "Ensure you get at least 7 hours of sleep at night."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                               "point": "Protect your skin with a sunscreen against the effects of the sun."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 6,
  //               "priority_name": "Fine Lines & wrinkle",
  //               "priority_score": 12,
  //               "priority_color_code": "Y",
  //               "priority_title": "Fine Lines & wrinkle",
  //               "priority_prod_title": "Dermafique Age Defying Serum",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is fine lines and wrinkles.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-serum.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-serum-thumb.png",
  //                   "product_name": "Dermafique Age Defying Serum",
  //                   "product_desc": "Anti-ageing serum that boosts cell renewal and regeneration of collagen.",
  //                   "product_link": "https://www.nykaa.com/dermafique-age-defying-serum-50gm/p/305503?productId=305503&pps=11?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is fine lines and wrinkles. These start at a cellular level as early as your mid/late twenties, and can be more prominent on dry skin due to lack of hydration.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/wrinkles.png",
  //                           "points": [
  //                               "Slow down of the cell regeneration process.",
  //                               "Reduced collagen and elasticity."
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/humectants.png",
  //                           "points": [
  //                               "To diminish the appearance of fine lines, you need a powerful, yet lightweight skincare solution that is powered with plant stem cell extracts known to regenerate cells, along with potent anti-ageing actives that boost skin's renewal.",
  //                               "To relieve skin dryness, your product must also contain humectants that help with hydration and plumping. "
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "Dermafique's Smart Skin Advisor Recommends: The Dermafique Age Defying Serum reduces fine lines and wrinkles by boosting your skin's regenerative power, for firmer skin, post just 4 weeks of use.",
  //                       "solution_recommends_desc": "This serum is: ",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/plant-stem-cell-extract.png",
  //                               "point": "Formulated with PhytoCellTecTM technology containing plant stem cell extracts, which boost cellular activity and help regenerate skin cells. "
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                               "point": "Powered with antioxidants like Vitamin E, and humectants, which hydrate and relieve dryness."
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": "It is clinically proven to visibly reduce wrinkles, pigmentation, for even-toned, younger-looking skin, basis a consumer study"
  //                   },
  //                   "expert": {
  //                       "expert_tip": "Fine lines and wrinkles are a natural part of ageing. You can delay the same by:",
  //                       "expert_tip_desc": null,
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/well-hydrated.png",
  //                               "point": "Staying well-hydrated."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                               "point": "Eating a healthy diet with vitamins, minerals, and antioxidants."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/yoga-and-meditation.png",
  //                               "point": "Reducing stress by yoga and meditation, might also aid in ageing well."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           },
  //           {
  //               "priority_number": 7,
  //               "priority_name": "Dark Spots",
  //               "priority_score": 11,
  //               "priority_color_code": "Y",
  //               "priority_title": "Dark Spots",
  //               "priority_prod_title": "Dermafique Soleil All Matte Sunscreen SPF 50 ",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is dark spots. ",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-soleil-all-matte-sunscreen-spf-50.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-soleil-all-matte-sunscreen-spf-50-thumb.png",
  //                   "product_name": "Dermafique Soleil All Matte Sunscreen SPF 50 ",
  //                   "product_desc": "Matte finish non-sticky, lightweight formula designed specifically for hot and humid climates. ",
  //                   "product_link": "https://www.nykaa.com/dermafique-soleil-defense-all-matte-full-light-spf-50-50gm/p/627390?productId=627390&pps=10?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concerns": {
  //                       "concern_write_up_A": "One of your key skin concerns is dark spots, which occur when some areas of the skin produce more melanin than others.",
  //                       "causes": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/dark-spots.png",
  //                           "points": [
  //                               "An increase in melanin in some parts of the skin.",
  //                               "Exposure to the harmful rays of sun including UV Rays, Infrared Rays and Visible Light."
  //                           ]
  //                       },
  //                       "needs": {
  //                           "image": "https://www.dermafique.com/smartskinadvisor/icons/sunlight.png",
  //                           "points": [
  //                               "To solve for dark spots, you need to use a sunscreen that targets the Full Sun Spectrum, along with an SPF of 30 or higher even on days when the sun isn't too bright as well as indoors.",
  //                               "Your sunscreen also needs to be lightweight, yet hydrating enough to meet your dry skin's hydration needs."
  //                           ]
  //                       }
  //                   },
  //                   "solution": {
  //                       "solution_recommends": "The Dermafique Soleil Defense Gel Crème SPF 30, a lightweight sunscreen that will help address your skin concern of dark spots. Powered with Full Light Technology, it targets not just UV rays, but 360° Sun Spectrum including Infrared Rays and Visible Light. It also helps protects from tanning, photo-ageing and persistent pigmentation. ",
  //                       "solution_recommends_desc": "Soleil Defense Gel Crème SPF 30 has: ",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/absorbs-and-penetrates.png",
  //                               "point": "A quick absorbing formula that is comfortable to wear on an everyday basis.  "
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/licorice-extracts-and-niacinamide.png",
  //                               "point": "Is enriched with potent ingredients like Licorice extracts and Niacinamide, which have antioxidant and anti-inflammatory benefits, and are known to effectively fade away dark spots."
  //                           }
  //                       ],
  //                       "solution_concluding_paragraph": null
  //                   },
  //                   "expert": {
  //                       "expert_tip": "Dark spots can occur due to sun damage and also hormonal changes amongst other factors.",
  //                       "expert_tip_desc": "To reduce and prevent dark spots:",
  //                       "points": [
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/sunlight.png",
  //                               "point": "Protect from intense sunlight."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-rich.png",
  //                               "point": "Include a vitamin rich diet for healthy skin."
  //                           },
  //                           {
  //                               "image": "https://www.dermafique.com/smartskinadvisor/icons/full-sun-spectrum.png",
  //                               "point": "Include broad spectrum sunscreens and antioxidants in your skincare routine."
  //                           }
  //                       ],
  //                       "expert_tip_concluding_paragraph": null
  //                   }
  //               }
  //           }
  //       ],
  //       "strengths": [
  //           {
  //               "strength_number": 1,
  //               "strength_name": "Dark Spots",
  //               "strength_score": 11,
  //               "strength_title": "Dark Spots"
  //           }
  //       ],
  //       "skinCareRoutines": [
  //           {
  //               "routine_number": 1,
  //               "routine_prod_title": "Acne Avert Cleansing Mousse"
  //           },
  //           {
  //               "routine_number": 2,
  //               "routine_prod_title": "Toner"
  //           }
  //       ]
  //   }
  // };
  // public skinResultSelected:any =  {
  //   "priority_number": 1,
  //   "priority_name": "Uneven Skin Tone",
  //   "priority_score": 65,
  //   "priority_color_code": "R",
  //   "priority_title": "Uneven Skin Tone",
  //   "priority_prod_title": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //   "priority_product_info": {
  //       "skin_analysis_report": "Your key skin concern is uneven skin tone.",
  //       "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque.png",
  //       "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque-thumb.png",
  //       "product_name": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //       "product_desc": "Bio cellulose mask that continually soaks in the formulation that helps reduce uneven skin tone.",
  //       "product_link": "https://www.nykaa.com/dermafique-bio-cellulose-tone-perfecting-face-mask/p/958791?productId=958791&pps=7?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //       "concerns": {
  //           "concern_write_up_A": "One of your key skin concerns is uneven skin tone. This appears as patchiness on skin and lack of lustre.",
  //           "causes": {
  //               "image": "https://www.dermafique.com/smartskinadvisor/icons/uneven-skin-tone.png",
  //               "points": [
  //                   "Increased melanin synthesis caused by prolonged exposure to sun rays.",
  //                   "A compromised skin barrier caused by lack of hydration, especially in the case of dry skin.",
  //                   "High levels of stress, pollutants, as well as aging contribute to an uneven skin tone as well.",
  //                   "Oily, acne-prone skin is also prone to hyperpigmentation caused by acne."
  //               ]
  //           },
  //           "needs": {
  //               "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //               "points": [
  //                   "To help reduce uneven skin tone, you need a skincare solution that contains an active ingredient like Vitamin B3, which helps brighten skin and fade spots, along with potent plant extracts that replenish antioxidants and hydrate your skin."
  //               ]
  //           }
  //       },
  //       "solution": {
  //           "solution_recommends": "The Dermafique Tone Perfecting Bio Cellulose Face Masque that helps reduce your skin concern of uneven skin tone and hydrates your dry skin. Crafted with biodegradable bio cellulose fibers, derived from 100% natural coconut water using patented technology, the Tone Perfecting Masque: ",
  //           "solution_recommends_desc": null,
  //           "points": [
  //               {
  //                   "image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //                   "point": "Has powerful ingredients like Vitamin B3, well known for reducing hyperpigmentation and providing even skin tone."
  //               },
  //               {
  //                   "image": "https://www.dermafique.com/smartskinadvisor/icons/hyaluronic-acid.png",
  //                   "point": "Contains Hyaluronic acid, known to have a unique water retaining capacity, and is an effective hydrator for dry skin."
  //               },
  //               {
  //                   "image": "https://www.dermafique.com/smartskinadvisor/icons/plant-extracts.png",
  //                   "point": "Is infused with potent plant extracts like Chamomile flower, Grapefruit seed, Bamboo stem, Pine and aloe leaf extracts."
  //               }
  //           ],
  //           "solution_concluding_paragraph": "The thin gel-like masque adheres to every curve and contour of your face like a second skin to help it soak in the goodness of the natural extracts for longer."
  //       },
  //       "expert": {
  //           "expert_tip": "Hormonal imbalances can contribute to uneven skin tone.",
  //           "expert_tip_desc": "To combat uneven skin tone: ",
  //           "points": [
  //               {
  //                   "image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                   "point": "Make lifestyle changes, such as ensuring a healthy diet and adequate hydration."
  //               },
  //               {
  //                   "image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                   "point": "Limit your daily sun exposure and use sunscreen regularly."
  //               }
  //           ],
  //           "expert_tip_concluding_paragraph": "Visit a dermatologist / Gynaecologist if you also have irregular periods or accompanying hair loss."
  //       }
  //   }
  // };
  public showAnalyseVideo = false;
  analyseCounter = 0;
  public dataaa: any;
  public skinResultSelected: any;
  public activeResultTab:string;
  public showRestTabs = false;

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      txtNumber: ['', [Validators.required, Validators.pattern(/^(?:\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$/)]],
      PushID: ['', Validators.required],
	    // cb: [false, Validators.requiredTrue],
    });

    this.thankYouForm = this._formBuilder.group({
      txtThankYouNumber: ['', Validators.pattern(/^[6-9]\d{9}$/)],
      txtThankYouEmail: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    });

    // this.googleInitialize();

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '1084146612012271',
        cookie     : true,
        xfbml      : true,
        version    : 'v9.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    /*JITB*/

    this._appService.GetSkinTypes().subscribe((data: IGetSkinTypes[]) => this.GetSkinTypes = data);

    this.hideMe = false;
    this.showMe = false;
    this.hideUntilCalled = false;
    this.slide4Show = false;
    this.slide5Show = false;
    this.slide6Show = true;
    this.slide7Show = false;
    this.slideLogin = false;

    // this.changeDetector.detectChanges();
    
    // setTimeout(function() {
    //     this.hideMe = false;
    //     this.showMe = true;
    // }.bind(this), 1000);

    const windowSize = window.matchMedia('(max-width: 768px)');
    if (!windowSize.matches) {
      this.videoOptions = {
        width: { ideal: 640 },
        height: { ideal: 480 }
      }
    }

    this.width = (windowSize.matches) ? 300 : 640;  // set video element width
    this.height = (windowSize.matches) ? 500 : 480; // set video element height

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  ngAfterViewInit() {
    console.log("afterinit");
    const maxTimer = 106;
    const int = interval(50).subscribe((val) => {
      if(maxTimer === this.analyseCounter) return;
      this.analyseCounter++; 
    })
  }

  // @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  @ViewChild('loginRef', { static: false }) loginRef: ElementRef;
  /*@ViewChild('loginRef', {static: true }) loginElement: ElementRef;*/
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  @ViewChild('ageSliderRef', { static: false }) ageSliderRef: CarouselComponent;
  @ViewChild('screenRef', { static: false }) screenRef: any;
  @ViewChildren('imageBase64Ref') imageBase64Ref: any;

  isElementXPercentInViewport = (el: any, percentVisible: any) => {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  // @ViewChild('scrollRecommendationIntoViewRef', { static: false }) private scrollRecommendationIntoViewRef: ElementRef<HTMLDivElement>;
  @ViewChild('scrollAnalysisIntoViewRef', { static: false }) public scrollAnalysisIntoViewRef: ElementRef<HTMLDivElement>;
  isRecommendationScrolledIntoView = false;
  isRecommendationAlreadyRendered = false;
  isAnalysisScrolledIntoView = false;
  isAnalysisAlreadyRendered = false;

  @HostListener('window:scroll', [])
  isScrolledIntoView() {
    // if (this.scrollRecommendationIntoViewRef) {
    //   const el = this.scrollRecommendationIntoViewRef.nativeElement;
    //   this.isRecommendationScrolledIntoView = this.isElementXPercentInViewport(el, 10);
    //   if(this.isRecommendationScrolledIntoView && !this.isRecommendationAlreadyRendered) {
    //     this.isRecommendationAlreadyRendered = true;
    //   }
    // }
    if (this.scrollAnalysisIntoViewRef) {
      const el = this.scrollAnalysisIntoViewRef.nativeElement;
      this.isAnalysisScrolledIntoView = this.isElementXPercentInViewport(el, 10);
      if(this.isAnalysisScrolledIntoView && !this.isAnalysisAlreadyRendered) {
        this.isAnalysisAlreadyRendered = true;
      }
    }
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
  }

  savePDF() {
    this.showLoader = false;
    this.changeDetector.detectChanges();
    const element = document.getElementById('printPDF');
    const opt = {
      margin:       [0, 1],
      filename:     'myfilenew.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    // let pdf = new jsPDF();
    // pdf.addFont("../assets/newassets/fonts/SFProDisplay/SFProDisplay-Regular.woff2", "SF Pro Display", "normal");
    // pdf.setFont("SF Pro Display"); // set font
    // pdf.html(element, {
    //   margin: [0, 1],
    //   autoPaging: true,
    //   html2canvas: {
    //     scale: .45,
    //     letterRendering: true,
    //     useCORS: true,
    //     width: 310,
    //   },
    //   // fontFaces: [
    //   //   {
    //   //     family: 'SF Pro Display',
    //   //     src: [{
    //   //       url: 'http://localhost:4200/assets/newassets/fonts/SFProDisplay/SFProDisplay-Bold.woff2',
    //   //       format: "truetype",
    //   //     }, {
    //   //       url: 'http://localhost:4200/assets/newassets/fonts/SFProDisplay/SFProDisplay-Light.woff2',
    //   //       format: "truetype",
    //   //     }, {
    //   //       url: 'http://localhost:4200/assets/newassets/fonts/SFProDisplay/SFProDisplay-Medium.woff',
    //   //       format: "truetype",
    //   //     }, {
    //   //       url: 'http://localhost:4200/assets/newassets/fonts/SFProDisplay/SFProDisplay-Regular.woff2',
    //   //       format: "truetype",
    //   //     }],
    //   //   },
    //   // ],
    //   x: 10,
    //   y: 10,
    // }).then(() => pdf.save());

    // {
    //   family: 'poppins',
    //   src: [{
    //     url: 'assets/newassets/fonts/Poppins/Poppins-Bold.woff2',
    //     format: "truetype",
    //   }, {
    //     url: 'assets/newassets/fonts/Poppins/Poppins-Light.woff2',
    //     format: "truetype",
    //   }, {
    //     url: 'assets/newassets/fonts/Poppins/Poppins-Medium.woff2',
    //     format: "truetype",
    //   }, {
    //     url: 'assets/newassets/fonts/Poppins/Poppins-SemiBold.woff2',
    //     format: "truetype",
    //   }],
    // }
    
    // // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
    // debugger;
    this.downloadPDF = false;
    this.base64Converted = false;
  }

  saveImage() {
    this.downloadPDF = true;
    // this.showLoader = true;
    this.changeDetector.detectChanges();

    // xepOnline.Formatter.Format('printPDF', { pageMargin: [0, 1], pageWidth: '216mm', pageHeight: '279mm', render: 'download' });
    

    // window.xepOnline.

    let counter = 1;

    if(this.base64Converted === false) {
      this.imageBase64Ref.map(async (e: any) => {
        const { nativeElement } = e;
        const { src } = nativeElement;
        const data: any = await this.getBase64FromUrl(src);
        this.renderer.setProperty(nativeElement, 'src', data);
        counter++;
        if(this.imageBase64Ref.length === counter) {
          this.base64Converted = true;
          this.savePDF();
          // debugger;
          // this.screenShot();
        }
      });
    } else {
      this.savePDF();
    }
  }

  screenShot() {
    const element = document.getElementById('printPDF');
    this.captureService.getImage(element, true).then(img => {
      // const { innerHeight, innerWidth } = window;
      // let pdf = new jsPDF('p', 'mm', [innerWidth, 14400], true);
      // let position = 0;
      // pdf.addImage(img, 'PNG', 0, position, innerWidth, 14400);
      // pdf.save('MYPdfNew.pdf'); // Generated PDF
      var a = document.createElement("a"); //Create <a>
      a.href = img; //Image Base64 Goes here
      a.download = "imgDown.png"; //File name Here
      a.click(); //Downloaded file
      this.showLoader = false;
    }).catch(err => {
      console.log(err);
    })
  }

  // var data = document.getElementById('printPDF');  //Id of the table
  // html2canvas(data, {
  //   useCORS: true,
  //   allowTaint: true,
  //   scale: .5,
  // }).then((canvas) => {
  //   // Few necessary setting options
  //   let imgWidth = 208;
  //   let pageHeight = 295;
  //   let imgHeight = canvas.height * imgWidth / canvas.width;
  //   let heightLeft = imgHeight;
  //   const { innerHeight, innerWidth } = window;
  //   const { height } = canvas;

  //   const { clientHeight } = document.querySelector('#printPDF');

  //   const contentDataURL = canvas.toDataURL('image/png');
  //   let pdf = new jsPDF('p', 'mm', [innerWidth, height], true); 
  //   // let pdf = new jsPDF('p', 'mm', 'a4', true); // A4 size page of PDF
  //   let position = 0;
  //   pdf.addImage(contentDataURL, 'PNG', 0, position, innerWidth, height);
  //   pdf.save('MYPdfNew.pdf'); // Generated PDF
  // });

  // this.imageBase64Ref.nativeElement;

  // const dataUrl = this.imageBase64Ref.nativeElement.getAttribute('data-url');

  // const baseData = await this.getBase64FromUrl(dataUrl);

  // this.priorityImg = baseData;

  // let pdf = new jsPDF();
  // pdf.html(this.screenRef.nativeElement, {
  //   html2canvas: {
  //     scale: .45,
  //   },
  //   x: 10,
  //   y: 10,
  // }).then(() => pdf.save('tesing.pdf'));

  // setTimeout(() => {
  //   let pdf = new jsPDF('p', 'mm', 'a4', true);
  //   pdf.html(this.screenRef.nativeElement, {
  //     // callback: function (doc) {
  //     //   doc.save('test.pdf');
  //     //   this.downloadPDF = false;
  //     // },
  //     html2canvas: {
  //       scale: .45,
  //     },
  //     x: 10,
  //     y: 10
  //   });
  // }, 100);

  // this.captureService.getImage(this.screenRef.nativeElement, true).then(img => {
  //   const { innerHeight, innerWidth } = window;
  //   let pdf = new jsPDF('p', 'mm', [innerWidth, 14400], true);
  //   let position = 0;
  //   pdf.addImage(img, 'PNG', 0, position, innerWidth, 14400);
  //   pdf.save('MYPdfNew.pdf'); // Generated PDF
  //   // var a = document.createElement("a"); //Create <a>
  //   // a.href = img; //Image Base64 Goes here
  //   // a.download = "imgDown.png"; //File name Here
  //   // a.click(); //Downloaded file
  // }).catch(err => {
  //   console.log(err);
  // })
  // this.img = img;
  // }

  public sendFile:any;

  SendSaveImage() {
    this.downloadPDF = true;
    this.showLoader = true;
    this.changeDetector.detectChanges();

    let counter = 1;

    if(this.base64Converted === false) {
      this.imageBase64Ref.map(async (e: any) => {
        const { nativeElement } = e;
        const { src } = nativeElement;
        const data: any = await this.getBase64FromUrl(src);
        this.renderer.setProperty(nativeElement, 'src', data);
        counter++;
        if(this.imageBase64Ref.length === counter) {
          this.base64Converted = true;
          this.SendSavePDF();
        }
      });
    }
  }

  async SendSavePDF() {
    const element = document.getElementById('printPDF');
    const opt = {
      margin:       [0, 1],
      filename:     'myfilenew.jpeg',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    this.sendFile = await html2pdf().from(element).set(opt).toPdf().output('datauristring');

    this.downloadPDF = false;
    this.base64Converted = false;
    this.showLoader = false;
    this.SendPdf();
  }

  SendPdf() {
    this._appService.sendPdf(this.LoginName, this.LoginMobile, this.LoginEmail, this.sendFile)
      .subscribe((res: any) => {
        console.log(res)
        this.pdfSent = true;
      },
      (err: HttpErrorResponse) => {
        this.showLoader = false;
        this.pdfSent = true;
        // console.log(err.error.error.message);
        // this.code = err.error.error.code;
        // this.message = err.error.error.message;
      });
  }

  // saveImage() {
  //   this.downloadPDF = true;
  //   this.changeDetector.detectChanges();
  //   // debugger;
  //   var node = this.screenRef.nativeElement;

  //   var img;
  //   var filename;
  //   var newImage;

  //   domtoimage.toPng(node, { bgcolor: '#fff' })
  //     .then((dataUrl) => {
  //       debugger;
  //       img = new Image();
  //       img.src = dataUrl;
  //       newImage = img.src;

  //       img.onload = function(){

  //       var pdfWidth = img.width;
  //       var pdfHeight = img.height;

  //         // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

  //         var doc;

  //         if(pdfWidth > pdfHeight) {
  //           doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
  //         } else {
  //           doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
  //         }

  //         var width = doc.internal.pageSize.getWidth();
  //         var height = doc.internal.pageSize.getHeight();


  //         doc.addImage(newImage, 'PNG',  10, 10, width, height);
  //         filename = 'mypdf_' + '.pdf';
  //         doc.save(filename);
  //       };

  //     })
  //     .catch((error) => {
  //       debugger;
  //       console.log(error);
  //     });
  // }



  // public downloadAsPDF() {
  //   this.downloadPDF = true;
  //   this.changeDetector.detectChanges();

  //   // const width = window.innerWidth + 100;
  //   // const height = window.innerHeight + 100;

  //   // const doc = new jsPDF('p', 'mm', [width, height], true);
  //   // const printElem = document.getElementById('printPDF');

  //   // doc.html(printElem, {
  //   //   callback: function (doc) {
  //   //     doc.save('test.pdf');
  //   //     this.downloadPDF = false;
  //   //   },
  //   //   x: 10,
  //   //   y: 10
  //   // });

  //   var data = document.getElementById('printPDF');  //Id of the table
  //   html2canvas(data).then((canvas) => {
  //     // Few necessary setting options

  //     let imgWidth = 208;
  //     let pageHeight = 295;
  //     let imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;
  //     const { innerHeight, innerWidth } = window;
  //     const { height } = canvas;

  //     const { clientHeight } = document.querySelector('#printPDF');

  //     const contentDataURL = canvas.toDataURL('image/png');
  //     let pdf = new jsPDF('p', 'mm', [innerWidth, height], true); // A4 size page of PDF
  //     let position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, innerWidth, height);
  //     pdf.save('MYPdfNew.pdf'); // Generated PDF
  //   });
  // }

  

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
    if (this.checked == false)
    {
      this.checked = true;
    }
    else if (this.checked == true)
    {
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
    } else {
      alert('Please accept the terms of privacy to proceed');
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
    this.changeDetector.detectChanges();
    let anyService = this.ageSliderRef as any;
    let carouselService = anyService.carouselService as CarouselService;
    carouselService.to(23, 0);
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

  scrollRecommendation(event: any) {
    console.log(event);
  }

  showSlide7() {
    this.showMe = false;
    this.hideUntilCalled = false;
    this.slide4Show = false;
    this.slide5Show = false;
    this.slide6Show = false;
	  this.slideLogin = false;
    this.slide7Show = true;
    this.changeDetector.detectChanges();
    // if(guest) {
    //   this.guestResult = true
    // }
    const aninElem = document.querySelectorAll('.animSlideIn');
    aninElem.forEach(el => {
      this.renderer.addClass(el, 'animated');
      this.renderer.addClass(el, 'slideInDelay');
    });
    this.thankYouForm.controls['txtThankYouEmail'].setValue(this.LoginEmail);
    this.thankYouForm.controls['txtThankYouNumber'].setValue(this.LoginMobile);
    // setTimeout(() => {
    //   this.elementRef.nativeElement.querySelector('.score-recommendation').addEventListener('scroll', this.scoreRecommendationFn, true);
    // }, 100);
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
    this.regForm.controls['PushID'].setValue(this.apiId);
    this.changeDetector.detectChanges();
    this.prepareLogin();
    return false;
  }

  SignIn(isSocial = false) {
    console.log(this.apiId);
    let mobile = '';
    let email = '';
    if(isSocial === false) {
      let txtNumberFieldValue = this.regForm.get('txtNumber').value;
      // /^(?:\d{10}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$/ //// one more email validator
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txtNumberFieldValue)) {
        email = txtNumberFieldValue;
        this.LoginEmail = txtNumberFieldValue;
      } else if (/^[6-9]\d{9}$/.test(txtNumberFieldValue)) {
        mobile = txtNumberFieldValue;
        this.LoginMobile = txtNumberFieldValue;
      }
    } else {
      mobile = '';
      email = this.LoginEmail !== undefined ? this.LoginEmail : '';
    }
    // let mobile = isSocial === false ? this.regForm.get('txtNumber').value : '';
    // let email = this.LoginEmail !== undefined ? this.LoginEmail : '';
    this._appService.SignInApp(this.apiId, this.selectedAge, mobile, this.selectedSkin, this.selectedGender, email, this.LoginName)
      .subscribe((res: any) => {
        this.code = 'SUCCESSFUL';
        console.log(res);
        this.showLoader = false;
        this.showSlide7();
      },
    (err: HttpErrorResponse) => {
      this.showLoader = false;
      console.log(err.error.error.message);
      this.code = err.error.error.code;
      this.message = err.error.error.message;
    });
  }

  ThankYou() {
    this._appService.SignInApp(this.apiId, this.selectedAge, this.thankYouForm.get('txtThankYouNumber').value, this.selectedSkin, this.selectedGender, this.thankYouForm.get('txtThankYouEmail').value, this.LoginName)
      .subscribe((res: any) => {
        this.code = 'SUCCESSFUL';
        console.log(res);
      },
    (err: HttpErrorResponse) => {
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
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.googleInitialize();
    this.googleLogin(true);
  }

  googleLogin(attachEvent = false) {
    if(attachEvent === false) this.showLoader = true;
    const elem  = document.querySelector('#loginRef');
    this.auth2.attachClickHandler(elem, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        //console.log('Token || ' + googleUser.getAuthResponse().id_token);
        //this.show = true;
        this.LoginName =  profile.getName();
        this.LoginEmail = profile.getEmail();
        this.SignIn(true);
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + profile.getEmail());
      },
      (error) => {
        this.showLoader = false;
        console.log(error);
        // alert(JSON.stringify(error, undefined, 2));
    });
  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    this.showLoader = true;
    let isLoggedIn = false;
    FB.getLoginStatus((response) => {
      console.log('getLogin Status response');
      if(response.status === 'connected') isLoggedIn = true;
    });

    if(isLoggedIn === false) {
      FB.login((response) => {
        console.log('submitLogin', response);
        // if (response.authResponse) {
        //   this.LoginName = response.name;
        //   this.LoginEmail = response.email;
        //   // this.SignIn(true);
        // } else {
        //   console.log('User login failed');
        // }
      }, { scope: 'email, public_profile' });
    }

    FB.api('/me',
      (response) => {
        console.log('me response');
        console.log(response);
        this.LoginName = response.name;
        this.LoginEmail = response.email;
        this.SignIn(true);
      },
      (error) => {
        this.showLoader = false;
        console.log(error);
      });
  }

  public triggerSnapshot(): void {
    if(this.showWebcam)
      this.trigger.next();
    else this.toggleWebcam();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {

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
  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  changeImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      // const reader = new FileReader();
      this.reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.imgFile = event.target.files[0];
      this.callApi();

      this.reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = (<FileReader>event.target).result as string;
      };
      this.isImage = true;
      this.showWebcam = false;
    }
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  /*
  *  ---------------------------------
  *   calling orbo api to check skin
  *  ---------------------------------
  */

  ActiveTab(event: any, activeTabText: string, scrollToElem = undefined) {
    const { priorityInfo: { topPriorities } } = this.dataaa;
    if(this.activeResultTab !== activeTabText) {
      this.skinResultSelected = topPriorities.find(tp => tp.priority_name === activeTabText);
      this.activeResultTab = activeTabText;
      this.changeDetector.detectChanges();
      if(scrollToElem !== undefined) {
        scrollToElem.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  ShowRestTabFn() {
    this.showRestTabs = !this.showRestTabs
  }

  callApi() {
    this.code = '';
    this.message = 'Loading...';
	  // document.getElementById("analysing").style.display = "block";
    this.showAnalyseVideo = true;
    // const int = interval(100).subscribe((val) => {
    //   this.analyseCounter++; 
    //   this.changeDetector.detectChanges(); 
    // })
    this._appService.checkSkin(this.imgFile, this.selectedSkin, this.selectedAge).subscribe((res: any) => {
      this.code = 'SUCCESSFUL';
      this.dataaa = res;
      this.apiId = this.dataaa.id;
      this.skinResultSelected = this.dataaa.priorityInfo.topPriorities[0];
      this.activeResultTab = this.skinResultSelected.priority_name;
      this.message = JSON.stringify(res);
      // this.showSlide7();
      this.showSlideLogin();
    },
      (err: HttpErrorResponse) => {
        console.log(err.error && err.error.error && err.error.error.message);
        this.code = err.error && err.error.error && err.error.error.code;
        this.message = err.error && err.error.error && err.error.error.message;
		    // document.getElementById("analysing").style.display = "none";
        this.showAnalyseVideo = false;
      });
  }

  getOnboardingData(data: SlidesOutputData) {
    const { startPosition } = data;
    this.onboardinActiveSlide = startPosition
  }

  getGenderData(data: SlidesOutputData) {
    const { slides } = data;
    if(slides.length > 0)
      this.selectedGender = slides[0].id;
    console.log(this.selectedGender);
  }

  getAgeData(data: SlidesOutputData) {
    const { slides } = data;
    if(slides.length > 0)
      this.selectedAge = slides[0].id;
    console.log(this.selectedAge);
  }

  getSkinData(data: SlidesOutputData) {
    const { slides } = data;
    if(slides.length > 0)
      this.selectedSkin = slides[0].id;
    console.log(this.selectedSkin);
  }

  /*Carousel*/
  onBoardingSlider: OwlOptions = {
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
    },
  }

	genderSlider: OwlOptions = {
	  autoplay: false,
	  center: true,
	  loop: false,
	  nav: false,
	  dots:false,
	  margin:10,
	  mouseDrag:true,
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
	}

  ageSlider: OwlOptions = {
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
	}

	skinSlider: OwlOptions = {
	  autoplay: false,
	  center: true,
	  loop: true,
	  nav: false,
	  dots:false,
	  margin:10,
	  mouseDrag:true,
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
	}

	resultSlider: OwlOptions = {
	  autoplay: false,
	  center: true,
	  loop: false,
	  nav: true,
	  navText: ["<img src='../assets/prev2.png'>","<img src='../assets/next2.png'>"],
	  dots:false,
	  margin:0,
	  mouseDrag:true,
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
	}

  isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }
}

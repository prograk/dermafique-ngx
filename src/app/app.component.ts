import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Subject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { IGetResult } from './GetResult';
import { IGetResultNew } from './GetResultNew';
import { IGetSkinTypes } from './GetSkinTypes';
import { ViewChild, ElementRef } from '@angular/core'
import { KeyValuePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; 

declare var FB: any;
declare var loginRef: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'cameraModule';
  
  auth2:any;

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  
  @ViewChild('loginRef', {static: false }) loginRef: ElementRef;
  /*@ViewChild('loginRef', {static: true }) loginElement: ElementRef;*/
	
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  ngAfterViewInit() {
    console.log("afterinit");
  }

  public downloadAsPDF() {
    var data = document.getElementById('pdfTable');  //Id of the table
    html2canvas(data).then(canvas => {  

      // Few necessary setting options 
	  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    }); 
  }

  reader: FileReader = new FileReader;
  url: string;
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
  selectedAge: string = '01';
  selectedGender = "female";
  apiId:any;
  LoginEmail = "";
  LoginName = "";
  checked=false;
  onboardinActiveSlide = 0;
  defaultAgeArray = Array.from({length: 50}, (_, i) => i < 9 ? '0' + (i + 1) : i + 1);
  
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


  /*JITB Ends*/

  // toggle webcam on/off
  public showWebcam = true;
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


  public regForm:FormGroup;
  private txtNumber:FormControl;
  private PushID:FormControl;


  constructor(private _appService: AppService, private _formBuilder: FormBuilder) { }

  public GetSkinTypes = [] as any;

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
      {
        console.log('submitLogin',response);
        if (response.authResponse)
        {
          this.LoginName = response.name;
          this.LoginEmail = response.email;
          this.SignIn();
        }
          else
          {
          console.log('User login failed');
        }
    }, {scope: 'email name'});
  }

  SignIn() {
    console.log(this.apiId);
    this._appService.SignInApp(this.apiId, this.selectedAge, this.regForm.get('txtNumber').value, this.selectedSkin, this.selectedGender, this.LoginEmail, this.LoginName)
      .subscribe((res: any) => {
        this.code = 'SUCCESSFUL';   
        console.log(res);
        this.showSlide7();     
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
    this.auth2.attachClickHandler(this.loginRef.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        //console.log('Token || ' + googleUser.getAuthResponse().id_token);
        //this.show = true;
        this.LoginName =  profile.getName();
        this.LoginEmail = profile.getEmail();
        this.SignIn();
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + profile.getEmail());
      }, 
      (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngOnInit() {
    this.regForm=this._formBuilder.group({
      txtNumber:['', Validators.required],
      PushID:['', Validators.required],
	    cb: [false, Validators.requiredTrue]
    })

    this.googleInitialize();

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '1084146612012271',
        cookie     : true,
        xfbml      : true,
        version    : 'v9.0'
      });
      FB.AppEvents.logPageView();   
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
     
    /*JITB*/

    this._appService.GetSkinTypes().subscribe((data: IGetSkinTypes[]) => this.GetSkinTypes = data);

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
      }
    }
    this.width = (windowSize.matches) ? 300 : 640;  // set video element width
    this.height = (windowSize.matches) ? 500 : 480; // set video element height

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
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

  public colorMap = {
    "G": '#abfb8f',
    "Y": '#fded8b',
    "R": '#fc5858',
  }

  public dataaa:any;
  public skinResultSelected:any;
  
  // public dataaa = {
  //   "outputData": {
  //       "dark_spot_percentage": 6,
  //       "uneven_skin_percentage": 62,
  //       "skin_dullness_percentage": 7,
  //       "face_wrinkle_percentage": 6,
  //       "face_firmness_percentage": 94,
  //       "Smoothness": 68,
  //       "hydration_score": 81,
  //       "skin_health_score": 74,
  //       "skin_health_score_color_code": "G",
  //       "dark_spot_percentage_color_code": "G",
  //       "uneven_skin_percentage_color_code": "R",
  //       "skin_dullness_percentage_color_code": "G",
  //       "face_wrinkle_percentage_color_code": "G",
  //       "face_firmness_percentage_color_code": "G",
  //       "Smoothness_color_code": "R",
  //       "hydration_score_color_code": "Y"
  //   },
  //   "outputImages": {
  //       "strength_image": "https://skincaredemo.orbo.ai/api/media/skincareresult/download/50ebf9d1-2929-458b-a037-d906bb26fed0sm-strength.jpg"
  //   },
  //   "priorityInfo": {
  //       "topPriorities": [
  //           {
  //               "priority_number": 1,
  //               "priority_name": "Uneven Skin Tone",
  //               "priority_score": 62,
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
  //                   "concern_write_up_A": "One of your key skin concerns is uneven skin tone. This appears as patchiness on skin and lack of lustre.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/uneven-skin-tone.png",
  //                   "how_this_is_caused_1": "Increased melanin synthesis caused by prolonged exposure to sun rays.",
  //                   "how_this_is_caused_2": "A compromised skin barrier caused by lack of hydration, especially in the case of dry skin.",
  //                   "how_this_is_caused_3": "As you are under 30, hyperpigmentation caused by acne can also be a factor.",
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //                   "what_you_need_point_1": "To help reduce uneven skin tone, you need a skincare solution that contains an active ingredient like Vitamin B3, which helps brighten skin and fade spots, along with potent plant extracts that replenish antioxidants and hydrate your skin.",
  //                   "what_you_need_point_2": null,
  //                   "solution_recommends": "Dermafique Smart Skin Advisor Recommends: The Dermafique Tone Perfecting Bio Cellulose Face Masque that helps reduce your skin concern of uneven skin tone and hydrates your dry skin. Crafted with biodegradable bio cellulose fibers, derived from 100% natural coconut water using patented technology, the Tone Perfecting Masque: ",
  //                   "solution_recommends_desc": null,
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //                   "solution_point_1": "Has powerful ingredients like Vitamin B3, well known for reducing hyperpigmentation and providing even skin tone.",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/hyaluronic-acid.png",
  //                   "solution_point_2": "Contains Hyaluronic acid, known to have a unique water retaining capacity, and is an effective hydrator for dry skin.",
  //                   "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/plant-extracts.png",
  //                   "solution_point_3": "Is infused with potent plant extracts like Chamomile flower, Grapefruit seed, Bamboo stem, Pine and aloe leaf extracts.",
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": "The thin gel-like masque adheres to every curve and contour of your face like a second skin to help it soak in the goodness of the natural extracts for longer.",
  //                   "expert_tip": "Hormonal imbalances can contribute to uneven skin tone.",
  //                   "expert_tip_desc": "To combat uneven skin tone: ",
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                   "expert_tip_point_1": "Make lifestyle changes, such as ensuring a healthy diet and adequate hydration.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                   "expert_tip_point_2": "Limit your daily sun exposure and use sunscreen regularly.",
  //                   "expert_tip_point_3_image": null,
  //                   "expert_tip_point_3": null,
  //                   "expert_tip_point_4_image": null,
  //                   "expert_tip_point_4": null,
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": "Visit a dermatologist / Gynaecologist if you also have irregular periods or accompanying hair loss."
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
  //                   "concern_write_up_A": "One of your key skin concerns is reduced smoothness. Smooth skin indicates healthy skin that feels soft to touch.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/lack-of-smoothness.png",
  //                   "how_this_is_caused_1": "Clogged pores that are not deep cleansed to remove the micro-impurities.",
  //                   "how_this_is_caused_2": "A layer of dead skin cells on the skin can also make it appear rough.",
  //                   "how_this_is_caused_3": "Skin lacking effective hydration can often seem rough and lack smoothness. ",
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/skin's-ph.png",
  //                   "what_you_need_point_1": "To help reduce uneven skin tone, you need a skincare solution that contains an active ingredient like Vitamin B3, which helps brighten skin and fade spots, along with potent plant extracts that replenish antioxidants and hydrate your skin.",
  //                   "what_you_need_point_2": "It must also contain skin-quenching ingredients that restore skin's precious moisture.",
  //                   "solution_recommends": "Dermafique Smart Skin Advisor Recommends: The Dermafique All Important Skin Toner that helps address your skin concern of reduced smoothness by cleansing pores and removing dirt particles trapped inside, restoring skin's pH balance and preparing the skin for hydration. ",
  //                   "solution_recommends_desc": "The non-drying, alcohol and paraben-free All Important Skin Toner: ",
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/cleanses-pores.png",
  //                   "solution_point_1": "Cleanses pores and purifies skin to make it smooth and radiant.",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/glycolic-acid.png",
  //                   "solution_point_2": "Is powered with Glycolic acid which is well known to exfoliate the skin to remove the dead skin cells gently.",
  //                   "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                   "solution_point_3": "Is enriched with Vitamin E and Hyaluronic Acid that are known to effectively hydrate dry skin to give it a smooth texture. ",
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": null,
  //                   "expert_tip": "To achieve smooth and healthy skin: ",
  //                   "expert_tip_desc": null,
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/anti-oxidant.png",
  //                   "expert_tip_point_1": "Eat food rich in antioxidants.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/exercise-and-sleep.png",
  //                   "expert_tip_point_2": "Get adqueate exercise and sleep.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                   "expert_tip_point_3": "Protect your skin with a sunscreen against the effects of the sun.",
  //                   "expert_tip_point_4_image": "https://www.dermafique.com/smartskinadvisor/icons/pollution.png",
  //                   "expert_tip_point_4": "Protect your skin from pollution",
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           },
  //           {
  //               "priority_number": 3,
  //               "priority_name": "Hydration Score",
  //               "priority_score": 81,
  //               "priority_color_code": "Y",
  //               "priority_title": "Hydration Score",
  //               "priority_prod_title": "Dermafique Advanced Hydration",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is lack of hydraton.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-advanced-hydration.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-advanced-hydration-thumb.png",
  //                   "product_name": "Dermafique Advanced Hydration",
  //                   "product_desc": "Deeply nourishing day cream that hydrates the skin and fights oxidative stress.",
  //                   "product_link": "https://www.nykaa.com/dermafique-advanced-hydration-50gm/p/305498?productId=305498&pps=13?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concern_write_up_A": "One of your key skin concerns is low hydration. Lack of hydration leads to reduced moisture in the skin, causing it to be less supple and plump.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/water-loss.png",
  //                   "how_this_is_caused_1": "This is usually caused by a compromised skin barrier, which results in transepidermal water loss (when water passively evaporates from the skin), especially in the case of dry skin. ",
  //                   "how_this_is_caused_2": null,
  //                   "how_this_is_caused_3": null,
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                   "what_you_need_point_1": "For hydrated and plump skin, you need humectant-rich skincare solutions that contain Vitamin E- a potent anti-oxidant and hydrating ingredients, to deeply moisturise and nourish your skin.",
  //                   "what_you_need_point_2": null,
  //                   "solution_recommends": "Dermafique Smart Skin Advisor Recommends: Dermafique Advanced Hydration, a lightweight daily cream to take care of your skin concern of lack of hydration. Powered by 10x Vitamin E*, it hydrates, nourishes and plumps the skin.",
  //                   "solution_recommends_desc": null,
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/absorbs-and-penetrates.png",
  //                   "solution_point_1": "It absorbs quickly and penetrates deep, providing smooth, soft and luminous skin.",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/hydration.png",
  //                   "solution_point_2": "It locks in hydration and repairs the oxidative damage caused by free radicals.                     ",
  //                   "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/boosts-suppleness.png",
  //                   "solution_point_3": "Boosts suppleness of skin.",
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": null,
  //                   "expert_tip": "To restore moisture to your skin:",
  //                   "expert_tip_desc": null,
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/drink-plenty-of-water.png",
  //                   "expert_tip_point_1": "Drink plenty of water.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/limit-coffee-alcohol.png",
  //                   "expert_tip_point_2": "Limit your consumption of coffee and alcohol.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                   "expert_tip_point_3": "Maintain a healthy diet that includes fruits and vegetables with high water content such as cucumber, watermelon, zucchini and gourds.",
  //                   "expert_tip_point_4_image": "https://www.dermafique.com/smartskinadvisor/icons/sun-protection.png",
  //                   "expert_tip_point_4": "Use sun protection daily.",
  //                   "expert_tip_point_5_image": "https://www.dermafique.com/smartskinadvisor/icons/meditative-techniques.png",
  //                   "expert_tip_point_5": "Try to reduce stress by adopting some meditative techniques.",
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           },
  //           {
  //               "priority_number": 4,
  //               "priority_name": "Dullness",
  //               "priority_score": 7,
  //               "priority_color_code": "G",
  //               "priority_title": "Dullness",
  //               "priority_prod_title": "Aqua Cloud Hydrating Crème",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is dullness.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/aqua-cloud-hydrating-creme.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-aqua-cloud-hydrating-creme-thumb.png",
  //                   "product_name": "Aqua Cloud Hydrating Crème",
  //                   "product_desc": "Hydrating crème that nourishes and repairs environmentally-stressed skin.",
  //                   "product_link": "https://www.nykaa.com/dermafique-aqua-cloud-hydrating-cr-me/p/512911?productId=512911&pps=2?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concern_write_up_A": "One of your key skin concerns is dullness, which indicates that your skin lacks radiance.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/skin-dullness.png",
  //                   "how_this_is_caused_1": "A buildup of dead skin cells.",
  //                   "how_this_is_caused_2": "Reduced luminosity due to skin dryness and a slow turnover rate of new cells.",
  //                   "how_this_is_caused_3": "Skin dryness that causes reduced ability to bind and retain water.",
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/antioxidants.png",
  //                   "what_you_need_point_1": "To revive your skin's radiance, you need a skincare solution that deeply hydrates your skin, and contains potent ingredients like antioxidants, which can repair cellular damage and restore the glow.",
  //                   "what_you_need_point_2": null,
  //                   "solution_recommends": "Dermafique's Smart Skin Advisor Recommends: Dermafique Aqua Cloud Hydrating Crème that helps address your skin concern of dullness by hydrating, nourishing & giving your skin a glow.",
  //                   "solution_recommends_desc": "This lightweight yet deeply hydrating cream:",
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/seaweed.png",
  //                   "solution_point_1": "Is infused with Sea Weed Extracts, which are a rich source of vitamins, & minerals known for hydrating & brightening the skin.",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e-and-vitamin-b5.png",
  //                   "solution_point_2": "Powered with antioxidants like Vitamin E and Vitamin B5 that are well known to repair skin damage and reduce skin dullness. ",
  //                   "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/prevents-water-loss.png",
  //                   "solution_point_3": "Fortifies the skin barrier and prevents transepidermal water loss from the skin.",
  //                   "solution_point_4_image": "https://www.dermafique.com/smartskinadvisor/icons/whipped-texture.png",
  //                   "solution_point_4": "Is an absolute delight to apply as its whipped texture melts into your skin to give you a weightless & velvety experience. ",
  //                   "solution_concluding_paragraph": null,
  //                   "expert_tip": "To prevent and reduce dullness:",
  //                   "expert_tip_desc": null,
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                   "expert_tip_point_1": "Ensure a healthy diet, rich in antioxidants and vitamins.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/hydration.png",
  //                   "expert_tip_point_2": "Have ample hydration through the day to boost the glow on your skin.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/facial-self-massages.png",
  //                   "expert_tip_point_3": "Do regular facial self massages, yoga and exercises to improve blood circulation.",
  //                   "expert_tip_point_4_image": "https://www.dermafique.com/smartskinadvisor/icons/sleep.png",
  //                   "expert_tip_point_4": "Get adequate sleep to help cell renewal.",
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           },
  //           {
  //               "priority_number": 5,
  //               "priority_name": "Firmness",
  //               "priority_score": 94,
  //               "priority_color_code": "G",
  //               "priority_title": "Firmness",
  //               "priority_prod_title": "Advanced Repair",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is lack of firmness. ",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/advanced-repair.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-advanced-repair-thumb.png",
  //                   "product_name": "Advanced Repair",
  //                   "product_desc": "Fortifying and nourishing night cream that promotes cell renewal and helps your skin regain its plumpness. ",
  //                   "product_link": "https://www.nykaa.com/dermafique-advanced-repair-50gm/p/305499?productId=305499&pps=19?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concern_write_up_A": "One of your key skin concerns is lack of firmness. This means that your skin is losing elasticity, and is craving hydration in order to maintain suppleness. ",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/lack-of-firmness.png",
  //                   "how_this_is_caused_1": "Lack of firmness occurs due to loss of collagen and elastin as well as moisture loss.",
  //                   "how_this_is_caused_2": null,
  //                   "how_this_is_caused_3": null,
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/firm-healthy-skin.png",
  //                   "what_you_need_point_1": "To improve the firmness of your skin, you need a skincare solution that contains antioxidants that prevent collagen breakdown and repair skin damage.",
  //                   "what_you_need_point_2": "It also needs to boost essential ceramides (skin's natural oils) to fortify your skin.",
  //                   "solution_recommends": "Dermafique Smart Skin Advisor Recommends: Dermafique Advanced Repair, a fortifying nourishing moisturizer that helps address your skin concern of lack of firmness by delivering intense hydration, and giving the skin's its natural bounce.",
  //                   "solution_recommends_desc": null,
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/anti-oxidant.png",
  //                   "solution_point_1": "Powered with 'Dermarefine Complex' that replenishes antioxidants.",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/prevents-collagen-breakdown.png",
  //                   "solution_point_2": "Boosts Ceramide Synthesis and prevents collagen breakdown through Niacinamide action on skin cells.",
  //                   "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/niacinamide-and-shea-butter.png",
  //                   "solution_point_3": "It hydrates the skin and makes it supple as it is powered by Pro Vitamin E, Niacinamide and Shea Butter.",
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": null,
  //                   "expert_tip": "For firm, healthy skin:",
  //                   "expert_tip_desc": null,
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/diet-rich-fruits-vegetables.png",
  //                   "expert_tip_point_1": "Ensure diet rich in green, red and orange fruits & vegetables to get a plethora of antioxidants.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/protein.png",
  //                   "expert_tip_point_2": "Have adequate protein to repair the skin and keep aging processes at bay.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/sleep.png",
  //                   "expert_tip_point_3": "Ensure you get at least 7 hours of sleep at night.",
  //                   "expert_tip_point_4_image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //                   "expert_tip_point_4": "Protect your skin with a sunscreen against the effects of the sun.",
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           },
  //           {
  //               "priority_number": 6,
  //               "priority_name": "Fine Lines & wrinkle",
  //               "priority_score": 6,
  //               "priority_color_code": "G",
  //               "priority_title": "Fine Lines & wrinkle",
  //               "priority_prod_title": "Dermafique Age Defying Serum",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is fine lines and wrinkles.",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-serum.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-age-defying-serum-thumb.png",
  //                   "product_name": "Dermafique Age Defying Serum",
  //                   "product_desc": "Anti-ageing serum that boosts cell renewal and regeneration of collagen.",
  //                   "product_link": "https://www.nykaa.com/dermafique-age-defying-serum-50gm/p/305503?productId=305503&pps=11?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concern_write_up_A": "One of your key skin concerns is fine lines and wrinkles. These start at a cellular level as early as your mid/late twenties, and can be more prominent on dry skin due to lack of hydration.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/wrinkles.png",
  //                   "how_this_is_caused_1": "Slow down of the cell regeneration process.",
  //                   "how_this_is_caused_2": "Reduced collagen and elasticity.",
  //                   "how_this_is_caused_3": null,
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/humectants.png",
  //                   "what_you_need_point_1": "To reduce the appearance of fine lines, you need a skincare solution that is powered with plant stem cell extracts known to regenerate cells, along with potent anti-ageing actives that boost skin's renewal.",
  //                   "what_you_need_point_2": "To relieve skin dryness, your product must also contain humectants that help with hydration and plumping. ",
  //                   "solution_recommends": "Dermafique's Smart Skin Advisor Recommends: The Dermafique Age Defying Serum reduces fine lines and wrinkles by boosting your skin's regenerative power, for firmer skin, post just 4 weeks of use.",
  //                   "solution_recommends_desc": "This serum is: ",
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/plant-stem-cell-extract.png",
  //                   "solution_point_1": "Formulated with PhytoCellTecTM technology containing plant stem cell extracts, which boost cellular activity and help regenerate skin cells. ",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-e.png",
  //                   "solution_point_2": "Powered with antioxidants like Vitamin E, and humectants, which hydrate and relieve dryness.",
  //                   "solution_point_3_image": null,
  //                   "solution_point_3": null,
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": "It is clinically proven to visibly reduce wrinkles, pigmentation, for even-toned, younger-looking skin, basis a consumer study",
  //                   "expert_tip": "Fine lines and wrinkles are a natural part of ageing. You can delay the same by:",
  //                   "expert_tip_desc": null,
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/well-hydrated.png",
  //                   "expert_tip_point_1": "Staying well-hydrated.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //                   "expert_tip_point_2": "Eating a healthy diet with vitamins, minerals, and antioxidants.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/yoga-and-meditation.png",
  //                   "expert_tip_point_3": "Reducing stress by yoga and meditation, might also aid in ageing well.",
  //                   "expert_tip_point_4_image": null,
  //                   "expert_tip_point_4": null,
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           },
  //           {
  //               "priority_number": 7,
  //               "priority_name": "Dark Spots",
  //               "priority_score": 6,
  //               "priority_color_code": "G",
  //               "priority_title": "Dark Spots",
  //               "priority_prod_title": "Dermafique Soleil All Matte Sunscreen SPF 50 ",
  //               "priority_product_info": {
  //                   "skin_analysis_report": "Your key skin concern is dark spots. ",
  //                   "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-soleil-all-matte-sunscreen-spf-50.png",
  //                   "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-soleil-all-matte-sunscreen-spf-50-thumb.png",
  //                   "product_name": "Dermafique Soleil All Matte Sunscreen SPF 50 ",
  //                   "product_desc": "Matte finish non-sticky, lightweight formula designed specifically for hot and humid climates.",
  //                   "product_link": "https://www.nykaa.com/dermafique-soleil-defense-all-matte-full-light-spf-50-50gm/p/627390?productId=627390&pps=10?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //                   "concern_write_up_A": "One of your key skin concerns is dark spots, which occur when some areas of the skin produce more melanin than others.",
  //                   "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/dark-spots.png",
  //                   "how_this_is_caused_1": "An increase in melanin in some parts of the skin.",
  //                   "how_this_is_caused_2": "Exposure to the harmful rays of sun including UV Rays, Infrared Rays and Visible Light.",
  //                   "how_this_is_caused_3": null,
  //                   "how_this_is_caused_4": null,
  //                   "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/sunlight.png",
  //                   "what_you_need_point_1": "To solve for dark spots, you need to use a sunscreen that targets the Full Sun Spectrum, along with an SPF of 30 or higher even on days when the sun isn't too bright as well as indoors.",
  //                   "what_you_need_point_2": "Your sunscreen also needs to be lightweight, yet hydrating enough to meet your skin's hydration needs. ",
  //                   "solution_recommends": "Dermafique Smart Skin Advisor Recommends: The Dermafique All Matte SPF 50, a mattifying sunscreen that will help address your skin concern of dark spots. Powered with Full Light Technology, it targets not just UV rays, but 360° Sun Spectrum including Infrared Rays and Visible Light. It also helps protects from tanning, photo-ageing and persistent pigmentation. ",
  //                   "solution_recommends_desc": "Soleil Defense All Matte SPF 50 has:",
  //                   "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/absorbs-and-penetrates.png",
  //                   "solution_point_1": "A quick absorbing formula that is comfortable to wear on an everyday basis.  ",
  //                   "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/licorice-extracts-and-niacinamide.png",
  //                   "solution_point_2": "Is enriched with potent ingredients like Licorice extracts and Niacinamide, which have antioxidant and anti-inflammatory benefits, and are known to effectively fade away dark spots.",
  //                   "solution_point_3_image": null,
  //                   "solution_point_3": null,
  //                   "solution_point_4_image": null,
  //                   "solution_point_4": null,
  //                   "solution_concluding_paragraph": null,
  //                   "expert_tip": "Dark spots can occur due to sun damage and also hormonal changes amongst other factors.",
  //                   "expert_tip_desc": "To reduce and prevent dark spots:",
  //                   "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/sunlight.png",
  //                   "expert_tip_point_1": "Protect from intense sunlight.",
  //                   "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-rich.png",
  //                   "expert_tip_point_2": "Include a vitamin rich diet for healthy skin.",
  //                   "expert_tip_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/full-sun-spectrum.png",
  //                   "expert_tip_point_3": "Include broad spectrum sunscreens and antioxidants in your skincare routine.",
  //                   "expert_tip_point_4_image": null,
  //                   "expert_tip_point_4": null,
  //                   "expert_tip_point_5_image": null,
  //                   "expert_tip_point_5": null,
  //                   "expert_tip_concluding_paragraph": null
  //               }
  //           }
  //       ],
  //       "topPrioritiesSeleted": {
  //         "priority_number": 1,
  //         "priority_name": "Uneven Skin Tone",
  //         "priority_score": 62,
  //         "priority_color_code": "R",
  //         "priority_title": "Uneven Skin Tone",
  //         "priority_prod_title": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //         "priority_product_info": {
  //             "skin_analysis_report": "Your key skin concern is uneven skin tone.",
  //             "product_image": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque.png",
  //             "product_image_thumbnail": "https://www.dermafique.com/smartskinadvisor/products/dermafique-tone-perfecting-bio-cellulose-face-masque-thumb.png",
  //             "product_name": "Dermafique Tone Perfecting Bio Cellulose Face Masque",
  //             "product_desc": "Bio cellulose mask that continually soaks in the formulation that helps reduce uneven skin tone.",
  //             "product_link": "https://www.nykaa.com/dermafique-bio-cellulose-tone-perfecting-face-mask/p/958791?productId=958791&pps=7?utm_source=social media&utm_medium=banner ad&utm_campaign=dermafique dec 21",
  //             "concern_write_up_A": "One of your key skin concerns is uneven skin tone. This appears as patchiness on skin and lack of lustre.",
  //             "how_this_is_caused_image": "https://www.dermafique.com/smartskinadvisor/icons/uneven-skin-tone.png",
  //             "how_this_is_caused_1": "Increased melanin synthesis caused by prolonged exposure to sun rays.",
  //             "how_this_is_caused_2": "A compromised skin barrier caused by lack of hydration, especially in the case of dry skin.",
  //             "how_this_is_caused_3": "As you are under 30, hyperpigmentation caused by acne can also be a factor.",
  //             "how_this_is_caused_4": null,
  //             "what_you_need_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //             "what_you_need_point_1": "To help reduce uneven skin tone, you need a skincare solution that contains an active ingredient like Vitamin B3, which helps brighten skin and fade spots, along with potent plant extracts that replenish antioxidants and hydrate your skin.",
  //             "what_you_need_point_2": null,
  //             "solution_recommends": "Dermafique Smart Skin Advisor Recommends: The Dermafique Tone Perfecting Bio Cellulose Face Masque that helps reduce your skin concern of uneven skin tone and hydrates your dry skin. Crafted with biodegradable bio cellulose fibers, derived from 100% natural coconut water using patented technology, the Tone Perfecting Masque: ",
  //             "solution_recommends_desc": null,
  //             "solution_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/vitamin-b3.png",
  //             "solution_point_1": "Has powerful ingredients like Vitamin B3, well known for reducing hyperpigmentation and providing even skin tone.",
  //             "solution_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/hyaluronic-acid.png",
  //             "solution_point_2": "Contains Hyaluronic acid, known to have a unique water retaining capacity, and is an effective hydrator for dry skin.",
  //             "solution_point_3_image": "https://www.dermafique.com/smartskinadvisor/icons/plant-extracts.png",
  //             "solution_point_3": "Is infused with potent plant extracts like Chamomile flower, Grapefruit seed, Bamboo stem, Pine and aloe leaf extracts.",
  //             "solution_point_4_image": null,
  //             "solution_point_4": null,
  //             "solution_concluding_paragraph": "The thin gel-like masque adheres to every curve and contour of your face like a second skin to help it soak in the goodness of the natural extracts for longer.",
  //             "expert_tip": "Hormonal imbalances can contribute to uneven skin tone.",
  //             "expert_tip_desc": "To combat uneven skin tone: ",
  //             "expert_tip_point_1_image": "https://www.dermafique.com/smartskinadvisor/icons/healthy-diet.png",
  //             "expert_tip_point_1": "Make lifestyle changes, such as ensuring a healthy diet and adequate hydration.",
  //             "expert_tip_point_2_image": "https://www.dermafique.com/smartskinadvisor/icons/sunscreen.png",
  //             "expert_tip_point_2": "Limit your daily sun exposure and use sunscreen regularly.",
  //             "expert_tip_point_3_image": null,
  //             "expert_tip_point_3": null,
  //             "expert_tip_point_4_image": null,
  //             "expert_tip_point_4": null,
  //             "expert_tip_point_5_image": null,
  //             "expert_tip_point_5": null,
  //             "expert_tip_concluding_paragraph": "Visit a dermatologist / Gynaecologist if you also have irregular periods or accompanying hair loss."
  //         }
  //     },
  //       "strengths": [
  //           {
  //               "strength_number": 1,
  //               "strength_name": "Dark Spots",
  //               "strength_score": 6,
  //               "strength_title": "Dark Spots"
  //           }
  //       ],
  //       "skinCareRoutines": [
  //           {
  //               "routine_number": 1,
  //               "routine_prod_title": "Aquaquench Cleansing Mousse"
  //           },
  //           {
  //               "routine_number": 2,
  //               "routine_prod_title": "Toner"
  //           }
  //       ]
  //   }
  // };

  // public dataaa:any = {"id":"61c6f0319c82b100256f6679","outputData":{ "oxygen_score":68,"dark_circle_percentage":5,"dark_spot_percentage":6,"acne_percentage":4,"uneven_skin_percentage":64,"skin_dullness_percentage":11,"face_wrinkle_percentage":18,"crowsfeet_percentage":4,"eye_wrinkle_percentage":4,"face_firmness_percentage":82,"Smoothness":56,"hydration_score":67,"skin_health_score":67},"outputImages":{"acne_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-acne-sm.jpeg","face_wrinkle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-facewrinkle-sm.jpeg","eye_wrinkle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-eyewrinkle-sm.jpeg","crowsfeet_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-crowsfeet-sm.jpeg","skin_dullness_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dullness-sm.jpeg","uneven_skin_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-uneven-sm.jpeg","dark_spot_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dspot-sm.jpeg","dark_circle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dcircle-sm.jpeg","strength_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-strength.jpg"},"start_test":"yes","name":"","email":"","mobile":"9028272356","gender":"female","age":"20","skin_type":"5fb651ddccc0b45b856842b1","location":"Mumbai"};

  callApi() {
    this.code = '';
    this.message = 'Loading...';
	  document.getElementById("analysing").style.display = "block";
    this._appService.checkSkin(this.imgFile, this.selectedSkin, this.selectedAge).subscribe((res: any) => {
      this.code = 'SUCCESSFUL';
      this.dataaa = res;
      this.apiId = this.dataaa.id;
      this.skinResultSelected = this.dataaa.priorityInfo.topPriorities[0];
      this.message = JSON.stringify(res);
	    this.slide6Show = false;
      this.slideLogin = true;
    },
      (err: HttpErrorResponse) => {
        console.log(err.error && err.error.error && err.error.error.message);
        this.code = err.error && err.error.error && err.error.error.code;
        this.message = err.error && err.error.error && err.error.error.message;
		    document.getElementById("analysing").style.display = "none";
      });
  }

  getOnboardingData(data: SlidesOutputData) {
    const { startPosition } = data;
    this.onboardinActiveSlide = startPosition
  }

  getGenderData(data: SlidesOutputData) {
    const { slides } = data;
    this.selectedGender = slides[0].id;
    console.log(this.selectedGender);
  }

  getAgeData(data: SlidesOutputData) {
    const { slides } = data;
    this.selectedAge = slides[0].id;
    console.log(this.selectedAge);
  }

  getSkinData(data: SlidesOutputData) {
    const { slides } = data;
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
}

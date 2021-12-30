import { Component, OnInit, OnChanges, ChangeDetectorRef, HostListener, ViewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Subject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { IGetResult } from './GetResult';
import { IGetResultNew } from './GetResultNew';
import { IGetSkinTypes } from './GetSkinTypes';
import { ViewChild, ElementRef } from '@angular/core'
import { KeyValuePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; 
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';

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

  // @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  
  @ViewChild('loginRef', {static: false }) loginRef: ElementRef;
  /*@ViewChild('loginRef', {static: true }) loginElement: ElementRef;*/
	
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;

  @ViewChild('ageSliderRef', { static: false }) ageSliderRef: CarouselComponent;

  isElementXPercentInViewport = (el: any, percentVisible: any) => {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  @ViewChild('scrollRecommendationIntoViewRef', { static: false }) private scrollRecommendationIntoViewRef: ElementRef<HTMLDivElement>;
  @ViewChild('scrollAnalysisIntoViewRef', { static: false }) private scrollAnalysisIntoViewRef: ElementRef<HTMLDivElement>;
  isRecommendationScrolledIntoView = false;
  isRecommendationAlreadyRendered = false;
  isAnalysisScrolledIntoView = false;
  isAnalysisAlreadyRendered = false;

  @HostListener('window:scroll', [])
  isScrolledIntoView(){
    if (this.scrollRecommendationIntoViewRef) {
      const el = this.scrollRecommendationIntoViewRef.nativeElement;
      // .getBoundingClientRect();
      this.isRecommendationScrolledIntoView = this.isElementXPercentInViewport(el, 10);
      if(this.isRecommendationScrolledIntoView && !this.isRecommendationAlreadyRendered) {
        this.isRecommendationAlreadyRendered = true;
      }
      // const topShown = rect.top >= 0;
      // const bottomShown = rect.bottom <= window.innerHeight;
      // this.isRecommendationScrolledIntoView = topShown && bottomShown;
      // console.log(this.isRecommendationScrolledIntoView);
    }
    if (this.scrollAnalysisIntoViewRef) {
      const el = this.scrollAnalysisIntoViewRef.nativeElement;
      // .getBoundingClientRect();
      this.isAnalysisScrolledIntoView = this.isElementXPercentInViewport(el, 10);
      if(this.isAnalysisScrolledIntoView && !this.isAnalysisAlreadyRendered) {
        this.isAnalysisAlreadyRendered = true;
      }
      // const topShown = rect.top >= 0;
      // const bottomShown = rect.bottom <= window.innerHeight;
      // this.isAnalysisScrolledIntoView = topShown && bottomShown;
      // console.log(this.isAnalysisScrolledIntoView);
    }
  }
  
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
  selectedAge: string = '35';
  selectedGender = "female";
  apiId:any;
  LoginEmail = "";
  LoginName = "";
  checked=false;
  onboardinActiveSlide = 0;
  // defaultAgeArray = Array.from({length: 50}, (_, i) => i < 9 ? '0' + (i + 1) : i + 1);
  defaultAgeArray = Array.from({ length: 75 - 12 + 1 }, (_, i) => 12 + i);
  
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
    // this.changeDetector.detectChanges();
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
  
  public thankYouForm:FormGroup;
  public txtThankYouNumber:FormControl;
  public txtThankYouEmail:FormControl;

  constructor(
    private _appService: AppService, 
    private _formBuilder: FormBuilder, 
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef
  ) { }

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
    this.regForm = this._formBuilder.group({
      txtNumber:['', Validators.required],
      PushID:['', Validators.required],
	    cb: [false, Validators.requiredTrue],
    })

    this.regForm = this._formBuilder.group({
      txtThankYouNumber: ['', Validators.required],
      txtThankYouEmail: ['', Validators.required],
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
  public activeResultTab:string;
  public showRestTabs = false;

  ActiveTab(event: any, activeTabText: string, scrollToElem = undefined) {
    const { priorityInfo: { topPriorities } } = this.dataaa;
    if(this.activeResultTab !== activeTabText) {
      this.skinResultSelected = topPriorities.find(tp => tp.priority_name === activeTabText);
      this.activeResultTab = activeTabText;
      if(scrollToElem !== undefined) {
        scrollToElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  ShowRestTabFn() {
    this.showRestTabs = !this.showRestTabs
  }

  public showAnalyseVideo = false;
  
  callApi() {
    this.code = '';
    this.message = 'Loading...';
	  // document.getElementById("analysing").style.display = "block";
    this.showAnalyseVideo = true;
    this._appService.checkSkin(this.imgFile, this.selectedSkin, this.selectedAge).subscribe((res: any) => {
      this.code = 'SUCCESSFUL';
      this.dataaa = res;
      this.apiId = this.dataaa.id;
      this.skinResultSelected = this.dataaa.priorityInfo.topPriorities[0];
      this.activeResultTab = this.skinResultSelected.priority_name;
      this.message = JSON.stringify(res);
      this.showSlide7();
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

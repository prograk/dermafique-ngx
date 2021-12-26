import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Subject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { IGetResult } from './GetResult';
import { IGetSkinTypes } from './GetSkinTypes';
import { ViewChild, ElementRef } from '@angular/core'
import { KeyValuePipe } from '@angular/common';
import {jsPDF} from 'jspdf';
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
  selectedSkin = "Oily Skin";
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

  public dataaa = null as IGetResult;

  // public dataaa:any = {"id":"61c6f0319c82b100256f6679","outputData":{ "oxygen_score":68,"dark_circle_percentage":5,"dark_spot_percentage":6,"acne_percentage":4,"uneven_skin_percentage":64,"skin_dullness_percentage":11,"face_wrinkle_percentage":18,"crowsfeet_percentage":4,"eye_wrinkle_percentage":4,"face_firmness_percentage":82,"Smoothness":56,"hydration_score":67,"skin_health_score":67},"outputImages":{"acne_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-acne-sm.jpeg","face_wrinkle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-facewrinkle-sm.jpeg","eye_wrinkle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-eyewrinkle-sm.jpeg","crowsfeet_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-crowsfeet-sm.jpeg","skin_dullness_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dullness-sm.jpeg","uneven_skin_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-uneven-sm.jpeg","dark_spot_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dspot-sm.jpeg","dark_circle_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-dcircle-sm.jpeg","strength_image":"https://sandbox.scderma.orbo.tech/api/media/skincaredermafiqresult/download/f6150a09-c878-418c-a16c-2f9b37a5d8besm-strength.jpg"},"start_test":"yes","name":"","email":"","mobile":"9028272356","gender":"female","age":"20","skin_type":"5fb651ddccc0b45b856842b1","location":"Mumbai"};

  callApi() {
    this.code = '';
    this.message = 'Loading...';
	  document.getElementById("analysing").style.display = "block";
    this._appService.checkSkin(this.imgFile).subscribe((res: any) => {
      this.code = 'SUCCESSFUL';
      this.dataaa = res;
      this.apiId = this.dataaa.id;      
      this.message = JSON.stringify(res);
	    this.slide6Show = false;
      this.slideLogin = true;
    },
      (err: HttpErrorResponse) => {
        console.log(err.error.error.message);
        this.code = err.error.error.code;
        this.message = err.error.error.message;
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

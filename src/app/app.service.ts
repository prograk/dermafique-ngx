import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetResult } from './GetResult';
import { IGetSkinTypes } from './GetSkinTypes';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  // readonly rootUrl = 'https://sandbox.scderma.orbo.tech/api';
  // readonly clientKey = 'ngpfRN7dJXT2EEmxrVAPXF7a0JKQoOiQxLbdzLfJBIDMu3hoqKKvgrBNO9k53ruv';

  readonly rootUrl = 'https://skincaredemo.orbo.ai/api';
  readonly pdfSendUrl = 'https://smartskinadvisor.com/api/sendmail.php';
  readonly clientKey = 'IOS9B6E7369D7D0CCE2002101AA32CD5EA4078A182CF491C7452487195B801D63E7';

  // readonly rootUrl = 'https://smartskinadvisor.orbo.tech/api';
  // readonly clientKey = 'IOS9B6E7369D7D0CCE2002101AA32CD5EA4078A182CF491C7452487195B801D63E7';

  constructor(private _http: HttpClient) { }

  checkSkin(image, skinType, age): Observable<IGetResult[]> {
    const form = new FormData();
    form.append('image', image, image.name);
    form.append('skinType', skinType);
    form.append('age', age);
    const options = {
      reportProgress: true
    };
    // return this._http.post<IGetResult[]>(this.rootUrl + '/media/skincaredermafiq/upload?clientkey=' + this.clientKey, form, options);
    return this._http.post<any[]>(this.rootUrl + '/media/skinanalysis/upload?clientkey=' + this.clientKey, form, options);
  }

  public GetSkinTypes() : Observable<IGetSkinTypes[]> {
      return this._http.get<IGetSkinTypes[]>(this.rootUrl + '/skintypes?clientkey=' + this.clientKey);
  }

  public SignInApp(id, age, Mobile, skinType, gender, email, name): Observable<any> {
    const options = {
      reportProgress: true
    };
    return this._http.patch<any>(this.rootUrl + '/memberlogs/'+ id +'?clientkey=' + this.clientKey, {
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

  public sendPdf(name, mobile, email, pdf): Observable<any> {
    const options = {
      reportProgress: true
    };
    return this._http.post<any>(this.pdfSendUrl, {
      name, mobile, email, pdf
    }, options);
  }
}
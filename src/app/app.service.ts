import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetResult } from './GetResult';
import { IGetSkinTypes } from './GetSkinTypes';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  readonly rootUrl = 'https://sandbox.scderma.orbo.tech/api';
  // readonly rootUrl = 'https://skincaredemo.orbo.ai/api';
  readonly clientKey = 'ngpfRN7dJXT2EEmxrVAPXF7a0JKQoOiQxLbdzLfJBIDMu3hoqKKvgrBNO9k53ruv';

  constructor(private _http: HttpClient) { }

  checkSkin(image): Observable<IGetResult[]> {
    const form = new FormData();
    form.append('image', image);
    const options = {
      reportProgress: true
    };
    return this._http.post<IGetResult[]>(this.rootUrl + '/media/skincaredermafiq/upload?clientkey=' + this.clientKey, form, options);
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
      location: "Mumbai" 
    }, options);
  }
}
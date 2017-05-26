import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http'
import {userLoginReq, UserLoginRes, loginObj} from '../models/user'
import { Observable } from							'rxjs/Observable';
import												'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private logedStatus = false;
  
  localServerUrl:string  = 'http://localhost:3012';

  constructor(private http: Http) { }

  login(loginRequestData: userLoginReq) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(
            this.localServerUrl + '/user/login',
            JSON.stringify(loginRequestData),
            {headers})
      .map((response: any) => {
       return response;
      })
  }

}

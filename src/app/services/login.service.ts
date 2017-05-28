import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http'
import {userLoginReq, UserLoginRes, loginObj} from '../models/user'
import { Observable } from							'rxjs/Observable';
import												'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private logedStatus: boolean = false;
   private userInfo: any;


  localServerUrl:string  = 'http://localhost:3012';

  constructor(private http: Http) { }



  getUser() {
    return this.userInfo;
  }

  login(loginRequestData: userLoginReq) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
            this.localServerUrl + '/user/login',
            JSON.stringify(loginRequestData),
            {headers})
      .map((response: Response) => {
        this.userInfo = response.json();
        console.log(this.userInfo);
      });
  };
  register(registerRequestData: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.localServerUrl + '/user/registration',
      JSON.stringify(registerRequestData),
      {headers}).map((response: any) => {
        return response;
      })
  }

}

import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http'
import {userLoginReq, UserLoginRes} from '../models/user'
import { Observable } from							'rxjs/Observable';
import												'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private logedStatus = false;
  
  localServerUrl:string  = 'http://localhost:3012';

  constructor(private http: Http) { }

  login(loginReqData: userLoginReq) {
    let headers = new Headers();
    return this.http.post(this.localServerUrl + '/users', {headers})
      .map((response: Response) => response.json())
      .map((response: UserLoginRes) => {
        if(response && response.data && response.data.code === 200) {
          console.log(1);
          return response.data.user
        } else {
          console.log(2);
          return null
        }
      })
      .map((user: any)=> {
          if(!user) return 'login failed';
          console.log(3);
          
          localStorage.setItem('user', JSON.stringify(user));
          this.logedStatus = true;
          return user
          
      });
  }

}

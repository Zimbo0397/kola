import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {

 
  private tittle: string;
  private userLoginData: any = {
    usermail: "string",
    userpass: "string"
  };
  constructor(
    private loginserv: LoginService) {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    this.login(f.value);
  }
  login(userLoginData) {
    this.loginserv.login(userLoginData).subscribe((response: any) => {
      this.tittle = JSON.stringify(JSON.parse(response._body)[0]);
      console.log(JSON.stringify(userLoginData));
    });
  }
}

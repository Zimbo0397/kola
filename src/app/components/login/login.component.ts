import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  private userLoginData: any; 
 

  constructor(private loginserv: LoginService) { }


  onSubmitLogin(f: NgForm) {
    this.login(f.value);
  }
  login(userLoginData) {
    this.loginserv.login(userLoginData).subscribe((response) => {
      
    })
  }

}

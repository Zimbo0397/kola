import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './services/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {


  userName: any;

  constructor(private LoginServ: LoginService) {
  }

  ngOnInit() {
    this.userName = this.LoginServ.getUser();
  }

  getUser() {
    this.userName = this.LoginServ.getUser();
    this.LoginServ.getUser();
    console.log(this.userName);
  }

}

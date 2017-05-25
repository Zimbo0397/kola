import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {


  constructor(
    private loginserv: LoginService) {
  }
  title = this.loginserv.login({email: 'zimbo222@mail.ru', password: '05555'});
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  private userRegisterData: any;
  private registerStatus: any;

  constructor(private loginserv: LoginService) { }

  ngOnInit() {
  }

  onSubmitRegistration(r: NgForm) {
    this.register(r.value);
  }


  register(userRegisterData) {
    this.loginserv.register(userRegisterData).subscribe((response: any) => {
      this.registerStatus = response._body;
        switch(response._body) {
          case 'emailError' : 
            this.registerStatus = "Такой Email уже зарегестрирыван в системе попробуйте другой"
            break
          case 'systemNameError' : 
            this.registerStatus = "Такоe Имя пользователя  уже зарегестрирывано в системе попробуйте другое"
            break
          case 'true' : 
            this.registerStatus = "Вы успешно зарегестрирывались в системе"
            break
        }
    })
  }

}

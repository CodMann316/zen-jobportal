import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:' <app-signup-seeker></app-signup-seeker>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'jobportal';
  isLoggedIn=false;
  
  constructor(private coockie: CookieService, private loginService: LoginService) {
    this.isLoggedIn= loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
  }

}

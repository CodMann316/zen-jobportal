import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:' <app-signup-seeker></app-signup-seeker>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  title = 'jobportal';
  isLoggedIn = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private coockie: CookieService, private loginService: LoginService) {
    this.isLoggedIn = loginService.isLoggedIn();
  }
  ngOnInit(): void {
   
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }






  


}

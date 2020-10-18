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

  isRouterActivated:boolean=false;

  title = 'jobportal';
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private coockie: CookieService, private loginService: LoginService) {
    loginService.isLoggedIn();
  }
  ngOnInit(): void {
   
  }


  isLoggedIn():boolean{
    console.log(this.loginService.isLoggedIn())
    
    return this.loginService.isLoggedIn();
  }

  getUserName(){
    return this.loginService.getUserName();
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }






  


}

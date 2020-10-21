import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SeekerProfileComponent } from './profile/seeker-profile/seeker-profile.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isRouterActivated: boolean = false;
  editProfile:SeekerProfileComponent=new SeekerProfileComponent(); 
  title = 'jobportal';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private cookie: CookieService, private loginService: LoginService) {
    loginService.isLoggedIn();
  }
  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    console.log(this.loginService.isLoggedIn())

    return this.loginService.isLoggedIn();
  }

  getUserName() {
    return this.loginService.getUserName();
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }

  goToDashboard() {
    if (this.loginService.getUserType().match('seeker'))
      return '/seekerDashboard'
    else
      return '/employerDashboard'
}

editUserProfile(){
  this.editProfile.open();
}






}

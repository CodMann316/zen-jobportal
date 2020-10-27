import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { EmployerProfileComponent } from './profile/employer-profile/employer-profile.component';
import { SeekerProfileComponent } from './profile/seeker-profile/seeker-profile.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isRouterActivated: boolean = false;
  editProfile: SeekerProfileComponent;
  editEmployerProfile: EmployerProfileComponent;

  title = 'jobportal';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private cookie: CookieService, private loginService: LoginService) {
    loginService.isLoggedIn();
    if (loginService.isEmployer()){
      console.log('Employer Profile INIT')
      this.editEmployerProfile = new EmployerProfileComponent(loginService);
    }
    else{
      console.log('Seeker Profile INIT')
      this.editProfile = new SeekerProfileComponent(loginService);
    }
  }
  ngOnInit(): void {
  }

  isLoggedIn(): boolean {

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

  editUserProfile() {

    if (this.loginService.isEmployer()){
      console.log("employer profile")
      this.editEmployerProfile.open();
    }
    else{
      this.editProfile.open();
      console.log("Seeker profile")
    }
  }






}

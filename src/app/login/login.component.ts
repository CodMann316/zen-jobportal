import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(
    private service: LoginService,
    private cookie: CookieService,
    private router:Router) { }

  msg = 'User IS ' + this.cookie.get('userName')

  login() {

    
    this.service.validateUser(this.user).subscribe(
      data => {
        this.cookie.set("userName", data.userName)
        this.cookie.set("type", data.type)
        window.location.reload();
        this.router.navigate(['']);
        
      },
      error => {
        alert('invalid credentials, please try again')
      }
    );
  }

  validateUser() {
    alert('Available user is: ' + this.cookie.check("userName"))
  }

  ngOnInit(): void {

    // this.cookie.deleteAll('../')
    if (this.service.isLoggedIn())
      alert('You already logged in')
  }

}

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
    private coockie: CookieService,
    private router:Router) { }

  msg = 'User IS ' + this.coockie.get('userName')

  login() {


    this.service.validateUser(this.user).subscribe(
      data => {
        this.coockie.set("userName", data.userName)
        this.coockie.set("type", data.type)
        this.router.navigate(['']);

        //this.user = data
        alert(data.password)
      },
      error => {
        alert('invalid credentials, please try again')
      }
    );
  }


  validateUser() {
    alert('Available user is: ' + this.coockie.check("userName"))

  }

  ngOnInit(): void {

    // this.coockie.deleteAll('../')
    if (this.service.isValidated)
      alert('You already logged in')
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Employer } from '../model/employer.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user: User = new User();
  employer: Employer = new Employer();


  constructor() { }

  ngOnInit(): void {

  }

  signup() {
    console.log('SignUp clicked')
    this.user.userName = this.employer.email
  }
}

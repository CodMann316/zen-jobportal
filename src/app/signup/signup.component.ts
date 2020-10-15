import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:{
    userName:string,
    password:string
  }

  employer = {
      employerId:'',
	    firstName:'',
	    lastName:'',
	    companyName:'',
	    companyLocation:'',
	    email:''
  }

  signup() {

    this.user.userName=this.employer.email
  }

  constructor() { }

  ngOnInit(): void {
  }

}

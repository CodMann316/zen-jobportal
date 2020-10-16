import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  constructor(private service:LoginService) { }
  
  login(){
    this.service.validateUser(this.user).subscribe(
      data=>{
        this.user=data
        //if(this.user==null)
          alert(data.password)
      },
      error => {
        alert('invalid USer')
      }
    );
  }


  validateUser(){
  
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name:string;
  email:string;
  comment:string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert("Your response is submitted")
    this.name=""
    this.email=""
    this.comment=""
  }

}

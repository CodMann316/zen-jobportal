import { Component, OnInit } from '@angular/core';
import { job } from '../model/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job:job=new job("Developer","Full Time");
  

  constructor() { }

  ngOnInit(): void {
  }

}

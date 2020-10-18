import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job:Job=new Job("Developer","Full Time");
  

  constructor() { }

  ngOnInit(): void {
  }

}

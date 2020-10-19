import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  jobs:Job[];
  selectedId;

  constructor(private jobService:JobService) { }

  ngOnInit(): void {  
    this.jobService.getAllJobs().subscribe(
      data=>this.jobs=data
    );
  }

  getJob():Job{
    return this.jobs.find( e=> e.jobId.match(this.selectedId))
  }

  jobApply(jobId){
      this.jobService.applyForJob(jobId).subscribe(
        result => alert('Is applied Successful:'+result)
      )
  }


}

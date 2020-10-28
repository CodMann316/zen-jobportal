import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  allJobs: Job[];
  jobs: Job[];
  selectedId: string = "0";

  constructor(private jobService: JobService,
    private route: ActivatedRoute) {
    this.getAllJobs()
  }

  ngOnInit(): void {
  }

  getAllJobs() {
    this.route.queryParams
      .subscribe(
        param => {
           
          this.jobService.getAllJobs().subscribe(
            data => {
              this.allJobs = data
              if (!(param.title === "") && !(param.location === "")){
                
                this.jobs = this.allJobs.filter(e => e.jobTitle.toLocaleLowerCase().includes(param.title.toString().toLocaleLowerCase()) && e.location.includes(param.location.toString().toLocaleLowerCase()))
              }
              else if ((param.title === "") && !(param.location === "")){
                this.jobs = this.allJobs.filter(e => e.location.toLocaleLowerCase().includes(param.location.toString().toLocaleLowerCase()))
              }
              else if (!(param.title === "") && (param.location === "")){
                this.jobs = this.allJobs.filter(e => e.jobTitle.toString().toLocaleLowerCase().includes(param.title.toString().toLocaleLowerCase()))
              }
              else{
                this.jobs=this.allJobs
              }
            }
          );
        }
      )

  }

  showDATA() {
    // alert("DB DATA"+JSON.stringify(this.jobs))
  }

  getJob(): Job {
    if (!(this.selectedId === "0")) {
      console.log("View details clicked!")
      return this.jobs.find(e => e.jobId === this.selectedId)
    }
    else {

      return new Job()
    }
  }

  jobApply(jobId) {
    this.jobService.applyForJob(jobId).subscribe(
      result => alert('Is applied Successful:' + result)
    )
  }


}

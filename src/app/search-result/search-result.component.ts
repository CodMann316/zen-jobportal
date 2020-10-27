import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  jobs: Job[];
  selectedId:string="0";

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
          alert(param.title + " " + param.location)
          this.jobService.getAllJobs().subscribe(
            data => {
              this.jobs = data
              // this.showDATA()
            }
          );
        }
      )

  }

  showDATA() {
    // alert("DB DATA"+JSON.stringify(this.jobs))
  }

  getJob(): Job {
    if(!(this.selectedId==="0")){
      console.log("View details clicked!")
      return this.jobs.find(e => e.jobId===this.selectedId)
    }
     else{

       return new Job()
     }
  }

  jobApply(jobId) {
    this.jobService.applyForJob(jobId).subscribe(
      result => alert('Is applied Successful:' + result)
    )
  }


}

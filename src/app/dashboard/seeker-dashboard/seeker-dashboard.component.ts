import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-seeker-dashboard',
  templateUrl: './seeker-dashboard.component.html',
  styleUrls: ['./seeker-dashboard.component.css']
})
export class SeekerDashboardComponent implements OnInit {

  jobs: Job[] = [];
  companyName: string;
  selectedId: string = '';

  constructor(private jobService: JobService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.jobService.getAppliedJobs().subscribe(
      data => {
        this.jobs = data
      }
    )
  }

  getJob(): Job {

    if (this.jobs.find(e => (e.jobId === this.selectedId)) != null)
      return this.jobs.find(e => (e.jobId === this.selectedId))
    else
      return new Job()
  }

  cancelJobApplication() {
    this.jobService.cancelJobApplication(this.selectedId).subscribe(
      data => {
        if (data){
          alert("Application cancelled successfully.")
          window.location.reload();
        }
        else
          alert("Application not cancelled,please try again.")
      },
      error => alert("There is error please try again after sometime")
    )
  }

}

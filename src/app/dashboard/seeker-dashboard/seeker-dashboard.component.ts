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

  jobs: Job[];
  selectedId;

  constructor(private jobService: JobService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.jobService.getAppliedJobs().subscribe(
      data => this.jobs=data
    )
  }

  getJob(): Job {
    return this.jobs.find(e => e.jobId.match(this.selectedId))
  }

}

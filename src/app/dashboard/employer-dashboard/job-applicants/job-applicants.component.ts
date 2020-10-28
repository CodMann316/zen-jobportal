import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seeker } from 'src/app/model/seeker.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  skills: string[] = [];
  jobTitle:string;
  seekers: Seeker[] = [{
    phoneNumber:'564894',
    firstName:'rohan',
    email:'asd@wqe'
  }];
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.jobTitle=params.jobTitle
      this.jobService.getJobApplicants(params.id).subscribe(
        data =>{
          console.log("Applicants "+JSON.stringify(data))
          this.seekers = data
        } 
      )
    })
  }

 
  selectedMail: string;

  getSeeker(): Seeker {
    return this.seekers.find(e => e.email.match(this.selectedMail))
  }


}

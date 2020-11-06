import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seeker } from 'src/app/model/seeker.model';
import { FileService } from 'src/app/services/file.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private jobService: JobService,private fileService?:FileService) { }

  skills: string[] = [];
  jobTitle: string;
  seekers: Seeker[] = [{
    phoneNumber: '564894',
    firstName: 'rohan',
    email: 'asd@wqe'
  }];

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.jobTitle = params.jobTitle
      this.jobService.getJobApplicants(params.id).subscribe(
        data => {
          console.log("Applicants " + JSON.stringify(data))
          this.seekers = data
        }
      )
    })
  }


  selectedMail: string;

  getSeeker(): Seeker {
    return this.seekers.find(e => e.email.match(this.selectedMail))
  }


  getSeekerResume(id: string) {
    this.fileService.getSeekerResume(id).subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url)
      },
      error=> alert("Resume not found")
    )
  }



}

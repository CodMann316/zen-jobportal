import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-edit-seeker-profile',
  templateUrl: './edit-seeker-profile.component.html',
  styleUrls: ['./edit-seeker-profile.component.css']
})
export class EditSeekerProfileComponent implements OnInit {


  constructor(private jobService: JobService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';

declare var $: any;

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {

  isPostJob:boolean=false;
  skillName: string;
  company:string;
  skills: string[] = [];
  job: Job = new Job();
  selectedId: string;
  jobs: Job[] = [];
  constructor(private jobService: JobService,private loginService: LoginService) { }

  ngOnInit(): void {
  
    this.jobService.getPostedJobs().subscribe(
      data => {
        this.jobs = data
        console.log("HEllo "+JSON.stringify(data))
      },
      error =>{
        console.log("Error ",error)
      }
    )

    this.loginService.getProfile().subscribe(
      data=>{
        this.company=data.companyName
        console.log(this.company);
      },
      error =>{
        console.log("Error ",error)
      }
    )
  }

  getJob() {
    return this.job
    //return this.jobs.find(e => e.jobId.match(this.selectedId))
  }

  modalFocus() {
    $('.modal').css('overflow-y', 'auto')
  }

  addSkill() {
    this.skills.push(this.skillName)
    this.skillName = ''
  }

  removeSkill(unwantedSkill: string) {
    alert(unwantedSkill)
    this.skills = this.skills.filter(element => !(element===unwantedSkill))
  }

  postNewJob(){
    this.isPostJob=true;
    this.job=new Job();
  }

  postJob() {
    this.job.status="open"
    this.job.skills=this.skills
    this.job.company=this.company;
    console.log("POSTING JOB "+JSON.stringify(this.job))
    this.jobService.postJob(this.job).subscribe(
      data =>{
        if(data)
          alert("Job posted successfully!")
        else
          alert("Job not posted,please try again!")
      }
    )
  }

  editJob(jobId){
    this.isPostJob=false
    
    this.job.company=this.company
    this.job=this.jobs.find(e => e.jobId===jobId)
    this.skills=[]
    this.job.skills.forEach(e=>{
      this.skills.push(e.skillName)
    }) 
  }

  updateJob(){
    this.jobService.updateJob(this.job).subscribe(
      data =>{
        if(data)
          alert("Job updated successfully!")
        else
          alert("Job not updated,please try again!")
      }
    )
  }


}

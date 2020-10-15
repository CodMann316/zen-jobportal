import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education.model';
import { Seeker } from '../model/seeker.model';
import { User } from '../model/user.model';
import { WorkExperience } from '../model/WorkExperience.model';

@Component({
  selector: 'app-signup-seeker',
  templateUrl: './signup-seeker.component.html',
  styleUrls: ['./signup-seeker.component.css']
})
export class SignupSeekerComponent implements OnInit {

  user:User=new User();

  seeker:Seeker=new Seeker();

  educationCount:number=0;
  education:Education=new Education();
  educations:Education[]=[];

  skillName:string;
  skillNames:string[];
  
  workExperience:WorkExperience =new WorkExperience();
  workExperiences:WorkExperience[]=[];
  
  signup(){

    this.user.userName=this.seeker.email;
  }

  addEducation(){
    this.educations[0]=this.education;
    alert(this.education.city)
  }

  addSkill(){
    this.skillNames[0]=this.skillName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

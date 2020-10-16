import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
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

  isWorkExperience:boolean=false;

  setWorkExperience(value){
    this.isWorkExperience=value
  }

  user:User=new User();

  seeker:Seeker=new Seeker();

  educationCount=0;
  education:Education=new Education();
  educations:Education[]=[];

  skillName:string;
  skillCount:number=0;
  skillNames:string[]=[];
  
  workExperience:WorkExperience =new WorkExperience();
  workExperienceCount=0;
  workExperiences:WorkExperience[]=[];
  
  signup(){

    this.user.userName=this.seeker.email;
  }

  addWorkExperience(){
    this.workExperiences[this.workExperienceCount++]=this.workExperience;
  }

  addEducation(){
    this.educations[this.educationCount++]=this.education;
    alert(this.education.city)
  }

  removeEduation(unwantedEducation){
    this.educations=this.educations.filter(element => element != unwantedEducation)
  }

  addSkill(){
    
    this.skillNames.push(this.skillName)
    this.skillName=''
  }

  removeSkill(unwantedSkill:string){

    // for(var count=0; count<this.skillNames.length;count++){
    //   if(this.skillNames[count].match(unwantedSkill))
    //   this.skillNames.splice(count,1)
    //   //delete this.skillNames[count]
    // }

    this.skillNames=this.skillNames.filter(element => !element.match(unwantedSkill))
  }

  constructor() { }

  ngOnInit(): void {
  }

}

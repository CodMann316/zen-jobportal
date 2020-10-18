import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


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
    document.getElementById("closeWork").click()

    this.workExperiences[this.workExperienceCount++]=this.workExperience;
  }

  addEducation(inputEducation:Education){
    this.educations.push(inputEducation);

   // this.educations[this.educationCount++]=this.education;
   this.education=new Education();
    
   document.getElementById("closeEdu").click()
  }

  removeEduation(unwantedEducation:Education){
    this.educations=this.educations.filter(element => element.degree != unwantedEducation.degree)
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

  isValid():boolean{
    //console.log( 'Button ---'+(this.educations.length<=0 || this.skillNames.length<=0))
    return this.educations.length<=0 || this.skillNames.length<=0
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


  }

}

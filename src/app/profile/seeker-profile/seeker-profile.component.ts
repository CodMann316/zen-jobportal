import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { Seeker } from 'src/app/model/seeker.model';
import { WorkExperience } from 'src/app/model/WorkExperience.model';
import { LoginService } from 'src/app/services/login.service';


declare var $: any;
@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {

  seeker: Seeker=new Seeker() ;
  //  {
  //   firstName: 'rohan',
  //   lastName: 'Shravage',
  //   email: 'rvs@asd.com',
  //   phoneNumber: '123123',
  //   skills: ['Html', 'C#'],
  //   educations:[],
  //   workExperiences:[]
  // }

  constructor(private loginService:LoginService){}

  education: Education = new Education();
  // educations: Education[] = [];

  skillName: string;
  // skillNames: string[] = [];

  workExperience: WorkExperience = new WorkExperience();
  // workExperiences: WorkExperience[] = [];


  @ViewChild("seekerDetails") seekerModal;

  ngOnInit(): void {
    this.loginService.getProfile().subscribe(
      data=> {
        this.seeker=data
      },
      error =>{
        console.log("Error "+error)
      }
    )
    // this.seeker.skills = this.getSeeker().skills
  }

  open() {
    $("#seekerDetail").modal('show');
  }

  getSeeker(): Seeker {
    return this.seeker
  }

  addWorkExperience() { 
    this.seeker.workExperiences.push(this.workExperience);
    this.workExperience = new WorkExperience()
    document.getElementById("closeWork").click()
  }

  addEducation(inputEducation: Education) {
    this.seeker.educations.push(inputEducation);
    this.education = new Education();
    document.getElementById("closeEdu").click()
  }

  removeEduation(unwantedEducation: Education) {
    this.seeker.educations = this.seeker.educations.filter(element => element.degree != unwantedEducation.degree)
  }

  removeWorkExperience(workXp: WorkExperience) {
    this.seeker.workExperiences = this.seeker.workExperiences.filter(
      element => !(element.jobTitle.match(workXp.jobTitle) && element.company.match(workXp.company)))
  }

  addSkill() {
    this.seeker.skills.push(this.skillName)
    this.skillName = ''
  }

  removeSkill(unwantedSkill: string) {
    alert(unwantedSkill)
    this.seeker.skills = this.seeker.skills.filter(element => !element.match(unwantedSkill))
  }

  modalFocus() {
    $('.modal').css('overflow-y', 'auto')
  }

  save(){
    //  this.seeker.skills=["JAVA","html"]
    // console.log("CHANGED DATA "+JSON.stringify(this.seeker))
    this.loginService.updateProfile(this.seeker).subscribe(
      data=>{
        this.seeker=data;
        alert('Profile Updated!')
        document.getElementById('closeProfile').click()
      },
      error=> {
        alert('Error occurred, profile not updated. please try again!')
      }
    )
  }

}

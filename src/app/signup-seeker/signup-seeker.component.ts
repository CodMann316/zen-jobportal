import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from '../model/education.model';
import { Seeker } from '../model/seeker.model';
import { User } from '../model/user.model';
import { WorkExperience } from '../model/WorkExperience.model';
import { SignupService } from '../services/signup.service';


@Component({
  selector: 'app-signup-seeker',
  templateUrl: './signup-seeker.component.html',
  styleUrls: ['./signup-seeker.component.css']
})
export class SignupSeekerComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private signupService: SignupService, private route: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  isWorkExperience: boolean = false;

  setWorkExperience(value) {
    this.isWorkExperience = value
  }

  user: User = new User();

  seeker: Seeker = new Seeker();

  education: Education = new Education();
  educations: Education[] = [];

  skillName: string;
  skillNames: string[] = [];

  workExperience: WorkExperience = new WorkExperience();
  workExperiences: WorkExperience[] = [];

  signup() {

    this.seeker.educations = this.educations
    this.seeker.workExperiences = this.workExperiences
    this.seeker.skills = this.skillNames
    this.user.userName = this.seeker.email;
    this.user.type = "seeker";

    this.signupService.isMailAvailable(this.user.userName).subscribe(
      result => {
        if (result)
          alert('User with this mail is already exists in the system, please check mail address and try again.')
        else {
          this.signupService.sigupSeeker(this.seeker, this.user).subscribe(
            result => {
              if (result) {
                alert("Account created successfully!, You can login now.")
                this.route.navigate(['/home'])
              }
              else {
                alert("Failed to create account please try again!")
              }
            }
          );
        }
      }
    )


  }

  addWorkExperience() {
    this.workExperiences.push(this.workExperience);
    this.workExperience = new WorkExperience()
    document.getElementById("closeWork").click()
  }

  addEducation(inputEducation: Education) {
    this.educations.push(inputEducation);
    this.education = new Education();
    document.getElementById("closeEdu").click()
  }

  removeEduation(unwantedEducation: Education) {
    this.educations = this.educations.filter(element => element.degree != unwantedEducation.degree)
  }

  removeWorkExperience(workXp: WorkExperience) {
    this.workExperiences = this.workExperiences.filter(
      element => !(element.jobTitle.match(workXp.jobTitle) && element.company.match(workXp.company)))
  }

  addSkill() {

    this.skillNames.push(this.skillName)
    this.skillName = ''
  }

  removeSkill(unwantedSkill: string) {
    this.skillNames = this.skillNames.filter(element => !element.match(unwantedSkill))
  }

  isValid(): boolean {
    //console.log( 'Button ---'+(this.educations.length<=0 || this.skillNames.length<=0))
    return this.educations.length <= 0 || this.skillNames.length <= 0
  }


}

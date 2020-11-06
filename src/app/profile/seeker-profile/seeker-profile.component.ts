import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/model/education.model';
import { Seeker } from 'src/app/model/seeker.model';
import { WorkExperience } from 'src/app/model/WorkExperience.model';
import { FileService } from 'src/app/services/file.service';
import { LoginService } from 'src/app/services/login.service';


declare var $: any;
@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {

  seeker: Seeker = new Seeker();
  //  {
  //   firstName: 'rohan',
  //   lastName: 'Shravage',
  //   email: 'rvs@asd.com',
  //   phoneNumber: '123123',
  //   skills: ['Html', 'C#'],
  //   educations:[],
  //   workExperiences:[]
  // }

  constructor(private loginService: LoginService, private fileServie?: FileService) { }

  education: Education = new Education();
  // educations: Education[] = [];

  skillName: string;
  // skillNames: string[] = [];

  workExperience: WorkExperience = new WorkExperience();
  // workExperiences: WorkExperience[] = [];


  @ViewChild("seekerDetails") seekerModal;

  ngOnInit(): void {
    this.loginService.getProfile().subscribe(
      data => {
        this.seeker = data
      },
      error => {
        console.log("Error " + error)
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

  save() {
    //  this.seeker.skills=["JAVA","html"]
    // console.log("CHANGED DATA "+JSON.stringify(this.seeker))
    this.loginService.updateProfile(this.seeker).subscribe(
      data => {
        this.seeker = data;
        alert('Profile Updated!')
        document.getElementById('closeProfile').click()
      },
      error => {
        alert('Error occurred, profile not updated. please try again!')
      }
    )
  }









  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  getResume() {
    this.fileServie.getProfileResume().subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      }
    )
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.fileServie.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.fileServie.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }



}

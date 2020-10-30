import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  alert = false;
  search = false;
  isSearchCandidate = false;
  tableMargin=20

  locationControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  msg: string;
  skillSeleted: string;
  location:string;
  jobTitle:string;
  
  locations = [
    'Nashik',
    'Pune',
    'Mumbai',
    'Nagpur'
  ]

  skills = [
    'C++',
    'Java',
    'Html',
    'C#',
    'Angular',
    'Android',
    'Office',
    'Word',
    'AutoCad',
    'AngularJs',
  ]

  selectedSkills: string[] = []

  constructor(private route:Router,
    private loginService: LoginService) { }

  addSkill(skill) {
    if (!this.selectedSkills.includes(skill, 0))
      this.selectedSkills.push(skill)
    else {
      this.msg = 'Duplicate skill not allowed'
      this.alert = true;
    }
  }

  removeSkill(skill:string) {

    this.selectedSkills = this.selectedSkills.filter(e => !(e===skill))
  }

  searchJob() {
    this.route.navigate(['home/searchResult'])
    
    // alert('sd')
    if (this.loginService.isLoggedIn() && this.loginService.getUserType().match('seeker')) {
      this.search = true
    }
    else
      alert('Please login to search jobs')
    this.isSearchCandidate = false
  }

  searchCandidate() {
    if (this.loginService.isLoggedIn() && this.loginService.getUserType().match('employer')) {
      this.isSearchCandidate = true
    }
    else {
      alert('Please login as employer to search candidates')
    }
    this.search = false
  }

  getSkills(){
    
    return encodeURIComponent(this.selectedSkills.toString());
  }

  ngOnInit(): void {
  }

}

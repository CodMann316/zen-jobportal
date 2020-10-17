import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  alert = false;

  locationControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  msg: string;
  skillSeleted:string;

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

  constructor() { }

  addSkill(skill) {
    if (!this.selectedSkills.includes(skill, 0))
      this.selectedSkills.push(skill)
    else {
      this.msg = 'Duplicate skill not allowed'
      this.alert = true;
    }
  }

  removeSkill(skill) {
    this.selectedSkills = this.selectedSkills.filter(e => !e.match(skill))
  }

  searchJob(){

  }

  searchCandidate(){
    
  }

  ngOnInit(): void {
  }

}

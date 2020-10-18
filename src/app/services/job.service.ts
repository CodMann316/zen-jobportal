import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../model/global';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getJobs(){

  }

  getAllJobs(){

  }
  
  getJobById(){
    this.http.get<Job>(Global.url+'')
  }

  getAllJobById(){

  }

  getJobBySkills(){

  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Global } from '../model/global';
import { Job } from '../model/job.model';
import { Seeker } from '../model/seeker.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient,private login:LoginService) { }

  getJobs(){

  }

  getAllJobs(){
    return this.http.get<Job[]>(Global.url+'/assets/jobs.json')
  }
  
  getJobById(){
    this.http.get<Job>(Global.url+'')
  }

  getAllJobById(){

  }

  getJobBySkills(){

  }

  applyForJob(jobId):Observable<any>{
    let params:HttpParams=new HttpParams();
    params.set("jobId",jobId);
    params.set("userName" ,encodeURIComponent(this.login.getUserName()) );
    return this.http.post<boolean>(Global.url+'/applyForJob',{params})
  }

}

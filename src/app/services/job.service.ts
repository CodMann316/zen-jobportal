import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
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

  getAllJobs():Observable<any>{
    return this.http.get<Job[]>(Global.url+'/getAllJobs')
  }
  
  getJobById(jobId:string):Observable<any>{
    return this.http.get<Job>(Global.url+'/getJob/'+jobId)
  }

  getAllJobById(){

  }

  getJobBySkills(){

  }

  applyForJob(jobId):Observable<any>{
    // let params:HttpParams=new HttpParams();
    // params.set("jobId",jobId);
    // params.set("email" ,this.login.getUserName());
    return this.http.post<boolean>(Global.url+'/applyForJob/'+jobId+'/'+this.login.getUserName(),[])
  }

  getAppliedJobs():Observable<any>{
    return this.http.get<Job[]>(Global.url+'/getAppliedJobs/'+this.login.getUserName())
  }

  getPostedJobs():Observable<any>{

    return this.http.get<Job[]>(Global.url+'/getPostedJobs/'+this.login.getUserName())
  }

  getJobApplicants(jobId:string):Observable<any>{
    return this.http.get<Seeker[]>(Global.url+'/getJobApplicants/'+jobId)
  }

  postJob(job:Job){
    console.log()
    return this.http.post<boolean>(Global.url+'/postJob/'+this.login.getUserName(),job)
  }

  updateJob(job:Job){
    return this.http.post<boolean>(Global.url+'/updateJob',job)
  }

cancelJobApplication(jobId):Observable<any>{
  return this.http.delete<boolean>(Global.url+'/cancelJobApplication/'+jobId+'/'+this.login.getUserName())
}

test(){
  
}

}

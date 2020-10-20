import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Global } from '../model/global';
import { Job } from '../model/job.model';
import { Seeker } from '../model/seeker.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
 

  searchForJob(title,location):Observable<any>{
    let params:HttpParams=new HttpParams();
    params.set("jobTitle",title);
    params.set("location",location);
    return this.http.get<Job[]>(Global.url+"/jobSearch",{params})
  }

  searchForCandidate(skills:string[]):Observable<any>{
    let params:HttpParams=new HttpParams();
    params.set("skills",encodeURIComponent(skills.toString()));
    //return this.http.get<Seeker[]>(Global.url+"/seekerSearch",{params})
    return this.http.get<Seeker[]>(Global.url+"/assets/seekers.json",{params})
  }
}

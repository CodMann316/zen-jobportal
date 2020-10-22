import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../model/global';
import { Seeker } from '../model/seeker.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  sigupSeeker(seeker: Seeker, user: User) {
    return this.http.post<boolean>(Global.url + '/signUp',seeker  )
  }

  isMailAvailable(mail:string){
    // let params:HttpParams=new HttpParams();
    // params.set("email",encodeURIComponent(mail));
    return this.http.get<boolean>(Global.url+'/isMailAvailable/'+mail)
    // return this.http.get<boolean>(Global.url+'/isMailAvailable',{params})
  }
}

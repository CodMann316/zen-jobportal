import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Global } from '../model/global';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:4200"

  fakeUsers: User[] = [
    new User('ABC', 'abc', 'seeker'),
    new User('java', 'java', 'seeker'),
    new User('c++', 'c++', 'employer'),
    new User('html', 'html', 'employer'),
  ]

  url = this.baseUrl + '/assets/users.json'

  constructor(private cookie: CookieService, private http: HttpClient) {
    console.log('login service created')
  }

  validateUser(user: User) {
    //return this.http.post<User>(Global.url+"/signIn",user);
    return this.http.get<User>(this.url)
  }

  isLoggedIn() {
    return this.cookie.check("userName");
  }

  getUserType(): string {
    return this.cookie.get("type");
  }

  isSeerker(): boolean {
    if (this.getUserType().match('seeker'))
      return true;
    else
      return false;
  }

  isEmployer(): boolean {
    if (this.getUserType().match('employer'))
      return true;
    else
      return false;
  }

  getUserName() {
    return this.cookie.get("userName");
  }

  logout() {
    this.cookie.deleteAll('../');
  }

  getProfile():Observable<any> {
    if (this.isSeerker())
      return this.http.get('/seekerDashboard/' + this.getUserName())
    else if (this.isEmployer())
      return this.http.get('/employerDashboard/' + this.getUserName())
  }

  updateProfile(profile):Observable<any> {
    if (this.isSeerker())
      return this.http.post('/seekerDashboard/' + this.getUserName(),[profile])
    else if (this.isEmployer())
      return this.http.post('/employerDashboard/' + this.getUserName(),[profile])
  }


}

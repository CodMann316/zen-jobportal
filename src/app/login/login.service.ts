import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string="http://localhost:4200"

  fakeUsers: User[] = [
    new User('ABC', 'abc', 'seeker'),
    new User('java', 'java', 'seeker'),
    new User('c++', 'c++', 'employer'),
    new User('html', 'html', 'employer'),
  ]

  url = this.baseUrl+'/assets/users.json'

  constructor(private coockie: CookieService, private http: HttpClient) {
    console.log('login service created')
  }

  validateUser(user: User) {
    return this.http.get<User>(this.url)
  }

  isLoggedIn() {
    return this.coockie.check("userName");
  }

  getUserType() {
    return this.coockie.get("type");
  }

  getUserName() {
    return this.coockie.get("userName");
  }

  logout() {
    // remove user from local storage to log user out
    this.coockie.deleteAll('../')
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }


}

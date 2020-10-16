import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isValidated=false;
  

  fakeUsers: User[] = [
    new User('ABC', 'abc', 'seeker'),
    new User('java', 'java', 'seeker'),
    new User('c++', 'c++', 'employer'),
    new User('html', 'html', 'employer'),
  ]

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  url = 'http://localhost:4200/assets/users.json'

  constructor(private coockie:CookieService, private http: HttpClient) {
    console.log('login service created')
  }


  validateUser(user:User){
   return this.http.get<User>(this.url)
    // this.fakeUsers.forEach(element => {
    //     if(element.userName.match(user.userName) && element.password.match(user.password)){
    //       return element;
    //     }
    // });
   
  }

  isLoggedIn(){
    //alert(this.coockie.get('userName'))
    return this.coockie.check("userName");
  }

  logout() {
    // remove user from local storage to log user out
    this.coockie.deleteAll('../')
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}

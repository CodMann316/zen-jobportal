import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  fakeUsers: User[] = [
    new User('ABC', 'abc', 'seeker'),
    new User('java', 'java', 'seeker'),
    new User('c++', 'c++', 'employer'),
    new User('html', 'html', 'employer'),
  ]

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  url = 'http://localhost:4200/assets/usersd.json'

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userLocal: User) {
    return this.http.post<any>(`/users/authenticate`, { userLocal })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  validateUser(user:User){
   return this.http.get<User>(this.url)
    // this.fakeUsers.forEach(element => {
    //     if(element.userName.match(user.userName) && element.password.match(user.password)){
    //       return element;
    //     }
    // });
   
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}

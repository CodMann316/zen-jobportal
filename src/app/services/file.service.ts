import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../model/global';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {


  private baseUrl = Global.url;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload/` + this.loginService.getUserName(), formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  getProfileResume(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/`+this.loginService.getUserName(),{responseType:"blob"});
  }

  getSeekerResume(id:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/`+id ,{responseType:"blob"});
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Observable<any>{  
    const URL = 'http://localhost:3000/login'
    return this.http.post(URL, user)
  }

}

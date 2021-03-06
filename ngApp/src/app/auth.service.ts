import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registrationUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post<any>(this._registrationUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    //return weather it is true or false
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  getToken(){
    return localStorage.getItem('access_token');
  }

  login(email:string, password:string) {
    return this.http.post<any>(environment.API_BASE_URL+'/auth/login', {email, password});
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('auth_stamp');
    localStorage.removeItem('last_login');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }


  constructor(private http:HttpClient) { }
}

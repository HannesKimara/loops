import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  getHoods(){
   return this.http.get(`${environment.API_BASE_URL}/api/v1/hoods`);
  }

  joinHood(public_id:string){
    return this.http.post(`${environment.API_BASE_URL}/api/v1/join`, {public_id}, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  getHoodBusinesses(){
    return this.http.get(`${environment.API_BASE_URL}/api/v1/business`, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  getPosts(){
    return this.http.get(`${environment.API_BASE_URL}/api/v1/posts`, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  createPost(title:string, content:string){
    return this.http.post(`${environment.API_BASE_URL}/api/v1/posts`, {title, content}, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  constructor(private http:HttpClient, private auth:AuthenticationService) { }
}

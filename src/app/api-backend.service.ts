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

  joinHood(publicId:string){
    return this.http.post(`${environment.API_BASE_URL}/api/v1/join`, {publicId});
  }

  getHoodBusinesses(){
    return this.http.get(`${environment.API_BASE_URL}/api/v1/business`, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  getPosts(){
    return this.http.get(`${environment.API_BASE_URL}/api/v1/posts`, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  createPost(title:string, content:string){
    return this.http.post(`${environment.API_BASE_URL}/api/v1/posts`, {title, content});
  }

  constructor(private http:HttpClient, private auth:AuthenticationService) { }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ApiBackendService } from '../api-backend.service';
import { Router } from '@angular/router';
import { Post } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn:boolean;
  hoods:any;
  hasHood:boolean;
  inHood = false;
  hoodPosts = [];
  hoodDepartments=[];
  hoodBusinesses = [];
  post = new Post("title", "");
  

  joinHood(id){
    this.backend.joinHood(this.hoods[id].public_id).subscribe(
      data => {
        console.log(data);
        this.hasHood = true;
      },
      error => {

      },
      ()=>{
        this.router.navigate(['dashboard'])
      }
    )
  }

  createPost(){
    this.backend.createPost(this.post.title, this.post.content).subscribe(
      data => {
        this.hoodPosts.push(data);
        console.log(data)
      }, error =>{
        alert("Sorry, An error occurred")
      }, () => {
      }
    )
  }

  constructor(public auth:AuthenticationService,public router:Router, public backend:ApiBackendService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.loggedIn;

    if (this.isLoggedIn){
      this.backend.getPosts().subscribe(
        data => {
          this.hasHood = true;
          this.inHood = true;
          this.hoodPosts = data['results'];
        },
        error =>{
          this.hasHood = false;
        },
      );

      this.backend.getHoodBusinesses().subscribe(
        data =>{
          this.hoodBusinesses = data['results']
        }
      )

      if (!this.hasHood) {
        this.backend.getHoods().subscribe(
          data => {
            this.hoods = data['results'];
          },
        );
      } else {

      };
    } else {
      this.router.navigate(['login']);
    }
  }

}

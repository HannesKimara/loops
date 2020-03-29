import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ApiBackendService } from '../api-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn:boolean;
  hoods:any;

  constructor(public auth:AuthenticationService,public router:Router, public backend:ApiBackendService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.loggedIn;

    if (this.isLoggedIn){
      // this.backend.getHoods().subscribe(
      //   data => {
      //     this.hoods = data['results'];
      //   },
      //   error => {
      //     console.log(error);
      //   },
      //   () => {
      //     console.log("No errors, all's done");
      //   }
      // );
      this.backend.getPosts().subscribe(
        data => {
          console.log(data['results']);
        },
        error =>{
          console.log(error)
        }
      );
    } else {
      this.router.navigate(['login']);
    }
  }

}

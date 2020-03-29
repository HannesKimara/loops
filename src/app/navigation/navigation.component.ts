import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn:boolean;
  truth:boolean = false;
  constructor(public nav:NavService, public auth:AuthenticationService,public router:Router) {
  }

  logoutUser(){
    this.auth.logout();
    this.router.navigate(['home']);
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.loggedIn;
  }

}

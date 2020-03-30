import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { NewUserCredentials } from '../models';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userCred = new NewUserCredentials("", "", "", "");

  constructor(public nav:NavService, public auth:AuthenticationService, public router:Router) { }
  registerUser(){
    this.auth.register(this.userCred.firstName, this.userCred.lastName, this.userCred.email, this.userCred.password).subscribe(
      data => {
        console.log(data);
      },
      error =>{
        alert("An error occurred, please try again");
      },
      () => {
        this.router.navigate(['login'])
      }
    )
  }
  ngOnInit(): void {
    this.nav.visible = false;
  }

}

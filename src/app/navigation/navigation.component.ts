import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public nav:NavService) {}

  
  ngOnInit(): void {
  }

}

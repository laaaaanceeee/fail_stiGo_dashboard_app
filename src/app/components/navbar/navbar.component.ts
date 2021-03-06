import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = true;
  userPhotoURL;
  constructor(
    private authService: AuthService
  ) { 

  }
  
  ngOnInit() {


  }
  logOut() {
    this.authService.logOut();
  }
}

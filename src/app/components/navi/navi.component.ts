import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userName: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUserDetailsFromToken();
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      this.userName = this.authService.decodedToken['Name']
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    console.log(this.userName)
    this.authService.logOut();
  }
  
}

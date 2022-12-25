import { ConsoleLogger } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserByEmail();
    this.authService.getUserDetailsFromToken();
    
  }

  getUserByEmail() {
    this.userService.getUserByEmail(this.authService.decodedToken['Email']).subscribe(response => {
      this.users = response.data
    })
  }
}

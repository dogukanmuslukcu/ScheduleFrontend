import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  users: User[] = [];
  userUpdateForm: FormGroup
  currentUserId: number
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.getUserByEmail();
    this.authService.getUserDetailsFromToken();

  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      userId: ["", Validators.required],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]

    })
  }
  update() {
    this.userUpdateForm.patchValue({ userId: this.currentUserId })
    if (this.userUpdateForm.valid) {
      let updateModel = Object.assign({}, this.userUpdateForm.value)
      this.userService.userUpdate(updateModel).subscribe(response => {
        this.toastrService.success(response.message)
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }/* else {
      this.toastrService.error("Formunuz eksik veya hatalı.")
    } */
  }
  getUserByEmail() {
    this.userService.getUserByEmail(this.authService.decodedToken['Email']).subscribe(response => {
      this.users = response.data
      this.currentUserId = this.users[0].userId;
    })
  }

}

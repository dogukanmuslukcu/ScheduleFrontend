import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MeetingService } from 'src/app/services/meet/meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  userName:string;
  meetingForm: FormGroup
  constructor(
    private  formBuilder: FormBuilder,
    private  meetingService: MeetingService,
    private  toastrService: ToastrService,
    private authService: AuthService
  ) { }

  
  ngOnInit(): void {
    this.isAuthenticated();
    this.createMeetingForm();
   
  }

  /*
  MeetingName: string;
  HostUser: string;

  FirstVoteTime: string;
  FirstVotePlace: string;

  SecondVoteTime: string;
  SecondVotePlace: string;

  ThirdVoteTime: string;
  ThirdVotePlace: string;

  FourthVoteTime: string;
  FourthVotePlace: string;

  FifthVoteTime: string;
  FifthVotePlace: string;*/ 
  createMeetingForm() {
    this.meetingForm = this.formBuilder.group({
      MeetingName: ["", Validators.required],
      HostUser: [this.userName],

      FirstVoteTime: ["", Validators.required],
      FirstVotePlace: ["", Validators.required],

      SecondVoteTime: ["", Validators.required],
      SecondVotePlace: ["", Validators.required],

      ThirdVoteTime: ["", Validators.required],
      ThirdVotePlace: ["", Validators.required],
      
      FourthVoteTime: ["", Validators.required],
      FourthVotePlace: ["", Validators.required],
      
      FifthVoteTime: ["", Validators.required],
      FifthVotePlace: ["", Validators.required]
    })
  }
  meeting() {
    if (this.meetingForm.valid) {
      let meetingModel = Object.assign({},this.meetingForm.value)
      this.meetingService.createMeeting(meetingModel).subscribe(response => {
        this.toastrService.info(response.message)
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }
    
  }

   isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      this.userName = this.authService.decodedToken['Name']
      return true;
    } else {
      return false;
    }
  } 

}

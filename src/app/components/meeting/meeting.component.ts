import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MeetingService } from 'src/app/services/meet/meeting.service';
import { VoteService } from 'src/app/services/vote/vote.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  userName:string;
  meetingForm: FormGroup
  voteForm:FormGroup
 

  constructor(
    private  formBuilder: FormBuilder,
    private  meetingService: MeetingService,
    private  toastrService: ToastrService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private voteService:VoteService
  ) { }

  
  ngOnInit(): void {
    this.isAuthenticated();
    this.createMeetingForm();
    this.createVoteForm();
    console.log(this.voteForm);
  }

  createMeetingForm() {
    this.meetingForm = this.formBuilder.group({
      MeetingName: ["", Validators.required],
      MeetingPlace: ["", Validators.required],
      HostUser: [this.userName],
      FirstVote: [null, Validators.required],
      SecondVote: [null, Validators.required],
      ThirdVote: [null, Validators.required],
      FourthVote: [null, Validators.required],
      FifthVote: [undefined],
      MeetingDescription: ["", Validators.required]
    })
   
  }
  meeting() {
    if (this.meetingForm.valid) {
      let meetingModel = Object.assign({},this.meetingForm.value)
      this.meetingService.createMeeting(meetingModel).subscribe(response => {
        this.toastrService.info(response.message)
        if(response.success)
        {
          this.router.navigate(["meetingDto"])
        }
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

  voteCreate()
  {
    if (this.voteForm.valid) {
      let voteModel = Object.assign({},this.voteForm.value)
      this.voteService.createVote(voteModel).subscribe(response => {
        this.toastrService.info(response.message)
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }
  }

  createVoteForm() {
    this.voteForm = this.formBuilder.group({
      VoteOneCount: [0],
      VoteTwoCount: [0],
      VoteThreeCount: [0],
      VoteFourCount: [0],
      VoteFiveCount: [0]
    })
  }
}

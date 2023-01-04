import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Meeting } from 'src/app/models/meeting/meeting';
import { User } from 'src/app/models/user/user';
import { Vote } from 'src/app/models/vote/vote';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MeetingService } from 'src/app/services/meet/meeting.service';
import { UserService } from 'src/app/services/user/user.service';
import { VoteService } from 'src/app/services/vote/vote.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  meetings: Meeting[] = []
  data:any={}
  users: User[] = []
  firstvote:any
  secondvote:any
  thirdvote:any
  fourtvote:any
  fifthvote:any
  vote:Vote

 




  constructor(
    private meetingService: MeetingService,
    private activatedRoute: ActivatedRoute,
    private voteService :VoteService,
    private  toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["meetingId"]) {
        this.getMeetingById(params["meetingId"]);
        
      }
      
    })

  }

  getMeetingById(meetingId:number) {
    this.meetingService.getMeetingById(meetingId).subscribe(response => {
      this.meetings = Object.values(response.data)
      let [meetingname,meetId,hostname,firstv,secondv,thirdv,fourthv,fifthv,description]=this.meetings
      this.firstvote=firstv;
      this.secondvote=secondv;
      this.thirdvote=thirdv;
      this.fourtvote=fourthv;
      this.fifthvote=fifthv;
    })
  }
  
  fnClick()
  {
  if(this.data.gen ==1)
  {
    this.voteOne();
  }
  if(this.data.gen ==2)
  {
    this.voteTwo();
  }
  if(this.data.gen ==3)
  {
    this.voteThree();
  }
  if(this.data.gen ==4)
  {
    this.voteFour();
  }
  if(this.data.gen ==5)
  {
    this.voteFive();
  }

  }
  
  voteOne()
  {
    this.voteService.voteOne(this.vote).subscribe(response => {
      this.toastrService.info(response.message)
    }, responseError => {
      this.toastrService.error(responseError.error)
    })
  }
  voteTwo()
  {
    this.voteService.voteTwo(this.vote).subscribe(response => {
      this.toastrService.info(response.message)
    }, responseError => {
      this.toastrService.error(responseError.error)
    })
  }
  voteThree()
  {
    this.voteService.voteThree(this.vote).subscribe(response => {
      this.toastrService.info(response.message)
    }, responseError => {
      this.toastrService.error(responseError.error)
    })
  }
  voteFour()
  {
    this.voteService.voteFour(this.vote).subscribe(response => {
      this.toastrService.info(response.message)
    }, responseError => {
      this.toastrService.error(responseError.error)
    })
  }
  voteFive()
  {
    this.voteService.voteFive(this.vote).subscribe(response => {
      this.toastrService.info(response.message)
    }, responseError => {
      this.toastrService.error(responseError.error)
    })
  }

}

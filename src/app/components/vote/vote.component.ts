import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'src/app/models/meeting/meeting';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MeetingService } from 'src/app/services/meet/meeting.service';
import { UserService } from 'src/app/services/user/user.service';


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
  a:string="abcd"




  constructor(
    private meetingService: MeetingService,
    private activatedRoute: ActivatedRoute,
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
    {
      this.afk();
    }
  }
  afk()
  {
    console.log("Çalıştı")
  }
}

import { Component } from '@angular/core';
import { Meeting } from 'src/app/models/meeting/meeting';
import { MeetingService } from 'src/app/services/meet/meeting.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  meetings: Meeting[] = []
  
  constructor(
    private meetingService: MeetingService,
    
  ) { }

  ngOnInit(): void {
    this.getUserByEmail();
  }

  getUserByEmail() {
    this.meetingService.getMeetingById(3).subscribe(response => {
      this.meetings = response.data
      console.log(this.meetings)
    })
  }
}

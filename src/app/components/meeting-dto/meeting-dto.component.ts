import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeetingDto } from 'src/app/models/meeting/meetingDto';
import { MeetingService } from 'src/app/services/meet/meeting.service';

@Component({
  selector: 'app-meeting-dto',
  templateUrl: './meeting-dto.component.html',
  styleUrls: ['./meeting-dto.component.css']
})
export class MeetingDtoComponent {

  meetingDtos:MeetingDto[]=[];

  constructor(
    private  meetingDtoService: MeetingService,
    private  toastrService: ToastrService,
  
  ) { }

  ngOnInit(): void {
    this.getAllMeetingDto();
    }

  getAllMeetingDto(){
    this.meetingDtoService.getAllMeetingDto().subscribe(response => {
      this.meetingDtos = Object.values(response.data)
    })
  }

  }



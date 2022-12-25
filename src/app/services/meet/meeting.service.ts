import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from 'src/app/models/meeting/meeting';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';
import { ResponseModel } from 'src/app/models/ResponseModels/responseModel';
import { SingleResponseModel } from 'src/app/models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  apiUrl = "https://localhost:44309/api/meeting/meeting-create";
apiUrl2 = "https://localhost:44309/api/meeting";
  constructor(private httpClient:HttpClient) { }

  createMeeting(meeting: Meeting){
    
    return this.httpClient.post<ResponseModel>(this.apiUrl,meeting)
  }
  getMeetingById(meetingId:number):Observable<listResponseModel<Meeting>>{
    
    let newPath =this.apiUrl2+"/meeting-getbyid?id="+meetingId
    return this.httpClient.get<listResponseModel<Meeting>>(newPath)
  }
}

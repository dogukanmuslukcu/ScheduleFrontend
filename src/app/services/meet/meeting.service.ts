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

  apiUrl = "https://localhost:44309/api/Meeting/meeting-create";

  constructor(private httpClient:HttpClient) { }

  createMeeting(meeting: Meeting){
    return this.httpClient.post<ResponseModel>(this.apiUrl,meeting)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from 'src/app/models/ResponseModels/responseModel';
import { Vote } from 'src/app/models/vote/vote';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  apiUrl = "https://localhost:44309/api/vote/vote-create";

  constructor(private httpClient: HttpClient) { }

  createVote(vote: Vote) {
    let newPath =this.apiUrl+"/vote-create"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
  voteOne(vote: Vote) {
    let newPath =this.apiUrl+"/vote-one"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
  voteTwo(vote: Vote) {
    let newPath =this.apiUrl+"/vote-two"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
  voteThree(vote: Vote) {
    let newPath =this.apiUrl+"/vote-three"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
  voteFour(vote: Vote) {
    let newPath =this.apiUrl+"/vote-four"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
  voteFive(vote: Vote) {
    let newPath =this.apiUrl+"/vote-five"
    return this.httpClient.post<ResponseModel>(newPath, vote)
  }
}

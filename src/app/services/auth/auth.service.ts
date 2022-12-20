import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken } from 'src/app/models/login-register/decodedToken';
import { LoginModel } from 'src/app/models/login-register/loginModel';
import { RegisterModel } from 'src/app/models/login-register/registerModel';
import { SingleResponseModel } from 'src/app/models/ResponseModels/singleResponseModel';
import { TokenModel } from 'src/app/models/login-register/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44309/api/auth";
  decodedToken: DecodedToken = {Token: "", DecodedToken: "", Expiration: 0, Email: "", Name: "", Role: "", Roles: [], UserId: 0};

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService:JwtHelperService
    ) { }

  login(loginModel: LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/login", loginModel)
  }

  register(RegisterModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/register",RegisterModel)
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("token");
  }

  getUserDetailsFromToken() {
    const token: any = localStorage.getItem("token");
    const decodedToken = this.jwtHelperService.decodeToken(token);

    this.decodedToken['Token'] = localStorage.getItem("token");
    this.decodedToken['DecodedToken'] = this.jwtHelperService.decodeToken(token);
    this.decodedToken['Expiration'] = +decodedToken['exp'];
    this.decodedToken['Name'] = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.decodedToken['Role'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Roles'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Email'] = decodedToken['email'];
    this.decodedToken['UserId'] = parseInt(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
  }
}

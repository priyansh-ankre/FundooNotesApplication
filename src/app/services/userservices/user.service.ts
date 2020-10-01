import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../httpservices/http.service';
import { RegistrationModel } from 'src/app/model/registration-model/registration-model';
import { LoginModel } from 'src/app/model/login-model/login-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerUrl = environment.baseUrl + "user/registerPushToken";
  loginUrl = environment.baseUrl + "user/login";

  constructor(private httpService: HttpService) { }

  public doRegistration(registrationInterface: RegistrationModel): Observable<any> {
    return this.httpService.post(this.registerUrl, registrationInterface);
  }

  public doLogin(loginInterface: LoginModel): Observable<any> {
    return this.httpService.post(this.loginUrl, loginInterface);
  }
}

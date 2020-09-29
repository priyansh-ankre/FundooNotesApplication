import { NoteInterface } from './../../interface/note/note-interface';
import { LoginInterface } from './../../interface/login/login-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationInterface } from '../../interface/registration/registration-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  registerUrl="http://fundoonotes.incubation.bridgelabz.com/api/user/registerPushToken";
  loginUrl="http://fundoonotes.incubation.bridgelabz.com/api/user/login";
  noteUrl="";

  constructor(private http:HttpClient) { }
  
  /**
   * doRegistration
   */
  public doRegistration(registrationInterface:RegistrationInterface):Observable<any> {
    return this.http.post(this.registerUrl,registrationInterface);
  }
  
  /**
   * doLogin
   */
  public doLogin(loginInterface:LoginInterface) {
    return this.http.post(this.loginUrl,loginInterface);
  }

  public addNote(noteInterface:NoteInterface){
    return this.http.post(this.noteUrl,noteInterface);
  }
}

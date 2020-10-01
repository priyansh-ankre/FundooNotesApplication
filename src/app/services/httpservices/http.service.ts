import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private https:HttpClient) { }

  public post(url,user):Observable<any>{
    return this.https.post(url,user);
  }

  public get(url,user):Observable<any>{
    return this.https.get(url,user);
  }
}

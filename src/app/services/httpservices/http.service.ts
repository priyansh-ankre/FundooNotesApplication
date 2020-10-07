import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private https: HttpClient) { }

  id = localStorage.getItem('id');
  header = {
    id: this.id,
  };

  httpOption = new HttpHeaders(this.header);

  public post(url, user): Observable<any> {
    return this.https.post(url, user);
  }

  public get(url, user): Observable<any> {
    return this.https.get(url, user);
  }

  public postNote(url: string, note: object): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }),
    };
    return this.https.post(url, note, httpOption);
  }

  getNotes(url: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }),
    };
    return this.https.get(url, httpOption);
  }
}

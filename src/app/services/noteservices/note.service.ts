import { Observable } from 'rxjs';
import { NoteModel } from './../../model/note-model/note-model';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteUrl=environment.baseUrl+"notes/addNotes";
  getNoteUrl=environment.baseUrl+"notes/getNotesList";

  constructor(private httpService:HttpService) { }

  addNote(note: NoteModel):Observable<any> {
    return this.httpService.postNote(this.noteUrl, note);
  }

  getNote():Observable<any> {
    return this.httpService.getNotes(this.getNoteUrl);
  }
}

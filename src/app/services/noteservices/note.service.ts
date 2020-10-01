import { Observable } from 'rxjs';
import { NoteModel } from './../../model/note-model/note-model';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteUrl:"http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes";
  getNoteUrl:"http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList";

  constructor(private httpService:HttpService) { }

  public addNote(note:NoteModel):Observable<any>{
    return this.httpService.post(this.noteUrl,note);
  }

  public getNote(note:NoteModel):Observable<any>{
    return this.httpService.get(this.getNoteUrl,note);
  }
}

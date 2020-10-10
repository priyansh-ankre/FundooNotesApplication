import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteUrl=environment.baseUrl+"notes/addNotes";
  getNoteUrl=environment.baseUrl+"notes/getNotesList";
  getArchivedNoteUrl=environment.baseUrl+"notes/getArchiveNotesList";
  getTrashNoteUrl=environment.baseUrl+"notes/getTrashNotesList";

  constructor(private httpService:HttpService) { }

  addNote(note: object):Observable<any> {
    return this.httpService.postNote(this.noteUrl, note);
  }

  getNote():Observable<any> {
    return this.httpService.getNotes(this.getNoteUrl);
  }

  getArchivedNote():Observable<any>{
    return this.httpService.getNotes(this.getArchivedNoteUrl);
  }

  getTrashNote():Observable<any>{
    return this.httpService.getNotes(this.getTrashNoteUrl);
  }
}

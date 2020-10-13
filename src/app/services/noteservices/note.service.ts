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
  ArchiveNoteUrl=environment.baseUrl+"notes/archiveNotes";
  editNoteUrl=environment.baseUrl+"notes/updateNotes";
  changeColorUrl=environment.baseUrl+"notes/changesColorNotes";

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

  ArchiveNote(note:object):Observable<any>{
    return this.httpService.postNote(this.ArchiveNoteUrl,note);
  }

  getTrashNote():Observable<any>{
    return this.httpService.getNotes(this.getTrashNoteUrl);
  }

  editNote(note):Observable<any>{
    return this.httpService.postNote(this.editNoteUrl,note);
  }

  changeColor(note):Observable<any>{
    return this.httpService.postNote(this.changeColorUrl,note);
  }
}

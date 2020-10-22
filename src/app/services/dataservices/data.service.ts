import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private getNoteData = new BehaviorSubject([]);
  currentNote = this.getNoteData.asObservable();
  updateNoteService(message: any) {
    this.getNoteData.next(message);
  }
}

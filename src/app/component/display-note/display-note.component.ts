import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {

  @Input() noteData: any;
  
  constructor(private note: NoteComponent) {
    
   }

  ngOnInit(): void {
    this.note.getNotes();
  }
  

}

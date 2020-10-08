import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {

  noteData: any[]

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNote()
      .subscribe((response) => {
        this.noteData = response.data.data;
        console.log('info', this.noteData);
      }, (error) => {
        console.log('error', error);
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

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
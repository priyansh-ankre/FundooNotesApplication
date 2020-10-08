import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.noteService.getNote()
    .subscribe((response)=>{
      console.log('info',response['body']);
    },(error)=>{
      console.log('error',error);
    })
  }
}

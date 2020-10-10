import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  trashNoteData:any[];

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.noteService.getTrashNote()
    .subscribe((response)=>{
      this.trashNoteData=response.data.data;
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }
}

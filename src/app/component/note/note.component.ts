import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteData: any[]

  constructor(
    private noteService: NoteService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNote()
      .subscribe((response) => {
        this.noteData = response.data.data;
        let notes=this.noteData.filter((element)=>{
          return element.isArchived===false && element.isDeleted===false;
        })
        this.noteData=notes;
        this.noteData.reverse();
        console.log('info', this.noteData);
      }, (error) => {
        this.snackBar.open('Error occured', error);
      })
  }
}

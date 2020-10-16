import { NoteComponent } from './../note/note.component';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    private noteCom: NoteComponent
  ) {
  }

  ngOnInit(): void {
  }

  editNotes(data) {
    this.noteService.editNote(data)
      .subscribe((response) => {
        console.log("edit note response", response)
        this.dialogRef.close();
        this.noteCom.getNotes();
      }, (error) => {
        this.snackBar.open('Error occured', error);
      })
  }
}

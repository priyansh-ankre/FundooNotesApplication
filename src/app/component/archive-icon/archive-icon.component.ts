import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.css']
})
export class ArchiveIconComponent implements OnInit {

  @Input() note: any;

  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    private noteCom: NoteComponent
  ) { }

  ngOnInit(): void {
  }

  ArchiveNotes() {
    let noteData = {
      noteIdList: [this.note.id],
      isArchived: true
    }

    this.noteService.ArchiveNote(noteData)
      .subscribe((response) => {
        console.log(response);
        this.noteCom.getNotes();
      }, (error) => {
        this.snackBar.open('Error Occured', error);
      })
  }
}

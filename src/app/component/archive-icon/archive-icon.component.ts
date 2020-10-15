import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.css']
})
export class ArchiveIconComponent implements OnInit {

  @Input() note:any;

  constructor(
    private noteService: NoteService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  ArchiveNotes() {
    console.log('noteId',this.note.id);
    
    let noteData = {
      noteIdList:[this.note.id],
      isArchived: true
    }
    console.log('noteData',noteData);
    
    
    this.noteService.ArchiveNote(noteData)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        this.snackBar.open('Error Occured',error);
      })
  }
}

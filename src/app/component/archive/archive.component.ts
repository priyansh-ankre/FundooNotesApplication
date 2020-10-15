import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  noteArchivedData: any[];

  constructor(private noteService: NoteService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getArchivedNotes();
  }

  getArchivedNotes() {
    this.noteService.getArchivedNote()
      .subscribe((response) => {
        this.noteArchivedData=response.data.data;
        this.noteArchivedData.reverse();
        console.log('archive info',this.noteArchivedData);
      }, (error) => {
        this.snackBar.open('Error Occured',error);
      })
  }
}

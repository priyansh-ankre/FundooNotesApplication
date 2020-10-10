import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  noteArchivedData: any[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getArchivedNotes();
  }

  getArchivedNotes() {
    this.noteService.getArchivedNote()
      .subscribe((response) => {
        this.noteArchivedData=response;
        console.log('archive info',this.noteArchivedData);
      }, (error) => {
        console.log(error);
      })
  }
}

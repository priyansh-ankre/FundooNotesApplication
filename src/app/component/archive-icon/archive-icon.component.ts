import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.css']
})
export class ArchiveIconComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  ArchiveNotes(note) {
    let noteData = {
      noteIdList:note.id,
      isArchive: true
    }
    this.noteService.ArchiveNote(noteData)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      })
  }
}

import { NoteService } from 'src/app/services/noteservices/note.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.css']
})
export class ArchiveIconComponent implements OnInit {

  @Input() note:any[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  ArchiveNotes() {
    let noteData = {
      noteIdList:this.note["id"],
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

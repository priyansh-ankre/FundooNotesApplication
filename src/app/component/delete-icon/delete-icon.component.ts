import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css']
})
export class DeleteIconComponent implements OnInit {

  deleteNote: boolean = false;
  @Input() note: any;
  
  constructor(
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    private noteCom: NoteComponent
  ) { }

  ngOnInit(): void {
  }

  moreClick(){
    this.deleteNote=!this.deleteNote;
  }

  trashNote(){
    let data={
      isDeleted:true,
      noteIdList:[this.note]
    }

    this.noteService.trashNotes(data)
    .subscribe((response)=>{
      console.log(response);
      this.noteCom.getNotes();
    },(error)=>{
      this.snackBar.open('Note not deleted due to some error',error);
    })
  }
}

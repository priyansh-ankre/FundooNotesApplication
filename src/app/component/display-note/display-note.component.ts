import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {

  @Input() noteData: any[];

  constructor(private note: NoteComponent,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.note.getNotes();
  }

  openDialog(itemData: any) {
    this.dialog.open(EditNoteComponent, {
      data: {
        title: itemData.title,
        description: itemData.description,
        noteId: itemData.id
      }
    })
  }
}

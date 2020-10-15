import { NoteService } from 'src/app/services/noteservices/note.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'protractor';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {

  @Input() noteData: any[];
  @Output() getNotes:EventEmitter<any>=new EventEmitter();

  constructor(
    private noteService:NoteService,
    public dialog: MatDialog,
    private snackBar:MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getNotes.emit();
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
  
  setColor(color){
    let colorData = {
      noteIdList: this.noteData['id'],
      color: color
    }
    this.noteService.changeColor(colorData)
    .subscribe((response)=>{
      this.getNotes.emit();
    },(error)=>{
      this.snackBar.open('Error occured',error);
    })
  }
}

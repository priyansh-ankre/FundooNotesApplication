import { DisplayNoteComponent } from './../display-note/display-note.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NoteModel } from 'src/app/model/note-model/note-model';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  switchBox = false;
  form: FormGroup;
  title = new FormControl('');
  description = new FormControl('');
  displayNotes: DisplayNoteComponent;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: NoteService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
  }

  clickBox() {
    this.switchBox = !this.switchBox;
  }

  clickBox_() {
    this.switchBox = !this.switchBox;
    this.addNote();
  }

  addNote() {
    let addNoteData = {
      title: this.title.value,
      description: this.description.value
    }
    this.service.addNote(addNoteData)
      .subscribe((response) => {
        this.getNotes.emit();
        console.log(response);
      }, (error) => {
        console.log('error', error);

      })
  }

}

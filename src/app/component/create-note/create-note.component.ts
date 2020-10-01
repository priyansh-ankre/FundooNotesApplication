import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteModel } from 'src/app/model/note-model/note-model';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  switchBox = false;
  form: FormGroup;

  constructor(
    private service: NoteService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: '',
      description: '',
      isPinned: false,
      color:'#FFFFFF',
      isArchived: false,
      labelIdList: [[]],
      reminder: [[]],
      collaberators: [[]]
    })
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
    this.service.addNote(new NoteModel(
      this.form.get('title').value,
      this.form.get('description').value,
      this.form.get('isPinned').value,
      this.form.get('color').value,
      this.form.get('isArchived').value,
      this.form.get('labelIdList').value,
      this.form.get('reminder').value,
      this.form.get('collaberators').value
    ))
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);

      })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  title = new FormControl('');
  description = new FormControl('');

  constructor(
    private service: NoteService,
    private fb: FormBuilder
  ) {

  }




  // isPinned=new FormControl(false);
  // color=new FormControl('#FFFFFF');
  // isArchived=new FormControl(false);
  // labelIdList=new FormControl([]);
  // reminder=new FormControl([]);
  // collaberators=new FormControl([]);

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
    // const formData = new FormData;
    // formData.append('title', this.form.get('title').value);
    // formData.append('description', this.form.get('description').value);
    // formData.append('isPinned', this.form.get('isPinned').value);
    // formData.append('color', this.form.get('color').value);
    // formData.append('isArchived', this.form.get('isArchived').value);
    // formData.append('labelIdList', this.form.get('labelIdList').value);
    // formData.append('reminder', this.form.get('reminder').value);
    // formData.append('collaberators', this.form.get('collaberators').value);
    let addNoteData = {
      title: this.title.value,
      description: this.description.value
    }
    this.service.addNote(addNoteData)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);

      })
  }

}

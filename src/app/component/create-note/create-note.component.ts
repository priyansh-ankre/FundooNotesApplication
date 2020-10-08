import { DisplayNoteComponent } from './../display-note/display-note.component';
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
  displayNotes:DisplayNoteComponent;

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

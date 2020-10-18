import { ColorPalleteComponent } from './../color-pallete-icon/color-pallete.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @ViewChild(ColorPalleteComponent) colorChild;
  switchBox = false;
  form: FormGroup;
  color:any;
  title = new FormControl('');
  description = new FormControl('');
  isArchived=new FormControl(false);
  
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
      description: this.description.value,
      isArchived:this.isArchived.value
    }
    this.service.addNote(addNoteData)
      .subscribe((response) => {
        this.getNotes.emit();
        console.log(response);
      }, (error) => {
        console.log('error', error);

      })
  }

  archiveClick(){
    this.isArchived=new FormControl(true);
    this.clickBox_();
  }

  colorClick(){
    this.color=this.colorChild.colorCode;
  }
}

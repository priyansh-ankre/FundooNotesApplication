import { ColorPalleteComponent } from './../color-pallete-icon/color-pallete.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @ViewChild(ColorPalleteComponent) colorPallete: ColorPalleteComponent;
  switchBox = false;
  form: FormGroup;
  title = new FormControl('');
  description = new FormControl('');
  isArchived = new FormControl(false);
  color = '#FFFFFF';


  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: NoteService,
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
      isArchived: this.isArchived.value,
      color: this.color
    }
    this.service.addNote(addNoteData)
      .subscribe((response) => {
        this.getNotes.emit();
        console.log(response);
      }, (error) => {
        console.log('error', error);

      })
  }

  archiveClick() {
    this.isArchived = new FormControl(true);
    this.clickBox_();
  }

  colorsClick() {
    this.color = this.colorPallete.colorCode.hexcode;
    console.log(this.color);
  }
}

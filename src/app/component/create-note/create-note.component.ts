import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelComponent } from './../label/label.component';
import { ColorPalleteComponent } from './../color-pallete-icon/color-pallete.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input('allLabels') noteList;


  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  allLabels: any;
  labelClick = false;
  chipLabel = false;
  selectedItem: string[];

  constructor(
    private service: NoteService,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.selectedItem=new Array<string>();
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

  colorsClick($event) {
    this.color = $event;
    console.log('color', this.color);
    console.log('noteList', this.noteList);
  }

  getLabel() {
    this.service.getLabel()
      .subscribe((response) => {
        this.allLabels = response.data.details;
        console.log('getLabel', response)
        console.log('allLabels', this.allLabels);

      }, (error) => {
        this.snackBar.open("Error in getLabel", error, {
          duration: 3000
        })
      })
  }

  getCheckLabel(e, lbl) {
    if (e.target.checked) {
      this.selectedItem.push(lbl);
    }
    else {
      this.selectedItem = this.selectedItem.filter(m=>m!=lbl)
    }
    console.log(this.selectedItem);
    
  }
}

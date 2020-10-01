import { NoteService } from './../../services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { NoteModel } from 'src/app/model/note-model/note-model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 0;
  viewClick = true;
  refreshValue = false;
  refreshVeiw = "refresh";
  viewTitle = false;
  switchBox=false;
  form: FormGroup;
  
  constructor(
    public dialog: MatDialog,
    private service:NoteService,
    private fb:FormBuilder
    ) { 
      this.form=this.fb.group({
        title:'',
        description:'',
        isPinned:false,
        color:'',
        isArchived: false,
        labelIdList: [],
        reminder:Date,
        collaberators: []
      })
    }

  ngOnInit(): void {
  }

  clickBox(){
    this.switchBox=!this.switchBox;
    this.addNote();
  }

  onToolBarToggle() {

    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 95;
    }
    else {
      this.contentMargin = 280;
    }
  }

  refresh(): String {
    this.refreshValue = !this.refreshValue;
    if (this.refreshValue) {
      window.location.reload();
      return this.refreshVeiw = "cloud_done";
    } else {
      return this.refreshVeiw;
    }
  }
  
  addNote(){
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
  }
  

}



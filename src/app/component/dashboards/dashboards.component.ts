import { NoteService } from './../../services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoteModel } from 'src/app/model/note-model/note-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 0;
  viewClick = true;
  viewTitle = false;
  accCircle=false;
  accEmail=localStorage.getItem("email");
  view = "view_list";
  search=new FormControl('');

  constructor(
    public dialog: MatDialog,
    private rout:Router
  ) {

  }

  ngOnInit(): void {
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

  circleClose(){
    this.accCircle=!this.accCircle;
  }

  signout(){
    this.rout.navigate(['/login']);
  }

  changeView(): String {
    this.viewClick = !this.viewClick;
    if (this.viewClick) {
      return this.view = "view_list";
    } else {
      return this.view = "grid_on";
    }
  }

}



import { NoteService } from './../../services/noteservices/note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    public dialog: MatDialog,
    private service: NoteService,
    private fb: FormBuilder
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

  refresh(): String {
    this.refreshValue = !this.refreshValue;
    if (this.refreshValue) {
      window.location.reload();
      return this.refreshVeiw = "cloud_done";
    } else {
      return this.refreshVeiw;
    }
  }




}



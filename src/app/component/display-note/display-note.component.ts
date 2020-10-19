import { DashboardsComponent } from './../dashboards/dashboards.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {

  @Input() noteData: any[];
  @Output() getNotes:EventEmitter<any>=new EventEmitter();
  searchItem:string;

  constructor(
    public dialog: MatDialog,
    private dashboard:DashboardsComponent
  ) {
    this.searchItem=this.dashboard.search.value;
  }

  ngOnInit(): void {
  }

  openDialog(itemData: any) {
    this.dialog.open(EditNoteComponent, {
      data: {
        title: itemData.title,
        description: itemData.description,
        noteId: itemData.id
      }
    })
  }
  
  
}

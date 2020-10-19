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
  view:string;

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
  
  changeView(){
    this.view=this.dashboard.view.valueOf();
  }

  changeLayout(){
    this.changeView();
    let cssClass;
    if(this.view=="grid_on"){
      cssClass={
        'mat-display-container-grid':false,
        'mat-display-container-list':true
      }
    }
    else{
      cssClass={
        'mat-display-container-grid':true,
        'mat-display-container-list':false
      }
    }
    return cssClass;
  }

  changeNoteCardCss(){
    this.changeView();
    let cssClass;
    if(this.view=="grid_on"){
      cssClass={
        'mat-display-grid':false,
        'mat-display-list':true
      }
    }
    else{
      cssClass={
        'mat-display-grid':true,
        'mat-display-list':false
      }
    }
    return cssClass;
  }
  
}

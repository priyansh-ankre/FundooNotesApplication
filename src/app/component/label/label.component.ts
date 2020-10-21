import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  allLabels:any;
  labelNote=new FormControl('');

  constructor(
    public dialogRef:MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data:LabelComponent,
    private noteService:NoteService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getLabel();
  }

  getLabel(){
    this.noteService.getLabel()
    .subscribe((response)=>{
      this.allLabels=response.data.details;
      console.log('getLabel', response)
      console.log('allLabels',this.allLabels);
      
    },(error)=>{
      this.snackBar.open("Error in getLabel",error,{
        duration:3000
      })
    })
  }

  addLabel(){
    let data={
      isDeleted:false,
      label:this.labelNote.value,
      userId:localStorage.getItem('userId')
    }
    this.noteService.addLabel(data)
    .subscribe((response)=>{
      console.log('label response',response);
      this.getLabel();
    },(error)=>{
      this.snackBar.open('error occured',error,{
        duration:3000
      })
      console.log(error);
      
    })
  }
}

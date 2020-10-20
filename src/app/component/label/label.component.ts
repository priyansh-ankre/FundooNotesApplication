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

  constructor(
    public dialogRef:MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private noteService:NoteService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addLabel(note){
    this.noteService.addLabel(note)
    .subscribe((response)=>{
      console.log('label response',response);
      this.dialogRef.close();
    },(error)=>{
      this.snackBar.open('error occured',error,{
        duration:3000
      })
    })
  }
}

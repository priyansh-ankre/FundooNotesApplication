import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from './../../services/noteservices/note.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.css']
})
export class ColorPalleteComponent implements OnInit {

  colorNote: boolean = false;
  @Output() colorEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() noteData: any;

  constructor(private noteService: NoteService,
    private snackBar: MatSnackBar) { }

  public colorCode: any = [
    [
      { name: "white", hexcode: "#FFFFFF" },
      { name: "red", hexcode: "#FF0000" },
      { name: "orange", hexcode: "#ffa500" },
      { name: "yellow", hexcode: "#FFFF33" },
    ],
    [
      { name: "lime", hexcode: " #00FF00" },
      { name: "teal", hexcode: "#008080" },
      { name: "blue", hexcode: "#0000FF" },
      { name: "Dark Blue", hexcode: "#00008b" },
    ],
    [
      { name: "purple", hexcode: "#800080" },
      { name: "pink", hexcode: "#654321" },
      { name: "brown", hexcode: "#654321" },
      { name: "grey", hexcode: "#808080" },
    ]
  ]

  ngOnInit(): void {
  }

  colorClick() {
    this.colorNote = !this.colorNote;
  }

  setColor(color) {
    let colorData = {
      noteIdList: [this.noteData.id],
      color: color
    }
    this.noteService.changeColor(colorData)
      .subscribe((response) => {
        console.log('color-pallete response',response);
      }, (error) => {
        this.snackBar.open('Error occured', error);
      })
  }
}

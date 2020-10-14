import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.css']
})
export class ColorPalleteComponent implements OnInit {

  colorNote: boolean = false;
  @Output() colorEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

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

  colorClick(){
    this.colorNote=! this.colorNote;
  }

  setcolor(color){
    this.colorEvent.emit(color);
  }
}

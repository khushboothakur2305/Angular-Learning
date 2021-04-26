import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Output() onDisplayDetail = new EventEmitter();
  hideParagraph = true;
  List = [];
  name = 'Khushboo';
  constructor() {}
  displayDetails() {
    this.hideParagraph = !this.hideParagraph;
    this.List.push(new Date());
    this.onDisplayDetail.emit(this.name);
  }
  ngOnInit(): void {}
  getColor() {
    return this.List.length >= 5 ? 'blue' : 'transparent';
  }
}

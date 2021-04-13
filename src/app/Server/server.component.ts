import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  hideParagraph = true;
  List = [];
  constructor() {}
  displayDetails() {
    this.hideParagraph = !this.hideParagraph;
    this.List.push(new Date());
  }
  ngOnInit(): void {}
  getColor() {
    return this.List.length >= 5 ? 'blue' : 'transparent';
  }
}

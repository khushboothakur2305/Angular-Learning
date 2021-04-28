import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor() {}
  num;
  evenArray = [];
  oddArray = [];
  timer;
  ngOnInit(): void {}
  startGame() {
    this.num = 0;
    this.timer = setInterval(() => {
      this.incrementFunction();
    }, 1000);
  }

  incrementFunction() {
    this.num = this.num + 1;
    if (this.num % 2 == 0) {
      this.evenArray.push(this.num);
    } else {
      this.oddArray.push(this.num);
    }
  }
  stopGame() {
    this.oddArray = [];
    this.evenArray = [];
    clearInterval(this.timer);
  }
}

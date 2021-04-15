import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  @Input() name: string;
  allowNewServer = false;
  Server = 'Cannot Add Server';
  serverCreationStatus = 'No Server Was Created';
  ServerName = 'Testing';
  userName = 'Khushboo';
  constructor() {
    setTimeout((res) => {
      this.allowNewServer = true;
      this.Server = 'Add Server';
    }, 2000);
  }
  onAddServer() {
    this.Server = 'Server Added';
    this.serverCreationStatus = `${this.ServerName} Server Was Created`;
  }

  ngOnInit(): void {}
}

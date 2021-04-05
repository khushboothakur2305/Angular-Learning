import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  Server = 'Cannot Add Server';
  serverCreationStatus = 'No Server Was Created';
  ServerName = '';
  constructor() {
    setTimeout((res) => {
      this.allowNewServer = true;
      this.Server = 'Add Server';
    }, 2000);
  }
  onAddServer() {
    this.Server = 'Server Added';
    this.serverCreationStatus = `${this.ServerName} Was Created`;
  }
  ngOnInit(): void {}
  onUpdateServerName(event) {
    this.ServerName = event.target.value;
  }
}

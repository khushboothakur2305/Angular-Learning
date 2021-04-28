import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
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
    console.log('constructor');

    this.Server = 'Server Added';
    this.serverCreationStatus = `${this.ServerName} Server Was Created`;
  }

  ngOnInit(): void {
    console.log('onInit');
  }
  ngDoCheck() {
    console.log('DoCheck');
  }
  ngAfterContentInit() {
    console.log('after content init');
  }
  ngAfterContentChecked() {
    console.log('after content checked');
  }
  ngAfterViewInit() {
    console.log('after view checked');
  }
  ngAfterViewChecked() {
    console.log('after view checked');
  }
  ngOnDestroy() {
    console.log('on destroy');
  }
}

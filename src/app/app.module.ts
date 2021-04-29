import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerComponent } from './Server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameControlComponent } from './Assignment4/game-control/game-control.component';
import { OddComponent } from './Assignment4/odd/odd.component';
import { EvenComponent } from './Assignment4/even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

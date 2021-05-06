import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ServerComponent } from './Server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { GameControlComponent } from './Assignment4/game-control/game-control.component';
import { OddComponent } from './Assignment4/odd/odd.component';
import { EvenComponent } from './Assignment4/even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { HomeComponent } from './Routing/home/home.component';
import { RoutingServersComponent } from './Routing/servers/servers.component';
import { UsersComponent } from './Routing/users/users.component';
import { UserComponent } from './Routing/users/user/user.component';
import { EditServerComponent } from './Routing/servers/edit-server/edit-server.component';
import { ServersService } from './Routing/servers/servers.service';
import { RoutingServerComponent } from './Routing/servers/server/server.component';
const router: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: RoutingServersComponent },
  { path: '', component: HomeComponent },
];
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
    UnlessDirective,
    HomeComponent,
    RoutingServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    RoutingServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router),
  ],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

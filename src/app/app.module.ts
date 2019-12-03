import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { FormsModule } from '@angular/forms';//to enable the "ngModel directive"

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule//to enable the "ngModel directive"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

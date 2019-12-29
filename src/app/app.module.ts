import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {ListService} from './services/list.service';
import {HttpClientModule} from '@angular/common/http';
import {StationListModule} from './station-list/station-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StationListModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StationListComponent} from './station-list.component';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import {MaterialModule} from '../material/material.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LeafletModule.forRoot(),
    LeafletModule,
  ],
  declarations: [
    StationListComponent,
    ListComponent,
    DetailsComponent
  ]
})
export class StationListModule { }

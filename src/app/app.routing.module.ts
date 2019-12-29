import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StationListComponent} from './station-list/station-list.component';
import {MaterialModule} from './material/material.module';

const appRoutes: Routes = [
  { path: 'station-list', component: StationListComponent },
  { path: '**', component: StationListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

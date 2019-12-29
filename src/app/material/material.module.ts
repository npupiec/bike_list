import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}

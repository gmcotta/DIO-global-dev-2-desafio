import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickCardComponent } from './click-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ClickCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    ClickCardComponent,
  ]
})
export class ClickCardModule { }

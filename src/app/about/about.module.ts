import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    AboutComponent,
  ]
})
export class AboutModule { }

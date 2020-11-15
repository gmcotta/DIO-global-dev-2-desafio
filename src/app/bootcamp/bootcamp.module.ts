import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampComponent } from './bootcamp.component';
import { BootcampTableComponent } from './bootcamp-table/bootcamp-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    BootcampComponent,
    BootcampTableComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    BootcampComponent,
  ],
})
export class BootcampModule { }

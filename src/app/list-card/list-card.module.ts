import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';
import { BootcampListComponent } from './bootcamp-list/bootcamp-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListCardComponent,
    BootcampListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    ListCardComponent,
  ],
})
export class ListCardModule { }

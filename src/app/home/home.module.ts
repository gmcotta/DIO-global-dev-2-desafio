import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { IdentificationModule } from '../identification/identification.module';
import { AboutModule } from '../about/about.module';
import { BootcampModule } from '../bootcamp/bootcamp.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    IdentificationModule,
    AboutModule,
    BootcampModule,
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { IdentificationModule } from '../identification/identification.module';
import { ClickCardModule } from '../click-card/click-card.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    IdentificationModule,
    ClickCardModule,
  ]
})
export class HomeModule { }

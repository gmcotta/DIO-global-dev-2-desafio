import { Component, Input } from '@angular/core';
import { Bootcamp } from 'src/app/shared/models/bootcamp.model';

@Component({
  selector: 'gmc-bootcamp-table',
  templateUrl: './bootcamp-table.component.html',
  styleUrls: ['./bootcamp-table.component.scss']
})
export class BootcampTableComponent {

  @Input() bootcampList: Bootcamp[];
  displayedColumns = ['id', 'name', 'company'];

  constructor() { }
}

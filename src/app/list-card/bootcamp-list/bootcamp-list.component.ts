import { Component, Input, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/shared/models/bootcamp.model';

@Component({
  selector: 'gmc-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.scss']
})
export class BootcampListComponent implements OnInit {

  @Input() bootcampList: Bootcamp[];
  displayedColumns = ['id', 'name', 'company'];

  constructor() { }

  ngOnInit(): void {
  }

}

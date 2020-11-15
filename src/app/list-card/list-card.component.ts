import { Component, OnInit } from '@angular/core';
import { Bootcamp } from '../shared/models/bootcamp.model';
import { BootcampListService } from '../shared/services/bootcamp-list.service';

@Component({
  selector: 'gmc-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  list: Bootcamp[] = [];

  constructor(private bootcampListService: BootcampListService) { }

  ngOnInit(): void {
    this.list = this.bootcampListService.getList();
  }
}

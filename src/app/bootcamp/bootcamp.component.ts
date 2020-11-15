import { Component, OnInit } from '@angular/core';
import { Bootcamp } from '../shared/models/bootcamp.model';
import { BootcampListService } from '../shared/services/bootcamp-list.service';

@Component({
  selector: 'gmc-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {

  list: Bootcamp[] = [];

  constructor(private bootcampListService: BootcampListService) { }

  ngOnInit(): void {
    this.list = this.bootcampListService.getList();
  }
}

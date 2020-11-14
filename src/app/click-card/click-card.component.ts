import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gmc-click-card',
  templateUrl: './click-card.component.html',
  styleUrls: ['./click-card.component.scss']
})
export class ClickCardComponent implements OnInit {

  constructor() { }

  isText = false;

  ngOnInit(): void {
  }

  toggleText(): void {
    this.isText = !this.isText;
  }

}

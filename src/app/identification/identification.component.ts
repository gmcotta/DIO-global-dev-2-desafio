import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gmc-name',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
  name = 'Gustavo';
  age = 26;

  constructor() {
  }

  ngOnInit(): void {
  }
}

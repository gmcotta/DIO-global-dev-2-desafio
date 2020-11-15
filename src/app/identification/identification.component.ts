import { Component } from '@angular/core';

@Component({
  selector: 'gmc-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent {
  name = 'Gustavo';
  age = 26;

  constructor() {
  }
}

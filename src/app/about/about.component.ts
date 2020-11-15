import { Component } from '@angular/core';

@Component({
  selector: 'gmc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor() { }

  isButtonActivated = false;

  toggleText(): void {
    this.isButtonActivated = !this.isButtonActivated;
  }

}

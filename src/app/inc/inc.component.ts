import { Component } from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent {

  add: number = 0;

  constructor() { }

  public increment() {
    this.add++;
  }

}

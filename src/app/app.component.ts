import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit{

  // the meaning of ! is: https://docs.angular.lat/guide/template-expression-operators#the-non-null-assertion-operator---
  @ViewChild('par') par!: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.par.nativeElement.innerHTML = "123456";
  }

  public onClick(val: HTMLInputElement) {
    alert(val.value);
  }

}

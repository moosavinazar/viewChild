import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit{

  // the meaning of ! is: https://docs.angular.lat/guide/template-expression-operators#the-non-null-assertion-operator---
  @ViewChild('par', {static: true}) par!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.par.nativeElement.innerHTML = "123456";

    // this.par.nativeElement.style.color = 'purple';
    this.renderer.setStyle(this.par.nativeElement, 'color', 'purple')
  }

  ngAfterViewInit(): void {

  }

  public onClick(val: HTMLInputElement) {
    alert(val.value);
  }

}

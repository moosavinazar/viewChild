import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {IncComponent} from "./inc/inc.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit{

  // the meaning of ! is: https://docs.angular.lat/guide/template-expression-operators#the-non-null-assertion-operator---
  @ViewChild('par', {static: true}) par!: ElementRef;
  @ViewChild(IncComponent, {static: true, read: IncComponent}) incComp!: IncComponent;
  @ViewChildren(IncComponent, {read: IncComponent}) incComps = new QueryList<IncComponent>();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.incComp.increment();
    this.par.nativeElement.innerHTML = "123456";

    // this.par.nativeElement.style.color = 'purple';
    this.renderer.setStyle(this.par.nativeElement, 'color', 'purple')
  }

  ngAfterViewInit(): void {
    this.incComps.forEach( comp => {
      comp.increment()
    });
  }

  public onClick(val: HTMLInputElement) {
    alert(val.value);
  }

}

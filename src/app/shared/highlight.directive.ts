import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#0203e2', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#ebe6e6', 'black');
  }

  private highlight(color: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = fontColor;
  }
  
}

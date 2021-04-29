import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input('appBetterHighlight') highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private Render: Renderer2, private elemenetRef: ElementRef) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.Render.setStyle(
    //   this.elemenetRef.nativeElement,
    //   'background-color',
    //   'pink'
    // );
    this.Render.setStyle(this.elemenetRef.nativeElement, 'padding', '30px');
    this.Render.setStyle(this.elemenetRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.Render.setStyle(this.elemenetRef.nativeElement, 'padding', '30px');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.Render.setStyle(this.elemenetRef.nativeElement, 'padding', '0px');
    this.backgroundColor = this.defaultColor;
  }
}

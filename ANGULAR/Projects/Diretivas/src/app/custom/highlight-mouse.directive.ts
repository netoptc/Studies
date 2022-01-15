import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  //Criando um evento
  @HostListener('mouseenter') onMouseOver(){
    this._render.setStyle(this._elementRef.nativeElement,'background','yellow');
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this._render.setStyle(this._elementRef.nativeElement,'background','white');
  }

  constructor(private _elementRef: ElementRef, private _render: Renderer2) { }

}

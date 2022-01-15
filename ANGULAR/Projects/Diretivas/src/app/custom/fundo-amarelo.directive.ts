import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'yellow');
  }

}

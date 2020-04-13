import { Directive, Input, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[appLogoHighlight]'
})
export class LogoHighlightDirective {
  elem: any;

  constructor(  ) {
    this.elem.nativeElement.style.color = '#ff502f';
   }

}

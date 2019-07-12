import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchBar]'
})
export class SearchBarDirective {

  constructor(el:ElementRef) {
    
   }
@HostListener('mouseenter') onMouseEnter(){
  
}
}

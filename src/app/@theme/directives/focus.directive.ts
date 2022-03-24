import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.focusOnElement();
  }

  private focusOnElement(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    })
  }
}

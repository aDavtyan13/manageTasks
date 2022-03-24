import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[out-click]'
})
export class OutClickDirective {
  @Output() outClickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document: click', ['$event'])
  onClickEvent(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.outClickEvent.emit(false);
    }
  }
}

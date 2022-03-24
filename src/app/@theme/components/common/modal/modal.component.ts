import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() modalTitle: string = '';
  @Input() elementType: string = '';

  @Output() addElementEvent: EventEmitter<string> = new EventEmitter<string>();

  public itemName: string = '';

  constructor(public modalRef: BsModalRef) { }

  public addElement(): void {
    if (this.itemName) {
      this.addElementEvent.emit(this.itemName);
      this.itemName = '';
      this.modalRef.hide();
    }
  }
}

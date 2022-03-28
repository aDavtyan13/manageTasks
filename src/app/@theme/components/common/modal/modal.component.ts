import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Output() saveBtnEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelBtnEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input() modalTitle: string = '';
  @Input() saveBtnText: string = '';
  @Input() hasSaveBtn: boolean = true;
  @Input() withModalHeader: boolean = true;
  @Input() cancelBtnText: string = 'Cancel';

  constructor(public modalRef: BsModalRef) {
  }

  public cancelBtnFn(): void {
    this.cancelBtnEvent.emit();
  }

  public saveBtnFn(): void {
    this.saveBtnEvent.emit();
  }
}

import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() modalTitle: string = '';
  @Input() saveBtnText: string = '';
  @Input() hasSaveBtn: boolean = true;
  @Input() withModalHeader: boolean = true;
  @Input() cancelBtnText: string = 'Cancel';

  @Output() saveBtnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelBtnEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modalRef: BsModalRef) {
  }

  public cancelBtnFn(): void {
    this.cancelBtnEvent.emit();
  }

  public saveBtnFn(): void {
    this.saveBtnEvent.emit();
  }
}

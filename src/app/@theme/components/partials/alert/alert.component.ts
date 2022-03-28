import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IAlert} from '@core/models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Output() confirmEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input() alertItem!: IAlert;
  @Input() hasSaveBtn: boolean = true;
  @Input() saveBtnText: string = 'Ok';

  constructor(public modalRef: BsModalRef) {
  }

  public approveConfirmation(): void {
    this.confirmEvent.emit();
    this.modalRef.hide();
  }
}

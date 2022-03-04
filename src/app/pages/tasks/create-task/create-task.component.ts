import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  public taskName: string = '';

  @Output() taskNameEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public createTask(): void {
    this.modalRef.hide();
    if (this.taskName) {
      this.taskNameEvent.emit(this.taskName);
    }
  }
}

import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, Output} from '@angular/core';

import {TasksService} from '@core/services/tasks.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html'
})
export class AddItemComponent {
  @Output() addElementEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input() elementType: string = '';

  private taskNameEvent = new Subject<string>();

  public itemName: string = '';

  constructor(public modalRef: BsModalRef,
              private tasksService: TasksService) {
  }

  private createListItem(listName: string): void {
    this.tasksService.addLists(listName);
  }

  public addElement(): void {
    if (this.itemName) {
      switch(this.elementType) {
        case 'list':
          this.createListItem(this.itemName);
          break;

        case 'task': {
          this.createTask(this.itemName);
          break;
        }
      }
      this.itemName = '';
      this.modalRef.hide();
    }
  }

  public createTask(taskName: string): void {
    this.taskNameEvent.next(taskName);
  }
}

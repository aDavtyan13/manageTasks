import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

import {IListItem} from '@core/interfaces/IList';
import {TasksService} from '@core/services/tasks.service';
import {AddItemComponent} from 'app/pages/add-item/add-item.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  public selectedListItem!: IListItem;

  constructor(private modalService: BsModalService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.selectListItem();
  }

  private selectListItem(): void {
    this.tasksService.selectItemEvent.subscribe((listItem: IListItem) => {
      this.selectedListItem = listItem;
    });
  }

  public createTask(): void {
    const config: ModalOptions = {
      initialState: {
        elementType: 'task'
      }
    }
    const modalRef: BsModalRef = this.modalService.show(AddItemComponent, config);
    modalRef.content.taskNameEvent.subscribe((res: string) => {
      this.tasksService.addTasks(this.selectedListItem, res);
    });
  }
}

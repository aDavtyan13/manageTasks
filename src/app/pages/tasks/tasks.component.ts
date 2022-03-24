import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

import {IListItem} from '../../@core/interfaces/IList';
import {TasksService} from '../../@core/services/tasks.service';
import {CreateTaskComponent} from './create-task/create-task.component';

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
    const modalRef: BsModalRef = this.modalService.show(CreateTaskComponent);
    modalRef.content.taskNameEvent.subscribe((res: string) => {
      this.tasksService.addTasks(this.selectedListItem, res);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

import {IItem} from '../../@core/interfaces/IList';
import {TasksService} from '../../@core/services/tasks.service';
import {CreateTaskComponent} from './create-task/create-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  public taskName!: string;
  public selectedTask!: number;
  public items: IItem[] = [];
  public currentSelectedId!: number;
  public editTaskBtnClicked: boolean = false;

  constructor(private modalService: BsModalService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.items = this.tasksService.getItems();
    this.tasksService.selectItemEvent.subscribe((item: IItem) => {
      this.currentSelectedId = item.id;
    });
  }

  public createTask(): void {
    const modalRef: BsModalRef = this.modalService.show(CreateTaskComponent);
    modalRef.content.taskNameEvent.subscribe((res: string) => {
      this.items[this.currentSelectedId - 1]?.tasks?.push(res);
    })
  }

  public editTask(item: IItem, name: string, index: number): void {
    this.taskName = item.tasks![index];
    this.editTaskBtnClicked = true;
    this.selectedTask = index;
  }

  public removeTask(item: IItem, index: number): void {
    this.items[this.currentSelectedId - 1]?.tasks?.splice(index, 1);
  }

  public saveTask(item: IItem, taskName: string, index: number): void {
    this.editTaskBtnClicked = false;
    this.tasksService.updateItem(item, taskName, index);
  }
}

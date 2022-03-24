import {Component} from '@angular/core';

import {TasksService} from '../../../@core/services/tasks.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html'
})
export class CreateListComponent {
  constructor(private tasksService: TasksService) {}

  public createList(listName: string): void {
    this.tasksService.addLists(listName);
  }
}

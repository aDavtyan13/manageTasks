import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';

import {IItem} from '../../@core/interfaces/IList';
import {TasksService} from '../../@core/services/tasks.service';
import {CreateListComponent} from './create-list/create-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent implements OnInit {
  public items!: IItem[];

  constructor(private modalService: BsModalService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasksService.updateItemEvent.subscribe((items: IItem[]) => {
      this.items = items;

      if (this.items[0]) {
        this.selectItem(this.items[0]);
      }
    });
  }

  public createList(): void {
    this.modalService.show(CreateListComponent);
  }

  public selectItem(item: IItem): void {
    this.tasksService.selectItemEvent.emit(item);
  }
}

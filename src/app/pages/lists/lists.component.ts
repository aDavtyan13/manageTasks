import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';

import {IListItem} from '../../@core/interfaces/IList';
import {TasksService} from '../../@core/services/tasks.service';
import {CreateListComponent} from './create-list/create-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent implements OnInit {
  public listItems!: IListItem[];

  constructor(private modalService: BsModalService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.initializeListItems();
  }

  private initializeListItems(): void {
    this.tasksService.updateItemEvent.subscribe((lists: IListItem[]) => {
      this.listItems = lists;
      this.listItems.forEach(list => {
        this.selectItem(list);
      })
    });
  }

  public createList(): void {
    this.modalService.show(CreateListComponent);
  }

  public selectItem(list: IListItem): void {
    this.tasksService.lists?.forEach(listItem => {
      listItem.selected = false;
    })
    list.selected = true;
    this.tasksService.selectItemEvent.emit(list);
  }
}

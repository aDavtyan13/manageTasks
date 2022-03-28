import {Component, OnInit} from '@angular/core';
import {BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

import {IListItem} from '@core/interfaces/IList';
import {TasksService} from '@core/services/tasks.service';
import {AlertConstant, AlertEnum} from '@core/models/alert.model';
import {AddItemComponent} from 'app/pages/add-item/add-item.component';
import {AlertComponent} from '@theme/components/partials/alert/alert.component';

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
    this.tasksService.updateItemEvent.subscribe((list: IListItem) => {
      this.listItems = this.tasksService.lists;
      this.selectItem(list);
    });
  }

  public createList(): void {
    const config: ModalOptions = {
      initialState: {
        elementType: 'list'
      }
    }
    this.modalService.show(AddItemComponent, config);
  }

  public selectItem(list: IListItem): void {
    this.tasksService.lists?.forEach(listItem => {
      listItem.selected = false;
    });
    list.selected = true;
    this.tasksService.selectItemEvent.emit(list);
  }

  public showInfo(): void {
    const config: ModalOptions = {
      class: 'modal-sm',
      initialState: {
        hasSaveBtn: false,
        alertItem: {
          ...AlertConstant[AlertEnum.INFO],
          text: 'You have ' + this.tasksService.lists.length + (this.tasksService.lists.length > 1 ? ' lists!' : ' list!')
        },
      }
    }
    this.modalService.show(AlertComponent, config);
  };
}

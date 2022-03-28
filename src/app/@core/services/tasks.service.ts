import {EventEmitter, Injectable} from '@angular/core';

import {IListItem, ITaskItem} from 'app/@core/interfaces/IList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public lists: IListItem[] = [];
  public selectItemEvent = new EventEmitter<IListItem>();
  public updateItemEvent = new EventEmitter<IListItem>();

  public addLists(listName: string): void {
    const element: IListItem = {
      id: Date.now(),
      name: listName,
      tasks: [],
      selected: false,
      isEditable: false
    };

    this.lists.push(element);
    this.updateItemEvent.emit(element);
  }

  public addList(listName: string, listItem?: IListItem): void {
    const element: IListItem = {
      id: Date.now(),
      name: listName,
      tasks: listItem ? listItem.tasks : [],
      selected: false,
      isEditable: false
    };

    this.lists.push(element);
    this.updateItemEvent.emit(element);
  }

  public addTasks(selectedList: IListItem, taskName: string): void {
    const taskElement: ITaskItem = {
      id: Date.now(),
      name: taskName
    };
    selectedList.tasks.push(taskElement);
  }

  public removeItem(elements: any[], index: number): void {
    if (elements[index].selected) {
      const nextSelectedList = elements[index + 1] || elements[index - 1] || null;
      this.selectElement(nextSelectedList);
    }

    elements.splice(index, 1);
  }

  private selectElement(listItem: IListItem): void {
    if (listItem) {
      listItem.selected = true;
    }
    this.selectItemEvent.emit(listItem);
  }
}

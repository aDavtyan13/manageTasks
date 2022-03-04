import {EventEmitter, Injectable} from '@angular/core';

import {IItem} from '../interfaces/IList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public item = {} as IItem;
  public items: IItem[] = [];
  public selectItemEvent = new EventEmitter<IItem>();
  public updateItemEvent = new EventEmitter<IItem[]>();


  public addItems(listName: string): void {
    const element: IItem = {
      id: this.items.length + 1,
      name: listName,
      tasks: []
    };
    this.items.push(element);
    this.updateItemEvent.emit(this.items);
  }

  public getItems(): IItem[] {
    return this.items;
  }

  public updateItem(item: IItem, taskName: string, index: number): void {
    item.tasks![index] = taskName;
    this.getItems();
  }
}

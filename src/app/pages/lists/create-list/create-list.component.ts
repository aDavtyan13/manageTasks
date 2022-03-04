import {BsModalRef} from 'ngx-bootstrap/modal';
import {Component, OnInit} from '@angular/core';

import {TasksService} from '../../../@core/services/tasks.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html'
})
export class CreateListComponent implements OnInit {
  public listName: string = '';

  constructor(private tasksService: TasksService,
              public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

  public createList(): void {
    this.modalRef.hide();
    if (this.listName) {
      this.tasksService.addItems(this.listName);
    }
  }
}

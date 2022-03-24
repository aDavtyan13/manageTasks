import {Component, Input, OnInit} from '@angular/core';

import {TasksService} from '../../../../@core/services/tasks.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  public elementName?: string;
  private currentSelected: any;

  @Input() index!: number;
  @Input() elements!: any;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.currentSelected = this.elements[this.index];
  }

  public editElement(event: Event): void {
    event.preventDefault();
    this.elementName = this.currentSelected?.name;
    this.currentSelected.isEditable = true;
  }

  public removeElement(event: Event): void {
    event.preventDefault();
    this.tasksService.removeItem(this.elements, this.index);
  }

  public saveElement(): void {
    if (this.elementName) {
      this.currentSelected.name = this.elementName;
    }

    this.currentSelected.isEditable = false;
  }
}

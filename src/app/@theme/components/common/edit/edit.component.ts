import {Component, Input, OnInit} from '@angular/core';

import {TasksService} from '@core/services/tasks.service';
import {AlertConstant, AlertEnum} from '@core/models/alert.model';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {AlertComponent} from '@theme/components/partials/alert/alert.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  @Input() index!: number;
  @Input() elements!: any;
  @Input() isInList: boolean = false;

  private currentSelected: any;

  public elementName?: string;

  constructor(private tasksService: TasksService,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.currentSelected = this.elements[this.index];
  }

  public editElement(event: Event): void {
    event.preventDefault();
    this.elementName = this.currentSelected?.name;
    this.currentSelected.isEditable = true;
  }

  public duplicateItem(event: Event): void {
    event.preventDefault();
    this.tasksService.addList(this.elements[this.index].name, this.elements[this.index]);
  }

  public removeElement(event: Event): void {
    event.preventDefault();
    const config: ModalOptions = {
      class: 'modal-sm',
      initialState: {
        saveBtnText: 'Delete',
        alertItem: AlertConstant[AlertEnum.WARNING],
      }
    }
    const modalRef: BsModalRef = this.modalService.show(AlertComponent, config);
    modalRef.content.confirmEvent.subscribe(() => {
      this.tasksService.removeItem(this.elements, this.index);
    })
  }

  public saveElement(): void {
    if (this.elementName) {
      this.currentSelected.name = this.elementName;
    }

    this.currentSelected.isEditable = false;
  }
}

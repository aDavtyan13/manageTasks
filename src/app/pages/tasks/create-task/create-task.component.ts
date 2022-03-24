import {Subject} from 'rxjs';
import {Component} from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  private taskNameEvent = new Subject<string>();

  public createTask(taskName: string): void {
    this.taskNameEvent.next(taskName);
  }
}

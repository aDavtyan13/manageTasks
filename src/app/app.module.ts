import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import {ListsComponent} from './pages/lists/lists.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {FocusDirective} from './@theme/directives/focus.directive';
import {OutClickDirective} from './@theme/directives/out-click.directive';
import {EditComponent} from './@theme/components/common/edit/edit.component';
import { ModalComponent } from './@theme/components/common/modal/modal.component';
import {CreateListComponent} from './pages/lists/create-list/create-list.component';
import {CreateTaskComponent} from './pages/tasks/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TasksComponent,
    FocusDirective,
    ModalComponent,
    EditComponent,
    OutClickDirective,
    CreateListComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

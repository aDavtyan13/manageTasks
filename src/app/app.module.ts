import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import {ListsComponent} from './pages/lists/lists.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {FocusDirective} from './@theme/directives/focus.directive';
import {CreateListComponent} from './pages/lists/create-list/create-list.component';
import {CreateTaskComponent} from './pages/tasks/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TasksComponent,
    FocusDirective,
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

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import {ListsComponent} from 'app/pages/lists/lists.component';
import {TasksComponent} from 'app/pages/tasks/tasks.component';
import {FocusDirective} from '@theme/directives/focus.directive';
import {AddItemComponent} from 'app/pages/add-item/add-item.component';
import {OutClickDirective} from '@theme/directives/out-click.directive';
import {EditComponent} from '@theme/components/common/edit/edit.component';
import {ModalComponent} from '@theme/components/common/modal/modal.component';
import {AlertComponent} from '@theme/components/partials/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListsComponent,
    TasksComponent,
    FocusDirective,
    ModalComponent,
    AlertComponent,
    AddItemComponent,
    OutClickDirective
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

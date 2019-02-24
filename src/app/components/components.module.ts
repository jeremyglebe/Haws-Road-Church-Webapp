import { FormsModule } from '@angular/forms';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    HeaderComponent,
    PageTabsComponent,
    UserCardComponent,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PageTabsComponent,
    UserCardComponent,
    UploaderComponent,
    UploadTaskComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

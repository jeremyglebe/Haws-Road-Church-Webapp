
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageTabsComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PageTabsComponent,
    UserCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PageTabsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

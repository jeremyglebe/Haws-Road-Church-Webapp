
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './dropzone.directive';

@NgModule({
  declarations: [
    DropzoneDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropzoneDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectivesModule { }

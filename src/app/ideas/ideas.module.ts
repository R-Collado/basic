import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';



@NgModule({
  declarations: [
    IdeasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IdeasComponent
  ]
})
export class IdeasModule { }

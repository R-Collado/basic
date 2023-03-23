import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }

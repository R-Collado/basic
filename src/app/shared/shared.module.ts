import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TravelsMenuComponent } from './travels-menu/travels-menu.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    TravelsMenuComponent,
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

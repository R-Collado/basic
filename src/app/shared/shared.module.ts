import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    ProjectsMenuComponent
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

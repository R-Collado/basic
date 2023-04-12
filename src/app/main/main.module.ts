import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main.component';
import { TravellingPartnersComponent } from './travelling-partners/travelling-partners.component';
import { HelpingPeopleComponent } from './helping-people/helping-people.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    MainComponent,
    TravellingPartnersComponent,
    HelpingPeopleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

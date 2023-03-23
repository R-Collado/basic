import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturedEngagementsComponent } from './featured-engagements/featured-engagements.component';
import { FeaturedNewsComponent } from './featured-news/featured-news.component';
import { AgencySpotlightComponent } from './agency-spotlight/agency-spotlight.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    FeaturedEngagementsComponent,
    FeaturedNewsComponent,
    AgencySpotlightComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

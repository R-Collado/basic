import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { IdeasModule } from './ideas/ideas.module';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AboutModule,
    IdeasModule,
    NewsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

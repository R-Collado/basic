import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'ideas', component: IdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

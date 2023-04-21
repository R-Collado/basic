import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const newsComponent = document.querySelector('#news-component') as HTMLElement;

    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('dark', false);

      gsap.fromTo(newsComponent, {
        background: oldColors?.bg,
        color: oldColors?.fg
      }, {
        background: '#252422',
        color: '#f9cdcd',
        duration: 1 
      })
    });
  }

 

}

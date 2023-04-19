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
    const oldColors = this.navService.toggleRootColors('light', false);
    const newsComponent = document.querySelector('#news-component') as HTMLElement;

    gsap.fromTo(newsComponent, {
      background: oldColors?.bg,
      color: oldColors?.fg
    }, {
      background: '#f4f4f4',
      color: '#f9cdcd',
      duration: 1 
    })
  }

 

}

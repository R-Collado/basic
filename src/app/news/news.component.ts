import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  radioBtns = [
    {
      id: 'view-all',
      key: 'VIEW ALL',
      value: 'all'
    },
    {
      id: 'press',
      key: 'PRESS',
      value: 'press'
    },
    {
      id: 'events',
      key: 'EVENTS',
      value: 'events'
    },
    {
      id: 'awards',
      key: 'AWARDS',
      value: 'awards'
    },
    {
      id: 'work',
      key: 'WORK',
      value: 'work'
    }
  ];

  initialNews = [
    {
      title: 'BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards',
      image: 'https://source.unsplash.com/random',
      date: '3.13.23',
      type: 'awards'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://source.unsplash.com/random',
      date: '3.13.23',
      type: 'work'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://source.unsplash.com/random',
      date: '3.13.23',
      type: 'events'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://source.unsplash.com/random',
      date: '3.13.23',
      type: 'press'
    },
  ];

  news = this.initialNews;

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const newsComponent = document.querySelector('#news-component') as HTMLElement;

    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('light', false);

      gsap.fromTo(newsComponent, {
        background: oldColors?.bg,
        color: oldColors?.fg
      }, {
        background: '#f4f4f4',
        color: '#252422',
        duration: 1 
      });
    })
  }

  filterNews(type: string): void {
    if (type === 'all') {
      this.news = this.initialNews;
      return;
    }
    const filtered = this.initialNews.filter((value) => {return value.type === type});
    this.news = filtered;
  }
}

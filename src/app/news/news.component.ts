import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  btns!: NodeListOf<HTMLElement>;

  radioBtns = [
    {
      id: 'view-all',
      key: 'VIEW ALL',
      value: 'all'
    },
    {
      id: 'advice',
      key: 'ADVICES',
      value: 'advice'
    },
    {
      id: 'review',
      key: 'REVIEWS',
      value: 'review'
    },
    {
      id: 'event',
      key: 'EVENTS',
      value: 'event'
    },
    {
      id: 'guide',
      key: 'GUIDES',
      value: 'guide'
    }
  ];

  initialNews = [
    {
      title: 'Record Numbers of Tourists Flock to See Cherry Blossoms in Kyoto',
      image: 'assets/img/news-images/kyoto-cherry-blossom.jpg',
      date: '4.04.23',
      type: 'event'
    },
    {
      title: 'The Timeless Manor: does it deserve its reputation?',
      image: 'assets/img/news-images/manor.jpg',
      date: '3.22.23',
      type: 'review'
    },
    {
      title: 'Cancelled flight? Here are your rights',
      image: 'assets/img/news-images/flights.jpg',
      date: '3.03.23',
      type: 'advice'
    }, 
    {
      title: 'Sri Lanka travel guide: Everything to know before you go',
      image: 'assets/img/news-images/sri-lanka.jpg',
      date: '2.24.23',
      type: 'guide'
    },
  ];

  news = this.initialNews;

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const newsComponent = document.querySelector('#news-component') as HTMLElement;

    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('light', false);
      this.btns = document.querySelectorAll('.radio-btn-li');

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

  filterNews(e: any, type: string): void {

    this.btns.forEach(btn => {
      btn.classList.remove('active')
    });
    
    e.target.classList.add('active');

    if (type === 'all') {
      this.news = this.initialNews;
      return;
    }
    const filtered = this.initialNews.filter((value) => {return value.type === type});
    this.news = filtered;
  }
}

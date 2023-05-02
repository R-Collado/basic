import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic';

  ngOnInit(): void {
    const bg = document.querySelector('.bg') as HTMLElement;
    const lines = document.querySelectorAll('.line');
    let easing = gsap.parseEase(".5, 0, 0, 1");

    gsap.from('.lines-overlay', { 
      yPercent: 103,
      duration: .35,
      delay: .5,
      ease: easing
    });

    gsap.to('.loader', {
      yPercent: -103,
      duration: .75,
      delay: 1,
      ease: easing
    });

    if (this.isSafariBrowser()) bg.classList.add('safari_only');

  }

  isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
}

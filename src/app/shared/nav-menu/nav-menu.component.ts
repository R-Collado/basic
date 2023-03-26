import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.querySelector('.nav-menu') as HTMLElement;
    const menuBg = document.querySelector('.nav-menu .bg') as HTMLElement;

    if (this.isSafariBrowser()) menuBg.classList.add('safari_only');

    window.onwheel = e => {

      if (e.deltaY > 0) {
        // scroll down
        gsap.to(menu, {
          y: '-100%',
          duration: .25,
          ease: 'power1.in'
        });
        setTimeout(() => {
          menu.dataset['transparent'] = 'false';
          menuBg.style.display = 'block';
        }, 500);
      } else {
        //scroll up
        gsap.to(menu, {
          y: '0',
          duration: .25,
          ease: 'power1.in'
        });
      }
    }

  }

  isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
}

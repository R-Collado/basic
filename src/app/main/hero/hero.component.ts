import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  moveCursor = false;

  constructor() { }

  ngOnInit(): void {
    const cursor = document.querySelector('#cursor') as HTMLElement;
    const hero = document.querySelector('.hero') as HTMLElement;

    hero.onmouseenter = e => {
      gsap.to(cursor, {
        top: e.clientY + 'px',
        left: e.clientX + 'px',
        duration: .1,
        ease: 'power1.in'
      });
    }

    hero.onmousemove = e => {
      gsap.to(cursor, {
        top: e.pageY + 'px',
        left: e.pageX + 'px'
      });
    }

    
    hero.onmouseleave = e => {
      setTimeout(()=> (
        gsap.to(cursor , {
          top: '50%',
          left: '50%',
          duration: .2,
          ease: 'power1.in',
        })
      ), 300)
    }
  }

}

import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-featured-engagements',
  templateUrl: './featured-engagements.component.html',
  styleUrls: ['./featured-engagements.component.scss']
})
export class FeaturedEngagementsComponent implements OnInit {
  
  listenMouse: boolean = false;
  xCoord: number = 0;
  screenWidth: number = window.innerWidth;

  constructor() { }

  ngOnInit(): void {

    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const slider = document.querySelector('.slider') as HTMLElement;
    const sliderController = document.querySelector('.slider-controller-inside') as HTMLElement;
    const cursor = document.querySelector('.slider-container .cursor-primary-clr') as HTMLElement;
    let translate = 0;



    sliderContainer.onmousedown = e => {
      let actualX = e.clientX;
      this.listenMouse = true;
      cursor.classList.add('pressed');

      sliderContainer.onmousemove = e => {
        const movement = e.clientX;
        const rect = sliderContainer.getBoundingClientRect();

        gsap.to(cursor, {
          left:  e.clientX - rect.left + 'px',
          top: e.clientY - rect.top + 'px',
        });

        if(!this.listenMouse) return;
        
        if (movement > actualX) translate++;
        else translate--

        if (translate > 0 ) translate = 0;
        else if (translate < -45) translate = -45;

        gsap.to(slider, {
          xPercent: translate,
          duration: .5
        });

        gsap.to(sliderController, {
          xPercent: -translate,
          duration: .5
        })

        actualX = e.clientX;
      }
    }

    sliderContainer.onmouseup = e => {
      this.listenMouse = false;
      cursor.classList.remove('pressed');
    }

    sliderContainer.onmouseenter = e => {
      const rect = sliderContainer.getBoundingClientRect();

      gsap.to(cursor, {
        left:  e.clientX - rect.left + 'px',
        top: e.clientY - rect.top + 'px',
        duration: .1,
        ease: 'power1.in'
      });
    }

    sliderContainer.onmouseleave = e => {
      setTimeout(()=> (
        gsap.to(cursor , {
          top: '30%',
          left: '90%',
          duration: .2,
          ease: 'power1.in',
        })
      ), 300)
    }

    sliderContainer.onmousemove = e => {
      const rect = sliderContainer.getBoundingClientRect();

      gsap.to(cursor, {
        left:  e.clientX - rect.left + 'px',
        top: e.clientY - rect.top + 'px',
      });
    }
  }

}

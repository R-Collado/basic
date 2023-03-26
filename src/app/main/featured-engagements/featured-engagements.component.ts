import { Component, OnInit } from '@angular/core';

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
    console.log(this.screenWidth)

    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const slider = document.querySelector('.slider') as HTMLElement;
    const sliderController = document.querySelector('.slider-controller-inside') as HTMLElement;

    sliderContainer.onmousedown = e => {
      const actualX = e.clientX;
      this.listenMouse = true;
      console.log('actual', actualX)

      sliderContainer.onmousemove = e => {
        const movement = e.clientX;

        if(!this.listenMouse) return;

        if (movement > actualX) console.log('bigger')
        else console.log('smaller')


        // this.xCoord = e.clientX;
        // const percentage = Math.round(this.xCoord / sliderContainer.clientWidth * (100));
        // console.log(percentage - 65)
        // slider.style.transform = `translateX(${percentage - 65}%)`;
      }
    }

    sliderContainer.onmouseup = e => {
      this.listenMouse = false;
    }
  }

}

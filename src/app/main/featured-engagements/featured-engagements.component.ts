import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-engagements',
  templateUrl: './featured-engagements.component.html',
  styleUrls: ['./featured-engagements.component.scss']
})
export class FeaturedEngagementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const slider = document.querySelector('.slider') as HTMLElement;

    sliderContainer.onclick = e => {
      slider.style.left = '-100%';
    }
  }

}

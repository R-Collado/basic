import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images = [
    {
      idx: '01',
      src: 'https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      idx: '02',
      src: 'https://images.pexels.com/photos/3067621/pexels-photo-3067621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      idx: '03',
      src: 'https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      idx: '04',
      src: 'https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    const component = document.querySelector('#about-component') as HTMLElement;
    const headingFirstDiv = new SplitType('.value .secondary-heading').words;
    const textSecondDiv = new SplitType('.together h2, .together p').words;


    gsap.fromTo(headingFirstDiv, 
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
      });
    gsap.fromTo(textSecondDiv, 
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: 'power4.out',
      });
  }

}

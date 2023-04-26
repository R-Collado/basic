import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { CustomEase } from "gsap/CustomEase";


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

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const headingFirstDiv = new SplitType('.value .secondary-heading').words;
    const textSecondDiv = new SplitType('.together h2, .together p').words;

    const aboutComponent = document.querySelector('#about-component') as HTMLElement;
    
    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('dark', false);
      const h2Words = document.querySelectorAll('.secondary-heading .words')

      let easing = gsap.parseEase(".5, 0, 0, 1");

      gsap.from(headingFirstDiv, { 
        yPercent: 103,
        stagger: 0.05,
        duration: .5,
        ease: easing
      });

      gsap.fromTo(aboutComponent, {
        background: oldColors?.bg,
        color: oldColors?.fg
      }, {
        background: '#252422',
        color: '#f9cdcd',
        duration: 1,
      })
  
     

    //   gsap.fromTo(textSecondDiv, 
    //     { 
    //       y: 100,
    //       opacity: 0
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 3,
    //       ease: 'power4.out',
    //     });
    }, 1);

  
  }

}

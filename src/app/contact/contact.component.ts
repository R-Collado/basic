import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { gsap } from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const newsComponent = document.querySelector('#contact-component') as HTMLElement;
    const imageContainer = document.querySelector('.image-container') as HTMLElement;
    const imageOverlay = document.querySelector('#image-overlay') as HTMLElement;
    const splitHeading = new SplitType('h2').words;

    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('light', false);
      let easing = gsap.parseEase(".5, 0, 0, 1");


      gsap.fromTo(newsComponent, {
        background: oldColors?.bg,
        color: oldColors?.fg
      }, {
        background: '#f4f4f4',
        color: '#252422',
        duration: 1 
      });

      gsap.from(splitHeading, { 
        yPercent: 103,
        stagger: 0.05,
        duration: .5,
        ease: easing
      });

      gsap.fromTo(imageOverlay, {
        background: oldColors?.bg
      }, { 
        background: '#f4f4f4',
        duration: 1,
        ease: easing
      });
      
      gsap.fromTo(imageOverlay,{
        y: 0
      }, {
        yPercent: -103,
        delay: 1,
        duration: .5,
        ease: easing
      })
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-travels-menu',
  templateUrl: './travels-menu.component.html',
  styleUrls: ['./travels-menu.component.scss']
})
export class TravelsMenuComponent implements OnInit {
  @Output() closeTravelsList = new EventEmitter<boolean>();
  travels = [
    {
      idx: '01',
      name: 'Kyoto',
      year: 2022,
      catchphrase: "おはよう!",
      img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      summary: 'A must-see destination for anyone traveling to Japan. With its rich history, stunning temples and gardens, and unique cultural experiences, Kyoto is a true gem of a city. '
    },
    {
      idx: '02',
      name: "Uyuni's Salt Lake",
      year: 2022,
      catchphrase: "Where the sky meets the earth",
      img: 'https://images.unsplash.com/photo-1583901370237-2befec865f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      summary: "Also known as Salar de Uyuni, is the world's largest salt flat located in the Potosí and Oruro departments in southwest Bolivia."
    },
    {
      idx: '03',
      name: 'Banff',
      year: 2022,
      catchphrase: "Find your mountain bliss",
      img: 'https://images.pexels.com/photos/2695391/pexels-photo-2695391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      summary: "Rich with wildlife and showcasing panoramic views of mountains and lakes, Banff is a spectacular destination for those that love the great outdoors."
    },
    {
      idx: '04',
      name: 'Lake Bohinj, at Slovenia',
      year: 2022,
      catchphrase: "Escape to paradise",
      img: 'https://images.pexels.com/photos/11289836/pexels-photo-11289836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      summary: "It is a nature lover's paradise. Visitors can explore the gorgeous environs by hiking, biking, and kayaking."
    },
    {
      idx: '05',
      name: 'Faroe Islands',
      year: 2022,
      catchphrase: "Uncover the untouched beauty",
      img: 'https://images.pexels.com/photos/2581853/pexels-photo-2581853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      summary: "While this Danish archipelago is known for its tiny, colorful houses, it's also rich in dynamic scenery, from basalt cliffs to waterfalls."
    }
  ];

  listenMouse: boolean = false;
  constructor() { }

  ngOnInit(): void {

    const cursor = document.querySelector('.travels .cursor-primary-clr') as HTMLElement;
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const travelList = document.querySelector('.travel-list') as HTMLElement;

    let translate = 0;


     sliderContainer.onmousedown = e => {
      let actualX = e.clientX;
      this.listenMouse = true;
      cursor.classList.add('pressed');

       travelList.onmousemove = e => {
        const movement = e.clientX;

        if(!this.listenMouse) return;
        
        if (movement > actualX) translate++;
        else translate--

        if (translate > 0 ) translate = 0;
        else if (translate < -100) translate = -100;

        gsap.to(travelList, {
          xPercent: translate,
          duration: 2
        });

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

  toggleSeetravels(): void {
    this.closeTravelsList.emit(false);
  } 

}

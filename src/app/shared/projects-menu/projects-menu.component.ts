import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.scss']
})
export class ProjectsMenuComponent implements OnInit {
  @Output() closeProjectsList = new EventEmitter<boolean>();
  projects = [
    {
      idx: '01',
      name: 'b/d jams',
      year: 2022,
      catchphrase: "it's a vibe",
      img: 'https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      summary: 'A weekly-ish playlist bla bla blabla'
    },
    {
      idx: '02',
      name: 'b/d jams',
      year: 2022,
      catchphrase: "it's a vibe",
      img: 'https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      summary: 'A weekly-ish playlist bla bla blabla'
    },
    {
      idx: '03',
      name: 'b/d jams',
      year: 2022,
      catchphrase: "it's a vibe",
      img: 'https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      summary: 'A weekly-ish playlist bla bla blabla'
    },
    {
      idx: '04',
      name: 'b/d jams',
      year: 2022,
      catchphrase: "it's a vibe",
      img: 'https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      summary: 'A weekly-ish playlist bla bla blabla'
    },
    {
      idx: '05',
      name: 'b/d jams',
      year: 2022,
      catchphrase: "it's a vibe",
      img: 'https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      summary: 'A weekly-ish playlist bla bla blabla'
    }
  ];

  listenMouse: boolean = false;


  constructor() { }

  ngOnInit(): void {

    const cursor = document.querySelector('.projects .cursor-primary-clr') as HTMLElement;
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const projectList = document.querySelector('.project-list') as HTMLElement;

    let translate = 0;


     sliderContainer.onmousedown = e => {
      let actualX = e.clientX;
      this.listenMouse = true;
      cursor.classList.add('pressed');

       projectList.onmousemove = e => {
        const movement = e.clientX;
        const rect =  projectList.getBoundingClientRect();

        gsap.to(cursor, {
          left:  e.clientX - rect.left + 'px',
          top: e.clientY - rect.top + 'px',
        });

        if(!this.listenMouse) return;
        
        if (movement > actualX) translate++;
        else translate--

        if (translate > 0 ) translate = 0;
        else if (translate < -75) translate = -75;

        gsap.to(projectList, {
          xPercent: translate,
          duration: .5
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

  toggleSeeProjects(): void {
    this.closeProjectsList.emit(false);
  }

}

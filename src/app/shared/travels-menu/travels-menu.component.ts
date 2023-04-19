import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
        const rect =  travelList.getBoundingClientRect();

        if(!this.listenMouse) return;
        
        if (movement > actualX) translate++;
        else translate--

        if (translate > 0 ) translate = 0;
        else if (translate < -75) translate = -75;

        gsap.to(travelList, {
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

  toggleSeetravels(): void {
    this.closeTravelsList.emit(false);
  } 

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  
  seeTravels: boolean = false;
  seeMobileMenu: boolean = false;
  isMobile!: boolean;

  @ViewChild('navMenuDesktop') navMenuDesktop!: ElementRef;
  @ViewChild('navMenuBg') navMenuBg!: ElementRef;
  @ViewChild('menuMobileLinkList') menuMobileLinkList!: ElementRef;

  

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.checkIfMobile();
    }, 1);
  }

  ngAfterViewInit(): void {
    this.loadEventListeners();

    if (this.isSafariBrowser()) this.navMenuBg.nativeElement.classList.add('safari_only');
  }

  
  loadEventListeners(): void {

    window.onwheel = e => {
      const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;

      if (e.deltaY > 0) {
        // scroll down
        gsap.to(menu, {
          y: '-100%',
          duration: .25,
          ease: 'power1.in'
        });
        setTimeout(() => {
          menu.dataset['transparent'] = 'false';
        }, 500);
      } else {
        //scroll up
        gsap.to(menu, {
          y: '0',
          duration: .25,
          ease: 'power1.in'
        });
      }
    }

    window.ontouchstart = e => {
      const startY = e.changedTouches[0].clientY;
      const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;
      window.ontouchmove = e => {
        let actualY = e.changedTouches[0].clientY;
        const result = startY - actualY;

        if (result > 0) {
          // scroll down
          gsap.to(menu, {
            y: '-100%',
            duration: .25,
            ease: 'power1.in'
          });
          setTimeout(() => {
            menu.dataset['transparent'] = 'false';
          }, 500);
        } else {
          //scroll up
          gsap.to(menu, {
            y: '0',
            duration: .25,
            ease: 'power1.in'
          });
        }
      }
    }

    window.onresize = e => {
      this.checkIfMobile();
    }
  }

  isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;

  toggleTravelsList(isOpen: boolean = true): void {
    
    if (isOpen) this.showTravels();
    else this.hideTravels();
    
    this.seeTravels = isOpen;
  }

  showTravels(): void {
    const travels = document.querySelector('.travels') as HTMLElement;
    gsap.fromTo(travels, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .5,
      ease: 'power1.in'
    })
  }

  hideTravels(): void {
    const travels = document.querySelector('.travels') as HTMLElement;
    gsap.fromTo(travels, {
      opacity: 1
    }, {
      opacity: 0,
      duration: .5,
      ease: 'power1.in'
    })
  }

  checkIfMobile(): void {
    if (window.innerWidth > 1280) this.isMobile = false;
    else this.isMobile = true;
  }

  toggleLinkList(): void {
    const mobileLinkList = this.menuMobileLinkList.nativeElement;

    mobileLinkList.classList.toggle('active');
  }
}

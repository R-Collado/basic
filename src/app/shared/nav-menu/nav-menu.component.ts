import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  
  seeProjects: boolean = false;
  seeMobileMenu: boolean = false;
  isMobile!: boolean;

  @ViewChild('navMenuDesktop') navMenuDesktop!: ElementRef;
  @ViewChild('navMenuBg') navMenuBg!: ElementRef;
  @ViewChild('menuMobileLinkList') menuMobileLinkList!: ElementRef;

  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadEventListeners();
    this.checkIfMobile();

    if (this.isSafariBrowser()) this.navMenuBg.nativeElement.classList.add('safari_only');
  }

  
  loadEventListeners(): void {
    const menu = this.navMenuDesktop.nativeElement;

    window.onwheel = e => {

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

    window.onresize = e => {
      this.checkIfMobile();
    }
  }

  isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;

  toggleProjectsList(isOpen: boolean = true): void {
    
    if (isOpen) this.showProjects();
    else this.hideProjects();
    
    this.seeProjects = isOpen;
  }

  showProjects(): void {
    const projects = document.querySelector('.projects') as HTMLElement;
    gsap.fromTo(projects, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .5,
      ease: 'power1.in'
    })
  }

  hideProjects(): void {
    const projects = document.querySelector('.projects') as HTMLElement;
    gsap.fromTo(projects, {
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
    console.log('clicked')
    const mobileLinkList = this.menuMobileLinkList.nativeElement;

    mobileLinkList.classList.toggle('active');
  }
}

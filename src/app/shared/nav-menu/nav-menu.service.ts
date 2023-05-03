import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  oldColors = {
    bg: '',
    fg: ''
  };

  constructor() { }

  toggleRootColors(mode: string, isMainComponent: boolean) {
    const rootElement = document.querySelector(':root') as HTMLElement;
    const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;

    window.scrollTo(0, 0)

    this.oldColors = {
      bg: rootElement.style.getPropertyValue('--clr-neutral-100'),
      fg: rootElement.style.getPropertyValue('--clr-neutral-900')
    }

    if (isMainComponent) {
      menu.dataset['mainComponent'] = 'true';
      return;
    } else {
      menu.dataset['mainComponent'] = 'false';
      menu.dataset['transparent'] = 'false';
    }

    if (menu.dataset['mode'] === mode) return this.oldColors;
    else menu.dataset['mode'] = mode;

    if (mode === 'light') {
      rootElement.style.setProperty('--clr-neutral-100', '#f4f4f4');
      rootElement.style.setProperty('--clr-neutral-900', '#252422');
    } else if (mode === 'dark') {
      rootElement.style.setProperty('--clr-neutral-100', '#252422');
      rootElement.style.setProperty('--clr-neutral-900', '#f9cdcd');
    }

    this.animateMenu();
    return this.oldColors;
  }

  animateMenu(): void {
    const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;
    const rootElement = document.querySelector(':root') as HTMLElement;

    let newColors = {
      bg: rootElement.style.getPropertyValue('--clr-neutral-100'),
      fg: rootElement.style.getPropertyValue('--clr-neutral-900')
    }

    gsap.fromTo(menu, {
      background: this.oldColors?.bg,
      color: this.oldColors?.fg
    }, {
      background: newColors.bg,
      color: newColors.fg,
      duration: 1,
    });
  }
}

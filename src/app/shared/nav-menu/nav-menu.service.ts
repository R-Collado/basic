import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor() { }

  toggleRootColors(mode: string, isMainComponent: boolean) {
    const rootElement = document.querySelector(':root') as HTMLElement;
    const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;

    const oldColors = {
      bg: rootElement.style.getPropertyValue('--clr-neutral-100'),
      fg: rootElement.style.getPropertyValue('--clr-neutral-900')
    }

    console.log(oldColors.fg === '#f4f4f4')

    window.scrollTo(0, 0)

    menu.dataset['mode'] = mode;

    if (isMainComponent) {
      menu.dataset['transparent'] = 'true';
      menu.dataset['mainComponent'] = 'true'
    } else  {
      menu.dataset['transparent'] = 'true'
      menu.dataset['mainComponent'] = 'false';
    }

    if (mode === 'light') {
      rootElement.style.setProperty('--clr-neutral-100', '#f4f4f4');
      rootElement.style.setProperty('--clr-neutral-900', '#252422');
      return
    } else if (mode === 'dark') {
      rootElement.style.setProperty('--clr-neutral-100', '#252422');
      rootElement.style.setProperty('--clr-neutral-900', '#f9cdcd');
      return { bg: '#f4f4f4', fg: '#252422' };
    } else {
      return;
    }
  }
}

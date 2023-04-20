import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor() { }

  toggleRootColors(mode: string, isMainComponent: boolean) {
    const rootElement = document.querySelector(':root') as HTMLElement;
    const menu = document.querySelector('.nav-menu') as HTMLElement || document.querySelector('.nav-menu-mobile') as HTMLElement;

    window.scrollTo(0, 0)


    const oldColors = {
      bg: rootElement.style.getPropertyValue('--clr-neutral-100'),
      fg: rootElement.style.getPropertyValue('--clr-neutral-900')
    }

    if (isMainComponent) {
      menu.dataset['mainComponent'] = 'true';
    } else {
      menu.dataset['mainComponent'] = 'false';
      menu.dataset['transparent'] = 'false';
    }

    if (menu.dataset['mode'] === mode) return oldColors;
    else menu.dataset['mode'] = mode;

    if (mode === 'light') {
      rootElement.style.setProperty('--clr-neutral-100', '#f4f4f4');
      rootElement.style.setProperty('--clr-neutral-900', '#252422');
      return oldColors;
    } else if (mode === 'dark') {
      rootElement.style.setProperty('--clr-neutral-100', '#252422');
      rootElement.style.setProperty('--clr-neutral-900', '#f9cdcd');
      return oldColors;
    } else {
      return;
    }
  }
}

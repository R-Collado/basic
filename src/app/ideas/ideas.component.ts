import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/nav-menu/nav-menu.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  constructor(public navService: NavMenuService) { }

  ngOnInit(): void {
    const ideasComponent = document.querySelector('#ideas-component') as HTMLElement;

    setTimeout(() => {
      const oldColors = this.navService.toggleRootColors('dark', false);

      gsap.fromTo(ideasComponent, {
        background: oldColors?.bg,
        color: oldColors?.fg
      }, {
        background: '#252422',
        color: '#f9cdcd',
        duration: 1 
      })
    });
  }

}

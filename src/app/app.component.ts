import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic';

  ngOnInit(): void {
    const bg = document.querySelector('.bg') as HTMLElement;
    if (this.isSafariBrowser()) bg.classList.add('safari_only');

  }

  isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
}

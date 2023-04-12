import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helping-people',
  templateUrl: './helping-people.component.html',
  styleUrls: ['./helping-people.component.scss']
})
export class HelpingPeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.playVideo();
  }

  playVideo(): void {
    const video = document.querySelector('.video') as HTMLVideoElement;
    video.muted = true;
    video.play();
    video.onended = e => {
      video.play();
    }
  }
}

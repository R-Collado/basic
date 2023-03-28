import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-agency-spotlight',
  templateUrl: './agency-spotlight.component.html',
  styleUrls: ['./agency-spotlight.component.scss']
})
export class AgencySpotlightComponent implements OnInit {

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

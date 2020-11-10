import { Component, OnInit } from '@angular/core';
declare const dashjs: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() {
  }

  videoPlay(): void {
    // const url = 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd';
    // const player = dashjs.MediaPlayer().create();
    // player.initialize(document.querySelector('#videoPlayer'), url, true);
  }


  ngOnInit(): void {
    this.videoPlay();


  }
}

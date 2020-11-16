import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-video-placeholder',
  templateUrl: './profile-video-placeholder.component.html',
  styleUrls: ['./profile-video-placeholder.component.scss']
})
export class ProfileVideoPlaceholderComponent implements OnInit {
  @Input() pic;
  constructor() { }

  @Input() video;

  ngOnInit(): void {
  }

}

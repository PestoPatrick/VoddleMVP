import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  videos: [];
  Username = 'Patrick';
  @Input() video: Video;
  constructor() { }

  ngOnInit(): void {
  }

}

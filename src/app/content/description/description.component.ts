import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  vidDescription = 'This is where the description will be.';
  constructor() { }

  ngOnInit(): void {
  }

}

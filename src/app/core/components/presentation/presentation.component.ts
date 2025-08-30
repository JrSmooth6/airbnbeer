import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}

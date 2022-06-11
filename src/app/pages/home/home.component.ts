import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  images: string[] = [
    '../assets/img/galeria/galeria-1',
    '../assets/img/galeria/galeria-2',
    '../assets/img/galeria/galeria-3',
    '../assets/img/galeria/galeria-4',
  ]

  constructor( private carrousel: NgbCarouselConfig ) { }


}

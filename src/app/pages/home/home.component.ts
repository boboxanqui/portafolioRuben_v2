import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {

  images: string[] = [
    '../../../assets/img/galeria/galeria-1.webp',
    '../../../assets/img/galeria/galeria-2.webp',
    '../../../assets/img/galeria/galeria-7.webp',
    '../../../assets/img/galeria/galeria-8.webp',
  ]

  constructor( private carrousel: NgbCarouselConfig ) {
    carrousel.pauseOnHover = false;
    carrousel.interval = 3000
   }


}

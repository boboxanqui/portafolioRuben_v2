import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [ './book.component.css' ]
})

export class BookComponent  {

  constructor() {
    for( let i = 1; i <= this.numPics; i++ ){
      this.pics.push(`../../../assets/img/galeria/galeria-${i}.webp`)
    }
   }

  numPics: number = 18;
  pics: string[] = []

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }

  onSwiper( [swiper]: any ){
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

}

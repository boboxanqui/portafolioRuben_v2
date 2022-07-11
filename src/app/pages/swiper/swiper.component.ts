import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Keyboard, Navigation, Pagination, Zoom, Swiper } from 'swiper';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Pagination, Zoom]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  @Input() slide: number = 0;
  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
    console.log('Swiper component creation');
    this.config.initialSlide = this.slide
  }

  // private swiper = new Swiper('.swiper');

  config: SwiperOptions = {
    centeredSlides: true,
    init: false,
    initialSlide: 0,
    keyboard: true,
    lazy: true,
    navigation: true,
    pagination: { dynamicBullets: true },
    slidesPerView: 1,
    spaceBetween: 50,
    zoom: {maxRatio: 2},
  }

  closeSwiper(){
    this.modalService.dismissAll()
  }

  zoomIn(){
    console.log('zoooOOOOO00000OOOOOOooooo.....m');

    // this.swiper.config.zoom = {minRatio: 3}

    // console.log(this.swiper.zoom.scale);
    
    // this.swiper.zoom.enable()
    // this.swiper.zoom.out()


  }


}

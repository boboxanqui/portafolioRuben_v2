import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Keyboard, Navigation, Pagination, Zoom, Swiper } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Pagination, Zoom]);

@Component({
  selector: 'app-pictureViewer',
  templateUrl: './pictureViewer.component.html',
  styleUrls: ['./pictureViewer.component.scss']
})
export class pictureViewerComponent implements OnInit {

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

    this.swiper?.swiperRef.zoom.in()

    console.log(    this.swiper?.swiperRef.zoom.scale
      );
    


    // this.swiper.config.zoom = {minRatio: 3}

    // console.log(this.swiper.zoom.scale);

  }

  zoomOut(){
    this.swiper?.swiperRef.zoom.out()
  }

  zoomed():boolean{
    return this.swiper?.swiperRef.zoom.scale! >= 2
  }


}

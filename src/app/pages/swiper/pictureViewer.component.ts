import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
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

  constructor( 
    private modalService: NgbModal,
    private ngZone: NgZone
    ) { }
  
  ngOnInit(): void {
    this.config.initialSlide = this.slide
  }

  config: SwiperOptions = {
    centeredSlides: true,
    centeredSlidesBounds: true,
    init: false,
    initialSlide: 0,
    keyboard: true,
    lazy: true,
    navigation: true,
    pagination: { dynamicBullets: true },
    slidesPerView: 1,
    spaceBetween: 50,
    touchEventsTarget: 'container',
    zoom: { maxRatio: 2 },
  }

  private _zoomed!: boolean;

  get zoomed():boolean{
    return this._zoomed
  }
  
  closeSwiper(){
    this.modalService.dismissAll()
  }

  zoomIn(){
    this.swiper?.swiperRef.zoom.in()
  }

  zoomOut(){
    this.swiper?.swiperRef.zoom.out()
  }

  zoomChange( event: any ){
    this.ngZone.run( (..._) =>{
      event[1] === 1 ? this._zoomed = false : this._zoomed = true;
      // console.log( 'IS IN ANGULAR ZONE -> ', NgZone.isInAngularZone() );
    } )
  }

}

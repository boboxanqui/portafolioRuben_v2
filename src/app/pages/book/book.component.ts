import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [ './book.component.scss' ]
})

export class BookComponent implements OnInit  {

  constructor( private modalService: NgbModal ) {
  }
  
  ngOnInit(): void {   

    for( let i = 1; i <= this.numPics; i++ ){
      this.pics.push(`../../../assets/img/galeria/galeria-${i}.webp`)
    }
    
  }

  numPics: number = 18;
  pics: string[] = []
  showSwiper: boolean = false;
  showSlide: number = 0;

  launchSwiper( slide: number, content: TemplateRef<HTMLElement> ){
    this.showSlide = slide;
    this.modalService.open(content, {
      animation: false,
      centered: true,
      scrollable: true,
    });
  }

  open(content: TemplateRef<HTMLElement>) {
    this.modalService.open(content);
  }

}

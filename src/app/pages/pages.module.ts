import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ResumeComponent } from './resume/resume.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { CommonComponent } from './common/common.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { pictureViewerComponent } from './swiper/pictureViewer.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    BioComponent,
    ResumeComponent,
    BookComponent,
    ContactComponent,
    CommonComponent,
    pictureViewerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbCarouselModule,
    NgbModule,
    SwiperModule
  ],
})
export class PagesModule { }

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
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    BioComponent,
    ResumeComponent,
    BookComponent,
    ContactComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbCarouselModule,
    NgbModule
  ]
})
export class PagesModule { }

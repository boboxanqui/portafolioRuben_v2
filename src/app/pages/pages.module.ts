import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ResumeComponent } from './resume/resume.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    BioComponent,
    ResumeComponent,
    BookComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
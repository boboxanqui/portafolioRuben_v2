import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { BookComponent } from './book/book.component';
import { CommonComponent } from './common/common.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [{
  path: '', 
  component: CommonComponent,
  children: [
    {path: 'bienvenida', component: HomeComponent},
    {path: 'biografia', component: BioComponent},
    {path: 'trayectoria', component: ResumeComponent},
    {path: 'galeria', component: BookComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', redirectTo: 'bienvenida'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

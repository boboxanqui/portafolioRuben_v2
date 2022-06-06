import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { BookComponent } from './pages/book/book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'bienvenida', component: HomeComponent},
  {path: 'biografia', component: BioComponent},
  {path: 'trayectoria', component: ResumeComponent},
  {path: 'galeria', component: BookComponent},
  {path: 'contacto', component: ContactComponent},
  {path: '**', redirectTo: 'bienvenida'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

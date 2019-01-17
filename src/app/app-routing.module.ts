import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReadMoreServiceComponent } from './readMore/read-more-service/read-more-service.component';
import { PicsComponent } from './components/pics/pics.component'
import { CardComponent } from './components/card/card.component'

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pics', component: PicsComponent },
  { path: 'card', component: HomeComponent },
  { path: 'readMoreService', component: ReadMoreServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

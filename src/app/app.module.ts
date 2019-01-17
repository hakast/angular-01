import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatGridListModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ReadMoreServiceComponent } from './readMore/read-more-service/read-more-service.component';
import { NavComponent } from './components/nav/nav.component';
import { PicsComponent } from './components/pics/pics.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NavComponent,
    ReadMoreServiceComponent,
    PicsComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfBDsLeyUU9ZYLzE-zqprOgF2CfPjcLdo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

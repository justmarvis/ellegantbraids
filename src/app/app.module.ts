import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BraidsComponent } from './braids/braid/braid.component';
import { KnotlessComponent } from './braids/knotless/knotless.component';
import { ContactComponent } from './header/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './header/social/social.component';
import { SearchComponent } from './header/search/search.component';
import { ButtonComponent } from './hero/button/button.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppRoutingModule } from './app-routing.module';
import { GoddessComponent } from './braids/goddess/goddess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HeroComponent,
    WelcomeComponent,
    BraidsComponent,
    KnotlessComponent,
    ContactComponent,
    FooterComponent,
    SocialComponent,
    SearchComponent,
    ButtonComponent,
    HomeComponent,
    AppointmentComponent,
    GoddessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

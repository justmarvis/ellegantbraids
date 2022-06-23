import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonComponent } from './button/button.component';
import { BraidsComponent } from './braids/braids.component';
import { KnotlessComponent } from './knotless/knotless.component';
import { ContactComponent } from './header/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './header/social/social.component';
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HeroComponent,
    WelcomeComponent,
    ButtonComponent,
    BraidsComponent,
    KnotlessComponent,
    ContactComponent,
    FooterComponent,
    SocialComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

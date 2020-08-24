import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { DataServiceService } from './services/data-service.service';
import { OthersComponent } from './components/pages/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    FooterComponent,
    SocialComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

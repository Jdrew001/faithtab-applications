import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeadingComponent } from './home/heading/heading.component';
import { AnnouncementsComponent } from './home/announcements/announcements.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { IamglobalSectionComponent } from './iamglobal-section/iamglobal-section.component';
import { PlanAVisitSectionComponent } from './plan-a-visit-section/plan-a-visit-section.component';
import { MinistriesSectionComponent } from './home/ministries-section/ministries-section.component';
import { BiblestudySectionComponent } from './home/biblestudy-section/biblestudy-section.component';
import { AboutComponent } from './about/about.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PlanAVisitComponent } from './plan-a-visit/plan-a-visit.component';
import { IamglobalComponent } from './iamglobal/iamglobal.component';
import { BiblestudyComponent } from './biblestudy/biblestudy.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeadingComponent,
    AnnouncementsComponent,
    AboutSectionComponent,
    IamglobalSectionComponent,
    PlanAVisitSectionComponent,
    MinistriesSectionComponent,
    BiblestudySectionComponent,
    AboutComponent,
    MinistriesComponent,
    PlanAVisitComponent,
    IamglobalComponent,
    BiblestudyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

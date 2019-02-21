import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PlanAVisitComponent } from './plan-a-visit/plan-a-visit.component';
import { IamglobalComponent } from './iamglobal/iamglobal.component';
import { BiblestudyComponent } from './biblestudy/biblestudy.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MinistriesComponent,
    PlanAVisitComponent,
    IamglobalComponent,
    BiblestudyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

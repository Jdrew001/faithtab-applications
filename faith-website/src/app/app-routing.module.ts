import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BiblestudyComponent } from './biblestudy/biblestudy.component';
import { ContactComponent } from './contact/contact.component';
import { IamglobalComponent } from './iamglobal/iamglobal.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PlanAVisitComponent } from './plan-a-visit/plan-a-visit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ministries', component: MinistriesComponent },
  { path: 'planavisit', component: PlanAVisitComponent },
  { path: 'iamglobal', component: IamglobalComponent },
  { path: 'biblestudy', component: BiblestudyComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

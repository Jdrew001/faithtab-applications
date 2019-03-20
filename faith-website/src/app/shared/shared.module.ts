import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    MDBBootstrapModulesPro
  ]
})
export class SharedModule { }

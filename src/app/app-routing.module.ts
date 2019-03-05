import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
// import { HeaderComponent } from '../app/components/header/header.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
  // { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

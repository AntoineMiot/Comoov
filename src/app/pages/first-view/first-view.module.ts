import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstViewPage } from './first-view.page';
//import { ComponentFactory } from '@angular/core/src/render3';

const routes: Routes = [
  {
    path: '',
    component: FirstViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstViewPage]
})
export class FirstViewPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PassagerCreditPage } from './passager-credit.page';

const routes: Routes = [
  {
    path: '',
    component: PassagerCreditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PassagerCreditPage]
})
export class PassagerCreditPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'first-view', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'first-view', loadChildren: './pages/first-view/first-view.module#FirstViewPageModule' },
  { path: 'second-view', loadChildren: './pages/second-view/second-view.module#SecondViewPageModule' },
  { path: 'third-view', loadChildren: './pages/third-view/third-view.module#ThirdViewPageModule' },
  { path: 'fourth-view', loadChildren: './pages/fourth-view/fourth-view.module#FourthViewPageModule' },
  //{ path: 'fifth-view', loadChildren: './pages/fifth-view/fifth-view.module#FifthViewPageModule' },
  { path: 'passager-carte', loadChildren: './pages/passager-carte/passager-carte.module#PassagerCartePageModule' },
  { path: 'passager-credit', loadChildren: './pages/passager-credit/passager-credit.module#PassagerCreditPageModule' },
  { path: 'conducteur-carte', loadChildren: './pages/conducteur-carte/conducteur-carte.module#ConducteurCartePageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

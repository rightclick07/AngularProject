import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddsongComponent } from './addsong/addsong.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'addsong',component: AddsongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

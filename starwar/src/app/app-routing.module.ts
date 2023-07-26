import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {filmsComponent } from './Films/films.component';


const routes: Routes = [
  {
    path:'',
    component:filmsComponent
  },
  {
    path:'films',
    component:filmsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

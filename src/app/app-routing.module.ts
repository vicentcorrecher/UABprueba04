import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"Heroes" ,component:HeroesComponent},
  {path:"Heroe/:nombre", component:HeroeComponent},
  {path:"Home" ,component:HomeComponent},
  {path:"About" ,component:AboutComponent},
  {path:"Busqueda", component:BusquedaComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

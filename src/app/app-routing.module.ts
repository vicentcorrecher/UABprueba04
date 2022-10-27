import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const routes: Routes = [
  {path:"" ,component:HeroesComponent},
  {path:"Heroes" ,component:HeroesComponent},
  {path:"Heroe/:id", component:HeroeComponent},
  {path:"Home" ,component:HomeComponent},
  {path:"About" ,component:AboutComponent},
  {path:"**", component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

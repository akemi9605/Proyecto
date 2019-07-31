import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseComponent } from './pages/houses/house/house.component';
import { TimelineComponent } from './pages/timeline/timeline.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'character/:id', component: CharacterComponent
  },
  {
    path: 'houses', component: HousesComponent
  },
  {
    path: 'house/:id', component: HouseComponent
  },
  {
    path: 'timeline', component: TimelineComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


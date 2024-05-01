import { Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MyMapComponent } from './components/my-map/my-map.component';


export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'pokemons', component: PokemonListComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'login', component: LoginComponent},
    { path: 'myMap', component: MyMapComponent},
    { path: '**', redirectTo:'login', pathMatch:'full' }
  ];
  
  
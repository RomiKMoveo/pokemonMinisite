import { Component } from '@angular/core';

import { PokemonDetailInterface } from '../../interfaces/pokemon-detail.interface';
import { PokemonService } from '../../services/pokemon.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchBarComponent,
    FilterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchPokemon: PokemonDetailInterface[] = [];
  isSearching: boolean = false;

  constructor(private pokemonService: PokemonService) {}
  

  onSearchPokemon(): void {

   }

}

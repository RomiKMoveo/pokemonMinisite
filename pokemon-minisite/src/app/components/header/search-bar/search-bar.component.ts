import { Component } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { PokemonDetailInterface } from '../../../interfaces/pokemon-detail.interface';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchPokemon: PokemonDetailInterface[] = [];
  isSearching: boolean = false;

  constructor(private pokemonService: PokemonService) {}
  

  onSearchPokemon(): void {

   }

}


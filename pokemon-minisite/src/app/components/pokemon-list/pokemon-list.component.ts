import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonInterface } from '../../interfaces/pokemon.interface';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  pokemons: PokemonInterface[] = [];

  constructor(private pokemonService: PokemonService) {}
  
  
  ngOnInit()  {
    this.pokemonService.getPokemonList().subscribe((pokemons: PokemonInterface[]) => {
      this.pokemons = pokemons;
      console.log(pokemons);
      });
    }

    showPokemonDetail(pokemon: PokemonInterface): void {
      // Implement the logic to display more information about the chosen Pokemon
      console.log('Clicked Pokemon:', pokemon);
      // You can navigate to a detail page, display a modal, or any other desired action
    }
  }


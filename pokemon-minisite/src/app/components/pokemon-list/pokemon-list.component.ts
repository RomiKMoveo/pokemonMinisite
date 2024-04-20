import { Component, OnInit, Input } from '@angular/core';
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
  isSearching: boolean = false;
  selectedPokemon?: PokemonInterface;


  constructor(
    private pokemonService: PokemonService,
    ) {}
  
  
  ngOnInit()  {
    this.pokemonService.getPokemonList().subscribe((pokemons: PokemonInterface[]) => {
      this.pokemons = pokemons;
      console.log(pokemons);
      });
    }

    // showPokemonDetail(pokemon: PokemonInterface): void {
    //   this.selectedPokemon = pokemon;
    //   console.log('Clicked Pokemon:', this.selectedPokemon);
    // }

    openPopup(pokemon: PokemonInterface): void {
      this.selectedPokemon = pokemon;
      
    }
  
    closePopup(): void {
      this.selectedPokemon = undefined;
    }

    
  }


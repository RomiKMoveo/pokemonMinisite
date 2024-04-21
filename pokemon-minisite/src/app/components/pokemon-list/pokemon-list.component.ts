import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonInterface } from '../../interfaces/pokemon.interface';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';



@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  pokemons: PokemonInterface[] = [];
  selectedPokemon?: PokemonInterface;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
    ) {}
  
  
  ngOnInit()  {
    this.pokemonService.getPokemonList()
    .subscribe((pokemons: PokemonInterface[]) => {
      this.pokemons = pokemons;
      console.log(pokemons);
      });
    }

    openPopup(pokemon: PokemonInterface): void {
      console.log('Clicked Pokemon:', pokemon);
      const dialogRef = this.dialog.open(PokemonDetailComponent, {
        data: pokemon
      });
    }

    
  }


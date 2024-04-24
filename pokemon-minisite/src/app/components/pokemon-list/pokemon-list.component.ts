import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonInterface } from '../../interfaces/pokemon.interface';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FilterPokemonByTypeAndNamePipe } from '../../pipes/filter-pokemon.pipe';




@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgFor,
    FilterPokemonByTypeAndNamePipe,
    FormsModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  pokemons: PokemonInterface[] = [];
  selectedPokemon?: PokemonInterface;
  
  types: string[] = [];
  selectedType: string = 'all';
  searchInput: string = '';

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog,
    ) {}
  
  
  ngOnInit()  {
    this.pokemonService.getPokemonList()
    .subscribe((pokemons: PokemonInterface[]) => {
      this.pokemons = pokemons;

      this.getAllTypes();  
    });
    
    }

    openPopup(pokemon: PokemonInterface): void {
      const dialogRef = this.dialog.open(PokemonDetailComponent, {
        data: pokemon

      });
    }

    getAllTypes(): void {
      this.pokemons.forEach(pokemon => {
        pokemon.types.forEach(type => {
          if (!this.types.includes(type)) {
            this.types.push(type);
          }
        });
      });
      
    }
    
    onSearchPokemon(searchTerm: string) {
      this.searchInput = searchTerm;

    }
    
  }


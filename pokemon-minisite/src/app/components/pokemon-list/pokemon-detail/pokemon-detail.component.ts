import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PokemonInterface } from '../../../interfaces/pokemon.interface';
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonDetailInterface } from '../../../interfaces/pokemon-detail.interface';



@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {  
  pokemonToPresent?:PokemonInterface
  pokemonDetail?: PokemonDetailInterface;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public selectedPokemon: PokemonInterface,
    private pokemonService: PokemonService) 
  {
    this.pokemonToPresent = selectedPokemon; 
  }

    
    ngOnInit() {
      this.getPokemonDetail();
    }

    getPokemonDetail(): void {
      this.pokemonService.getPokemonDetail(this.selectedPokemon.name)
    .subscribe((pokemon: PokemonDetailInterface) => {
        this.pokemonDetail = pokemon;
        console.log('Pokemon Detail:', this.pokemonDetail);
    });
    }
  
  }

  

  



import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PokemonInterface } from '../../../interfaces/pokemon.interface';
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-pokemon-detail',
  // standalone: true,
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {  
  pokemonToPresent?:PokemonInterface
  pokemonDetail?: PokemonInterface;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public selectedPokemon: PokemonInterface,
    private pokemonService: PokemonService) 
  {
    this.pokemonToPresent = selectedPokemon; 
  }

    
    ngOnInit(): void {
    }


  }
  
 

  

  



import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PokemonInterface } from '../../../interfaces/pokemon.interface';
import { PokemonService } from '../../../services/pokemon.service';
import { Observable } from 'rxjs';
import { NgStyle } from '@angular/common';




@Component({
  standalone:true,
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
  imports: [
    NgStyle
  ]
})
export class PokemonDetailComponent {  
  pokemonToPresent?:PokemonInterface
  pokemonDetail?: PokemonInterface;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public selectedPokemon: PokemonInterface) 
  {
    this.pokemonToPresent = selectedPokemon; 
  }

  getTypeColor(types: any) {
    let firstTypeUntilComma = types.substring(0, types.indexOf(','));
    if(firstTypeUntilComma === "") {
      firstTypeUntilComma = types;
    }
     
    switch (firstTypeUntilComma) {
      case 'grass':
        return '#7EB95B';
      case 'fire':
        return '#FD5D5C';
      case 'water':
        return '#5BA6D2';
      case 'bug':
        return '#91BA2E';
      case 'normal':
        return '#CCC9AA';
      case 'poison':
        return '#C565E4';
      case 'fairy':
        return '#FFA0C2';
      case 'ground':
        return '#E1D158';
      case 'electric':
        return '#FFFA24';
      case 'fighting':
        return '#EF6165';
      case 'psychic':
        return '#F55792';
      case 'rock':
        return '#94834F';
      case 'ghost':
        return '#B38DC2';
        default:
        return 'transparent'; 
   }
  }
}
  
 

  

  



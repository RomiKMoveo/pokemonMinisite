import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInterface } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filterPokemon',
  standalone: true
})
export class FilterPokemonByTypeAndNamePipe implements PipeTransform {
  transform(pokemons: PokemonInterface[], selectedType: string, searchInput: string): any[] {
    if (!pokemons) {
      return [];
    }

    return pokemons.filter(pokemon =>
      (selectedType === 'all' || pokemon.types.includes(selectedType)) &&
      (!searchInput || pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
    );
  }
}

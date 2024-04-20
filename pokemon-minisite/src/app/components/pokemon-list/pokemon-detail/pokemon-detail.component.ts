import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailInterface } from '../../../interfaces/pokemon-detail.interface';
import { PokemonInterface } from '../../../interfaces/pokemon.interface';
import { PokemonListComponent } from '../pokemon-list.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  pokemon?: PokemonInterface;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private pokemonListComponent: PokemonListComponent) {
    this.pokemon = pokemonListComponent.selectedPokemon;
  }

  closePopup(): void {
    this.close.emit();
  }

  preventClose(event: MouseEvent): void {
    event.stopPropagation();
  }

  getProperty(pokemon: PokemonDetailInterface, property: string): string {
    switch (property) {
      case 'Height':
        return pokemon.height + ' cm';
      case 'Weight':
        return pokemon.weight + ' kg';
      default:
        return '';
    }
  }
}

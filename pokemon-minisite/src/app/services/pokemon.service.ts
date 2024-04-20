import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokemonInterface } from '../interfaces/pokemon.interface';
import { PokemonDetailInterface } from '../interfaces/pokemon-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
  private readonly apiUrlLimit = `https://pokeapi.co/api/v2/pokemon?limit=100/`;
  private readonly imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor( private http: HttpClient ) {}

  getPokemonList() {
    return this.http.get<any>(this.apiUrlLimit)
    .pipe(
      map((pokemons: any) => pokemons.results.map((pokemon: PokemonInterface) => ({
        name: pokemon.name,
        url: pokemon.url,
        id: this.extractPokemonIdFromUrl(pokemon.url),
        image: `${this.imageUrl}${this.extractPokemonIdFromUrl(pokemon.url)}.png`,
        types: pokemon.types
  })))); 
  }
 
  private extractPokemonIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  getPokemonDetail(pokemonUrl: string): Observable<PokemonDetailInterface> {
    return this.http.get<PokemonDetailInterface>(pokemonUrl);
  }

  getPokemonSearch(name: string): Observable<PokemonInterface> {
    return this.http.get<any>(`${this.apiUrl}${name}`)
    .pipe(
      map((pokemons: any) => pokemons.results.map((pokemon: PokemonInterface) => ({
        name: pokemon.name,
        url: pokemon.url,
        id: this.extractPokemonIdFromUrl(pokemon.url),
        image: `${this.imageUrl}${this.extractPokemonIdFromUrl(pokemon.url)}.png`,
        types: pokemon.types
  })))); 
  }
  

}

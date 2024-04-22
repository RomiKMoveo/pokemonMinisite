import { map, mergeMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokemonInterface } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
  private readonly imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 100): Observable<PokemonInterface[]> {
    return this.http.get<any>(this.apiUrl + '?offset=0&limit=' + limit).pipe(
      map((response: any) =>
        response.results.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url,
          id: this.extractPokemonIdFromUrl(pokemon.url),
          image: `${this.imageUrl}${this.extractPokemonIdFromUrl(pokemon.url)}.png`
        }))
      ),
      mergeMap((pokemons: PokemonInterface[]) => {
        const requests: Observable<any>[] = pokemons.map((pokemon: { url: string }) =>
          this.http.get<PokemonInterface>(pokemon.url).pipe(
            map((detail: PokemonInterface) => ({
              types: detail.types.map((type: any) => type.type.name),
              height: detail.height, 
              weight: detail.weight, 
              abilities: detail.abilities.map((ability: any) => ability.ability.name) 
            }))
          )
        );

        return forkJoin(requests).pipe(
          map((pokemonDetails: any[]) => {
            return pokemons.map((pokemon: PokemonInterface, i: number) => ({
              ...pokemon,
              types: pokemonDetails[i].types,
              height: pokemonDetails[i].height,
              weight: pokemonDetails[i].weight,
              abilities: pokemonDetails[i].abilities
            }));
          })
        );
      })
    );
  }

  private extractPokemonIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }
}

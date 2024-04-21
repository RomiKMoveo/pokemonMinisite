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
  private readonly apiUrlLimit = `https://pokeapi.co/api/v2/pokemon?limit=100/`;
  private readonly imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor( private http: HttpClient ) {}

  getPokemonList(limit: number = 100): Observable<PokemonInterface[]>{
    return this.http.get<any>(this.apiUrl + '?offset=0&limit=100').pipe(
      map(response => response.results.map((pokemon: PokemonInterface) => ({
        name: pokemon.name,
        url: pokemon.url,
        id: this.extractPokemonIdFromUrl(pokemon.url),
        image: `${this.imageUrl}${this.extractPokemonIdFromUrl(pokemon.url)}.png`
      }))),
      mergeMap(pokemons => {
        const requests: Observable<any>[] = pokemons.map((pokemon: { url: string; }) =>
          this.getPokemonDetails(pokemon.url).pipe(
            map((detail: PokemonInterface) => ({
              types: detail.types.map((type: any) => type.type.name)
              
            }))
          )
        );
        return forkJoin(requests).pipe(
          map(details => {
            return pokemons.map((pokemon: PokemonInterface, index: number) => ({
              ...pokemon,
              types: details[index].types,
              abilities: details[index].abilities,
              height: details[index].height,
              weight: details[index].weight
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

  getPokemonDetails(url: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(url);
  }
 
}

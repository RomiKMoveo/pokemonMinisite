import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  private fetchPokemons() {
    this.http.get(this.apiUrl).subscribe(pokemons=> {
      console.log(pokemons);
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'pokemon-minisite';

  ngOnInit(): void {
    
  }
}

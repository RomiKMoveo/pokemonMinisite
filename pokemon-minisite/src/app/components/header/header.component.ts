import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  
  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  showHistory() {
    this.router.navigate(['/history']);

  }
  
}

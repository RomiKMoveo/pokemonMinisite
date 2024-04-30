import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit{
  searchHistory: string[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService) {}
  
  ngOnInit(): void {
    this.loginService.getisLoggedInSubjectObservable().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    if (this.isLoggedIn === false) {
      this.router.navigate(['/login']);
    }
    else {
      const searchHistoryLS = localStorage.getItem('searchHistory');
      this.searchHistory = searchHistoryLS ? JSON.parse(searchHistoryLS) : [];
    }
    
  }
  goBack() {
    this.router.navigate(['/pokemons']);
  }

}

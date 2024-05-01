import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
  
  ]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  localStoreg: any;

  constructor(
    private router: Router,
    private loginService: LoginService) {}
  
  ngOnInit(): void {
    this.loginService.getisLoggedInSubjectObservable().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  
  }
    

  logout() {
    this.loginService.setisLoggedInSubject(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  showHistory() {
    this.router.navigate(['/history']);
  }

  goToPokemons() {
    this.router.navigate(['/pokemons']);
  }

  goToMyMap() {
    this.router.navigate(['/myMap']);
  }
}

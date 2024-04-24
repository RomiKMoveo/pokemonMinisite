import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  standalone: true,
  imports: [
    FormsModule,
  ]
})
export class LoginComponent implements OnInit{
  email: string = '';
  readonly verifyEmail: string = 'demo@skills.co.il'
  errorMessage: string | undefined;

  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

  emailVerification(): void {
    if (this.email === this.verifyEmail) {
      this.router.navigate(['/pokemons']);
    } else {
      console.log( 'Unauthorized email address');
    }
  }

}
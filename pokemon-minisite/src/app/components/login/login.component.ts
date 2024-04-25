import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { environment } from '../../../environment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ]
})
export class LoginComponent implements OnInit{
  email: string = '';
  readonly verifyEmail: string = environment.verifyEmail;
  errorMessage: string | undefined;

  
  constructor(
    private router: Router,
    private loginService: LoginService,
  ){}

  ngOnInit(): void {
  }

  emailVerification(): void {
    if (this.email === this.verifyEmail) {
      this.loginService.setisVerifiedSubject(true);
      this.router.navigate(['/pokemons']);
    } else {
      this.errorMessage = 'The email you have submitted is not verified';
    }
  }

}
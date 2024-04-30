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

  constructor(
    private router: Router,
    private loginService: LoginService) {}
  
  ngOnInit(): void {
    this.loginService.getisLoggedInSubjectObservable().subscribe(isLoggedIn => {
      console.log(isLoggedIn);
      this.isLoggedIn = isLoggedIn;
    });
  
  }
    

  logout() {
    this.loginService.setisLoggedInSubject(false);
    this.router.navigate(['/login']);
  }

  showHistory() {
    this.router.navigate(['/history']);
  }
  
}

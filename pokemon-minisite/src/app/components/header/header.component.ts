import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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
  isVerifiedSubject: Observable<boolean>;
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) 
  {
    this.isVerifiedSubject = this.loginService.getisVerifiedSubjectObservable();
  }
  
  ngOnInit(): void {
    this.loginService.getisVerifiedSubjectObservable().subscribe(() => {
      this.isVerifiedSubject = this.loginService.getisVerifiedSubjectObservable();
  });
  }
    

  logout() {
    this.loginService.setisVerifiedSubject(false);

    this.router.navigate(['/login']);
  }

  showHistory() {
    this.router.navigate(['/history']);

  }
  
}

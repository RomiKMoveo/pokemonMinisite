import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly isLoggedInLS = localStorage.getItem('isLoggedIn') === 'true';
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedInLS);


  setisLoggedInSubject(status: boolean): void {
    this.isLoggedInSubject.next(status);
    localStorage.setItem('isLoggedIn', status.toString());
  }

  getisLoggedInSubjectObservable(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  getisLoggedInSubject(): boolean {
    return this.isLoggedInSubject.value;
  }
}

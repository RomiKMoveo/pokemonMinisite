import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isVerifiedSubject: BehaviorSubject<boolean>;

  constructor() {
    const isVerifiedLS = localStorage.getItem('isVerified') === 'true';
    this.isVerifiedSubject = new BehaviorSubject<boolean>(isVerifiedLS);
  }

  setisVerifiedSubject(status: boolean): void {
    this.isVerifiedSubject.next(status);
    localStorage.setItem('isVerified', status.toString());
  }

  getisVerifiedSubjectObservable(): Observable<boolean> {
    return this.isVerifiedSubject.asObservable();
  }

  getisVerifiedSubject(): boolean {
    return this.isVerifiedSubject.value;
  }
}

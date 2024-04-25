import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isVerifiedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.cookieService.get('isVerified') === 'true');

  constructor(
     private cookieService: CookieService
    ) { }

  setisVerifiedSubject(status: boolean): void {
    this.isVerifiedSubject.next(status);
    if(status) {
      this.cookieService.set('isVerified', 'true');
    } else {
      this.cookieService.set('isVerified', 'false');
    }
    
    
  }
  getisVerifiedSubjectObservable(): Observable<boolean> {
    return this.isVerifiedSubject.asObservable();
  }
  getisVerifiedSubject(): boolean {
    return this.isVerifiedSubject.value;
  }
}
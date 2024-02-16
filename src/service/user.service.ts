import { Injectable } from '@angular/core';
import { User } from '../assets/types/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  setUser(user: User): void {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.userSubject.next(user);
  }

}



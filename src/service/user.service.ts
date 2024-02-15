import { Injectable } from '@angular/core';
import { User } from '../assets/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }
}



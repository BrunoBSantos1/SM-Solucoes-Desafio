import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }

  isLogged(){
    const token = localStorage.getItem('token');
    return true
  }
}
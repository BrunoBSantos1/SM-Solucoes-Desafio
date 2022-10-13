import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser } from './models/authUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  createRegister(authUser: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.url}register`, authUser)
  }

  efetuarLogin(authUser: any): Observable<any> {
    return this.http.post<AuthUser>(`${this.url}login`, authUser).pipe()
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataUser } from './models/dataUser.model';
import { ResponseDataUser } from './models/responseDatauser';
import { User } from './models/user';
import { UserPage } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ReadUserService {

  private url = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(flag: String): Observable<UserPage> {
    return this.http.get<UserPage>(`${this.url}users?page=${flag}?delay=3`);
  }

  readonlyUser(id: Number): Observable<ResponseDataUser> {
    return this.http.get<ResponseDataUser>(`${this.url}users/${id}`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}users`, user).pipe()
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${user.id}`, user)
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}${id}`)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataUser } from './models/dataUser.model';
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
        return this.http.get<UserPage>(`${this.url}users?page=${flag}`);
    }

    readonlyUser(id: Number): Observable<DataUser> {
      return this.http.get<DataUser>(`${this.url}users/${id}`)
    }

}
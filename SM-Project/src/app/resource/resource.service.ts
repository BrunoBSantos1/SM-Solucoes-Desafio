import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataResource } from './models/dataResource.model';
import { ResourcePage } from './models/reourcePage.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private url = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

    getAllResources(flag: String): Observable<ResourcePage> {
        return this.http.get<ResourcePage>(`${this.url}unknown?page=${flag}`);
    }

    readonlyResource(id: Number): Observable<DataResource> {
      return this.http.get<DataResource>(`${this.url}unknown/${id}`)
    }

}
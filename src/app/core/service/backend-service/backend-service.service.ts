import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public getDataAlBumsExample(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/albums";
    return this.http.get(url);
  }
  public getDataAlBumByID(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    return this.http.get(url);
  }
}

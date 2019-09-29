import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //  Private Properties
  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {
  }

  //  Public Methods
  getHtml(): Observable<any> {
    return this.http.get<any>(this.url + 'html');
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.url + 'user');
  }
}

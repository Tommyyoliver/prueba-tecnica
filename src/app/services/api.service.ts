import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);

  private API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor() { }

  getAllUsers(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.API_URL);
  }

  getUser(id: number): Observable<UserInterface> {
    return this._http.get<UserInterface>(this.API_URL + "/" + id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getUser(): Observable<UserData> {
    return this.httpClient.get<UserData>('http://localhost:8080/user/' + JSON.parse(localStorage.getItem('user')).username);
  }
}

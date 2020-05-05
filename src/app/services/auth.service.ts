import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser, User } from '../model/User';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/AuthResponse';
import { Helper } from '../Helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public auth(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>('http://localhost:8080/authenticate', user);
  }
  public register(registerUser: RegisterUser): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/user/add', registerUser);
  }
  public isAuthenticated(): boolean {
    const token = Helper.loadToken();
    return token != null;
  }
}

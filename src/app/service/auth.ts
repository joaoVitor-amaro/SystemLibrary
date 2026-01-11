import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private UrlApi: string = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}
  
  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.UrlApi, login);
  }

  setUser(user: Usuario): void {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  getUser(): Usuario | null {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) as Usuario : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }
}

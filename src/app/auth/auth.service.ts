import { Injectable } from '@angular/core';

const TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
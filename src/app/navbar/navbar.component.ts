import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/authService/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <div class="logo">Inferia</div>
      <ul class="nav-links">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/dashboard">Dashboard</a></li>
        <li><a routerLink="/login">Login</a></li>
         @if(authService.isLoggedIn()) {
          <li><a routerLink="/logout">Logout</a></li>
         }
        </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService : AuthService) {
} }

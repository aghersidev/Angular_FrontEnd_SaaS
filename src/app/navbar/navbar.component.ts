import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}

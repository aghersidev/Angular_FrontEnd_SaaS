import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private http: HttpClient) {} 

  accederRutaSegura(): void {
    const urlSegura = 'http://localhost:8080/home2';
    
    this.http.get(urlSegura, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Response from /home2:', response);
        alert('Response received. Check console!');
      },
      error: (err) => {
        console.error('Error trying to access /home2:', err);
        alert('Error: Route is ok, token did not work, or backend responded with error.');
      }
    });
  }
}
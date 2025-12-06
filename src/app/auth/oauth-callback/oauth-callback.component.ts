import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  template: '<div class="callback-message">Processing session...</div>'
})
export class OauthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];

      if (token) {
        this.authService.login(token);
        this.router.navigate(['/dashboard']);
      } else {
        console.error('Error: Missing JWT token.');
        this.router.navigate(['/login'], { queryParams: { error: 'auth_failed' } });
      }
    });
  }
}
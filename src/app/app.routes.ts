import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { OauthCallbackComponent } from './auth/oauth-callback/oauth-callback.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'oauth2/callback', 
        component: OauthCallbackComponent 
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [authGuard] 
    },
    { 
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/dashboard' 
    } 
];
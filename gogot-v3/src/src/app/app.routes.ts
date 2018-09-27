import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';

import { UserResolver } from './components/user/user.resolver';
import { AuthGuard } from './services/auth.guard';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing' component: LandingComponent },
    { path: 'user', component: UserComponent, resolve: { data: UserResolver } }
];
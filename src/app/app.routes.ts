import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ServicesComponent } from './pages/domusone/services/services.component';
import { LoginComponent } from './pages/auth/login.component';
import { AuthLoginComponent } from './pages/auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './pages/auth/auth-signup/auth-signup.component';
import { AuthSignupSuccessComponent } from './pages/auth/auth-signup-success/auth-signup-success.component';
import { AuthRePasswordComponent } from './pages/auth/auth-re-password/auth-re-password.component';
import { AuthLockScreenComponent } from './pages/auth/auth-lock-screen/auth-lock-screen.component';
import { CreateServiceComponent } from './pages/domusone/create-service/create-service.component';
import { DropServiceComponent } from './pages/domusone/drop-service/drop-service.component';
import { ProvidersComponent } from './pages/domusone/providers/providers.component';
import { CreateProviderComponent } from './pages/domusone/create-provider/create-provider.component';
import { DropProviderComponent } from './pages/domusone/drop-provider/drop-provider.component';
import { UpdateProviderComponent } from './pages/domusone/update-provider/update-provider.component';

export const routes: Routes = [
  { path: '', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'auth-signup-success', component: AuthSignupSuccessComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-lock-screen', component: AuthLockScreenComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'create-service',
    component: CreateServiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'drop-service',
    component: DropServiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'providers',
    component: ProvidersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-provider',
    component: CreateProviderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'drop-provider',
    component: DropProviderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-provider',
    component: UpdateProviderComponent,
    canActivate: [AuthGuard],
  },
];

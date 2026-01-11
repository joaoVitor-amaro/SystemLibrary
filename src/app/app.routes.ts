import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeBibliotecario } from './pages/bibliotecario/home-bibliotecario/home-bibliotecario';
import { AuthGuard } from './service/auth.guard';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'home-bibliotecario', component: HomeBibliotecario, canActivate: [AuthGuard]}
];

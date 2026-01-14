import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeBibliotecario } from './pages/bibliotecario/home-bibliotecario/home-bibliotecario';
import { AuthGuard } from './service/auth.guard';
import { CadasterAluno } from './pages/bibliotecario/cadaster-aluno/cadaster-aluno';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'home-bibliotecario', component: HomeBibliotecario, canActivate: [AuthGuard]},
    {path: 'cadaster-aluno', component: CadasterAluno, canActivate: [AuthGuard]}
];

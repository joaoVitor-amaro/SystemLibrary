import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeBibliotecario } from './pages/bibliotecario/home-bibliotecario/home-bibliotecario';
import { AuthGuard } from './service/auth.guard';
import { CadasterAluno } from './pages/bibliotecario/cadaster-aluno/cadaster-aluno';
import { DadosBibliotecario } from './pages/bibliotecario/dados-bibliotecario/dados-bibliotecario';
import { CadastroBibliotecario } from './pages/admin/cadastro-bibliotecario/cadastro-bibliotecario';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'home-bibliotecario', component: HomeBibliotecario, canActivate: [AuthGuard]},
    {path: 'cadaster-aluno', component: CadasterAluno, canActivate: [AuthGuard]},
    {path: 'dados-bibliotecario', component: DadosBibliotecario, canActivate: [AuthGuard]},
    {path: 'cadastro-bibliotecario', component: CadastroBibliotecario}
];

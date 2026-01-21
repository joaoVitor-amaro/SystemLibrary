import { Component } from '@angular/core';
import { Sidebar } from "../../../component/sidebar/sidebar";
import { Header } from '../../../component/header/header';
import { Usuario } from '../../../models/usuario';
import { AuthService } from '../../../service/auth';

@Component({
  selector: 'app-dados-bibliotecario',
  imports: [Sidebar, Header],
  templateUrl: './dados-bibliotecario.html',
  styleUrl: './dados-bibliotecario.css',
})
export class DadosBibliotecario {
    bibliotecario: Usuario | null = null;

    constructor(private authService: AuthService) {
      this.bibliotecario = this.authService.getUser();
    }

}

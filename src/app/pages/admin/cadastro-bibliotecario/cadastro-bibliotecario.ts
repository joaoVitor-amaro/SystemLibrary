import { Component } from '@angular/core';
import { Header } from "../../../component/header/header";
import { Sidebar } from "../../../component/sidebar/sidebar";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../service/admin';
import { BibliotecarioRequest } from '../../../models/bibliotecario-request';

@Component({
  selector: 'app-cadastro-bibliotecario',
  imports: [Header, Sidebar, FormsModule, CommonModule],
  templateUrl: './cadastro-bibliotecario.html',
  styleUrl: './cadastro-bibliotecario.css',
})
export class CadastroBibliotecario {
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';
  showToast = false;

  private bibliotecario: BibliotecarioRequest = {
    matricula: 0,
    nome: '',
    email: '',
    telefone: ''
  }

  constructor(private adminService: AdminService){}

  openToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); 
  }

  cadastrar(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.bibliotecario = {
      matricula: Number(form.value.matricula),
      nome: form.value.nome,
      email: form.value.email,
      telefone: form.value.telefone,
    }
    this.adminService.cadastrarBibliotecario(this.bibliotecario).subscribe({
      next: (resp) => {
        this.openToast(resp.message, 'success');
        form.resetForm();
      },
      error: (err) =>  {
        const msg = err.error?.message || 'Erro ao cadastrar';
        this.openToast(msg, 'error');
      }      
    })
  }  
}

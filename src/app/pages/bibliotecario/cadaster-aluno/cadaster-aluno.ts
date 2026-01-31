import { Component } from '@angular/core';
import { Sidebar } from "../../../component/sidebar/sidebar";
import { Header } from "../../../component/header/header";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../../service/aluno';
import { AlunoResponse } from '../../../models/aluno-response';
import { AlunoRequest } from '../../../models/aluno-request';

@Component({
  selector: 'app-cadaster-aluno',
  standalone: true,
  imports: [Sidebar, Header, FormsModule, CommonModule],
  templateUrl: './cadaster-aluno.html',
  styleUrls: ['./cadaster-aluno.css'],
})
export class CadasterAluno {
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';
  showToast = false;

  private aluno: AlunoRequest = {
    matricula: 0,
    nome: "",
    email: '',
    telefone: '',
    turma: ''
  }

  constructor(private alunoService: AlunoService) {}


  openToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); 
  }

  cadastrar(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    this.aluno = {
      matricula: Number(form.value.matricula),
      nome: form.value.nome,
      email: form.value.email,
      telefone: form.value.telefone,
      turma: form.value.turma
    };
    this.alunoService.cadastrar(this.aluno).subscribe({
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

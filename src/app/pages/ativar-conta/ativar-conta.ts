import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtivacaoRequest } from '../../models/ativacao-request';
import { Header } from "../../component/header/header";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AtivarService } from '../../service/ativar-service';

@Component({
  selector: 'app-ativar-conta',
  imports: [Header, FormsModule, CommonModule],
  templateUrl: './ativar-conta.html',
  styleUrl: './ativar-conta.css',
})
export class AtivarConta {
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';
  showToast = false;
  private toastTimeout: any;
  private token: string | null = null;
  private ativarUser: AtivacaoRequest = {
    token: '',
    login: '',
    senha: ''
  }
  constructor(private rota: ActivatedRoute, private router: Router, private ativarServive: AtivarService) {}

  openToast(message: string, type: 'success' | 'error'): void {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
    }, 1000);
  }

  ngOnInit() {
    this.token = this.rota.snapshot.queryParamMap.get('token');
    if(!this.token) {
      this.router.navigate(['/'])
      return;
    }
  }



  ativarConta(form: NgForm) {
    if(form.invalid) {
      return;
    }
    if(form.value.senha !== form.value.confirmeSenha) {
      this.openToast("Senhas diferentes", 'error');
      return;
    }
    this.ativarUser = {
      token: this.token,
      login: form.value.login,
      senha: form.value.senha
    }
    this.ativarServive.ativarConta(this.ativarUser).subscribe({
      next: (resp) => {
        this.openToast(resp.message, 'success');
        form.resetForm();
      },
      error: (err) => {
        const msg = err.error?.message || 'Erro ao ativar';
        this.openToast(msg, 'error');
      }
    })
    
  }
}

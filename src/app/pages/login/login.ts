import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../models/login-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginUser: LoginRequest = {
    login: '',
    senha: ''
  }

  constructor(private authService: AuthService, private route: Router) {}

  login(forms: NgForm) {
    if(forms.invalid) {
      return;
    }
    this.loginUser = {
      login: forms.value.login,
      senha: forms.value.password
    }
    this.authService.login(this.loginUser).subscribe({
      next: (resp) => {
        if(resp.data.typeUser === 'BIBLIOTECARIO') {
          this.authService.setUser(resp.data);
          this.route.navigate(['/home-bibliotecario']);
        }
      },
      error: () => {
        alert("Error")
      }
    })
  }

}

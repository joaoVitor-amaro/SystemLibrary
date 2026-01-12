import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [RouterLink],
})
export class Sidebar {
  bibliotecario: Usuario | null = null
  activeIndex = 0;

  constructor(private router: Router, private auth: AuthService){
      this.bibliotecario = this.auth.getUser();
  }

  setActive(i: number) { this.activeIndex = i; }

  logout(): void {
      this.auth.logout();
      this.router.navigate(['/'])
  }
}
